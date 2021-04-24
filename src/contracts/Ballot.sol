pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Ballot is Ownable {
    uint public ballotId;
    
    string public proposal;
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    
    mapping(uint => Candidate) public candidateLookup;
    
    mapping(address => bool) public voterLookup;

    uint public candidateCount;
    
    
    constructor(uint _id, string memory _proposal, string[] memory _candidate) {
        ballotId = _id;
        proposal = _proposal;
        
        for(uint i=0; i< _candidate.length; i++) {
            addCandiate(_candidate[i]);
        }
        
    }
    
    function getId() external view returns (uint) {
        return ballotId;
    }
    
    function addCandiate(string memory _name) public onlyOwner {
        candidateLookup[candidateCount] = Candidate(candidateCount, _name, 0);
        candidateCount++;
    }
    
    function setProposal(string memory _proposal ) public onlyOwner {
        proposal = _proposal;
    }
    
    function getCandidate(uint id) external view returns (string memory name, uint voteCount) {
        name = candidateLookup[id].name;
        voteCount = candidateLookup[id].voteCount;
    }
    
    function getProposal() external view returns(string memory) {
        return proposal;
    }
    
    function getCandidates() external view returns (uint[] memory, string[] memory, uint[] memory) {
        uint[] memory ids = new uint[](candidateCount);
        string[] memory names = new string[](candidateCount);
        uint[] memory voteCounts = new uint[](candidateCount);
        for (uint i = 0; i < candidateCount; i++) {
            ids[i] = candidateLookup[i].id;
            names[i] = candidateLookup[i].name;
            voteCounts[i] = candidateLookup[i].voteCount;
        }
        return (ids, names, voteCounts);
    }

    function vote(address caller, uint id) public onlyOwner {
        require (!voterLookup[caller]);
        require (id >= 0 && id <= candidateCount-1);
        voterLookup[caller] = true;
        candidateLookup[id].voteCount++;
        emit votedEvent(id);
    }
    
    event votedEvent(uint indexed id);
}