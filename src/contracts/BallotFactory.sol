pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Ballot.sol";

contract BallotFactory is Ownable {
    
    mapping(address => mapping(uint => Ballot )) public ballotLookup;
    
    mapping(address => uint) public ballotCount;
    
    address[] public participants;
    
    address[] public allBallots;
    
    function createBallot(string memory _proposal, string[] memory _candidate) public {
        Ballot b = new Ballot(allBallots.length, _proposal, _candidate);
        ballotLookup[msg.sender][ballotCount[msg.sender]] = b;
        participants.push(msg.sender);
        allBallots.push(address(b));
        emit createdEvent(ballotCount[msg.sender]);
        ballotCount[msg.sender]++;
    }
    
    function allBallotsLength() external view returns (uint) {
        return allBallots.length;
    }
    
    function getBallot(uint _index) external view returns(string memory, uint[] memory, string[] memory, uint[] memory) {
        require (_index >= 0 && _index <= this.allBallotsLength()-1);
        
        (uint[] memory ids, string[] memory names, uint[] memory voteCounts) = Ballot(allBallots[_index]).getCandidates();
        
        return (Ballot(allBallots[_index]).getProposal(), ids, names, voteCounts);
    }
    
    function voteBallot(uint _index, uint candidateId) public {
        Ballot(allBallots[_index]).vote(msg.sender, candidateId);
        emit votedEvent(candidateId);
    }
    
    function getBallots(address myaddress) external view returns(uint[] memory) {
        uint[] memory ids = new uint[](ballotCount[myaddress]);
        
        for (uint i = 0; i < ballotCount[myaddress]; i++) {
            ids[i] = Ballot(ballotLookup[myaddress][i]).getId();
        }
        
        return (ids);
    }
    
    function getBallotCandidates(address myaddress, uint id) external view returns(uint[] memory, string[] memory, uint[] memory) {
        require (id >= 0 && id <= ballotCount[myaddress]-1);
        
        return Ballot(ballotLookup[myaddress][id]).getCandidates();
    }
    
    function getAddresses() external view returns(address[] memory) {
        return participants;
    }
    
    event votedEvent(uint indexed id);
    event createdEvent(uint indexed id);
    
}