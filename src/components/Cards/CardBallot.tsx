import React from "react";
import { Link } from "react-router-dom";

// components

export default class CardBallot extends React.Component<{
  theme: any,
  ownerAddress: any,
  proposal: any,
  candidates: any[],
  id: any
}, {}> {

  // eslint-disable-next-line 
  constructor(props: {
    theme: any,
    ownerAddress: any,
    proposal: any,
    candidates:any[],
    id: any
  }) {
    super(props);
  }

  render() {
    const allVotes = this.props.candidates.map(item => Number(item.vote)).reduce((a, b) => a + b, 0);
    return (
      <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (this.props.theme === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex justify-between">
              <div className=" w-full px-4 xl:w-9/12 ">
                <h3
                  className={
                    "font-semibold text-sm " +
                    (this.props.theme === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  {this.props.ownerAddress}
                </h3>
                <h3
                  className={
                    "font-semibold text-lg " +
                    (this.props.theme === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  {this.props.proposal}
                </h3>
              </div>
              <div className=" w-full px-6 xl:w-3/12 ">
                <Link to={"/app/ballots/"+ this.props.id}>
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Vote
              </button>
                </Link>
              </div>
            </div>
          </div>
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
                          <span className="mr-2">{allVotes!==0? Number((item.vote/allVotes) * 100).toFixed(2) + '%': '0%'}</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                style={{ width: allVotes!==0? Number((item.vote/allVotes) * 100).toFixed(2)+ '%': '0%' }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
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
