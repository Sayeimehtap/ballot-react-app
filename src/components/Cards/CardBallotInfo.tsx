import React from "react";
import Web3 from "web3";
import { ABI, contractAddress } from "../Abi/Abi";

// components

export default class CardBallotInfo extends React.Component<{
  theme: any,
  ownerAddress: any,
  id: any
  candidates: any[],
}, {}> {

  constructor(props: {
    theme: any,
    ownerAddress: any,
    candidates: any[],
    id: any
  }) {
    super(props);
  }

  render() {
    const allVotes = this.props.candidates.map(item => item.vote).reduce((a, b) => a + b, 0);
    return (
      <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (this.props.theme === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (this.props.theme === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    selections
                </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (this.props.theme === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Votes
                </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (this.props.theme === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Status
                </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (this.props.theme === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Voting
                </th>
                </tr>
              </thead>
              <tbody>
                {

                  this.props.candidates.map((item, index) =>
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={require("./../../assets/img/selection.png").default}
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        ></img>{" "}
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(this.props.theme === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          {item.name}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.vote}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{allVotes != 0 ? (item.vote / allVotes) * 100 + '%' : '0%'}</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                style={{ width: allVotes != 0 ? (item.vote / allVotes) * 100 + '%' : '0%' }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className=" w-full px-6 xl:w-3/12 ">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={async ()=> {
                                const web3 = new Web3(window.ethereum);

                                web3.eth.handleRevert = true;
                  
                                const contract = new web3.eth.Contract(ABI, contractAddress);
                      
                                await contract.methods.voteBallot(this.props.id, item.id).send({from: '0x700137B458995ef4A0CeAA22E03E56A8D8eF0814'});

                                window.location.reload();
                              }}
                            >
                              Vote
                          </button>
                        </div>
                      </td>
                    </tr>

                  )
                }

              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
