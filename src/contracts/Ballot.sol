// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.1;

import "./Ownable.sol";
import "./SafeMath8.sol";
import "./SafeMath16.sol";
import "./SafeMath32.sol";
import "./SafeMath.sol";


contract Ballot is Ownable {
    
    using SafeMath8 for uint8;
    using SafeMath16 for uint16;
    using SafeMath32 for uint32;
    using SafeMath for uint256;
    
    
    uint32 private ballotID;
    uint private optionCount;
    address private creator;
    string private proposal;
    uint32 private startTime;
    uint32 private endTime;
    address[] private whitelistedAddresses;
    State private lastState;
    
    struct Option {
    uint id;
    string name;
    uint voteCount;
    }

    struct voter{
        address voterID; // wallet address
        bool voted;
    }
    
    enum State {Created, NotStarted, Ongoing, Ended }
	State public state;
	

    mapping(address => voter) public voterLookup;
    mapping(uint => Option) public optionLookup;
    
    

    constructor (uint32 _ballotID, string  memory _proposal, uint32  _startTime, uint32  _endTime, string[] memory _options) public
    {
        ballotID = _ballotID;
        lastState = State.Created;
        creator = msg.sender;
        proposal = _proposal;
        optionCount = _options.length;
        for (uint i = 0; i <= optionCount; i.add(1)) {
            addOption(_options[i]);
        }
    }
    
    event votedEvent(uint indexed id);

    function addOption(string memory name) internal {
        optionLookup[optionCount] = Option(optionCount, name, 0);
        optionCount.add(1); 
    }

    function getOption(uint id) external view returns (string memory name, uint voteCount) {
         name = optionLookup[id].name;
         voteCount = optionLookup[id].voteCount;
     }

    function getOptions() external view returns (string[] memory, uint[] memory) {
        string[] memory names = new string[](optionCount);
        uint[] memory voteCounts = new uint[](optionCount);
        for (uint i = 0; i < optionCount; i.add(1)) {
            names[i] = optionLookup[i].name;
            voteCounts[i] = optionLookup[i].voteCount;
        }
        return (names, voteCounts);
    }

    function doVote(uint id) external {
        require (block.timestamp <= endTime && block.timestamp > startTime,"Not In Range");
        require (!voterLookup[msg.sender].voted,"Already Voted");
        require (id >= 0 && id <= optionCount.sub(1),"Not In Range");
        optionLookup[id].voteCount.add(1);
        voterLookup[msg.sender].voted == true;
        emit votedEvent(id);
    }

    
}
