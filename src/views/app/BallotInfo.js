import React from "react";

import CardLineChart from 'components/Cards/CardLineChart.js';
import CardBarChart from 'components/Cards/CardBarChart';

export default function BallotInfo() {
  return (
    <>
      <main className="ballot-info-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://www.freelogoservices.com/blog/wp-content/uploads/geometriccolor.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        width="400"
                        height="auto"
                        alt="..."
                        src={require("assets/img/account-r.png").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Vote
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          21
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Day
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Hour
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          33
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Minute
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Which brand of car should I buy?
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-4 text-blueGray-400 font-bold uppercase">
                    0x012321424212A12F1267F32423AA3438146572DE21
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-50 text-indigo-500 border-indigo-100"
                            }
                          >
                            Options
                </th>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700"
                            }
                          >
                            Votes
                </th>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700"
                            }
                          >
                            Status
                </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={require("assets/img/bootstrap.jpg").default}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold text-blueGray-600"
                              }
                            >
                              BMW
                  </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            2200
                </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">60%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                  <div
                                    style={{ width: "60%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={require("assets/img/angular.jpg").default}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold text-blueGray-600"
                              }
                            >
                              Kia
                  </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            1800
                </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">100%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                  <div
                                    style={{ width: "100%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={require("assets/img/sketch.jpg").default}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold text-blueGray-600"
                              }
                            >
                              Scoda
                  </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            3150
                </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">73%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                  <div
                                    style={{ width: "73%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={require("assets/img/react.jpg").default}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold text-blueGray-600"
                              }
                            >
                              Renault
                  </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            4400
                </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">90%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                  <div
                                    style={{ width: "90%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={require("assets/img/vue.jpg").default}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold text-blueGray-600"
                              }
                            >
                              Mercedes Benz
                  </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            5000
                </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">100%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                  <div
                                    style={{ width: "100%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <CardBarChart />
        </div>
      </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
