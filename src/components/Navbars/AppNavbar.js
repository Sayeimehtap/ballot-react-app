import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

            <li className="flex items-center">
              <Link to="/app/dashboard" >
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                > No Network
                </button>
              </Link>
            </li>

            <li className="flex items-center">
              <Link to="/app/dashboard" >
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                > 0 ETH
                </button>
              </Link>
            </li>

            <li className="flex items-center">
              <Link to="/app/dashboard" >
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                > Connect to a Wallet
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
