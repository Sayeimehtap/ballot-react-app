// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.1;

import "./Ownable.sol";
import "./SafeMath.sol";
import "./Ballot.sol";

contract BallotFactory is Ownable{
   
    using SafeMath for uint256;

    Ballot[] public ballots;
    uint32 ballotID = ballots.lenght;

    event BallotCreated(Ballot ballot);

    function createBallot() external {
        Ballot ballot = new Ballot( _ballotID, string memory _proposal, uint32 memory _startTime, uint32 memory _endTime, string[] memory _options);
        ballots.push (ballot);
        emit BallotCreated(ballot);
    }
    
    function getBallot(uint32 _id) external view returns (Ballot) {
    return ballots[id];
    }
    
}
