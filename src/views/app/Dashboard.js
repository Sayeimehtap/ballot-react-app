import React from "react";

// components

import CardStats from "./../../components/Cards/CardStats.js"
import CardBallot from "./../../components/Cards/CardBallot.js";

export default function Dashboard() {
  return (
    <>
      <div className="relative md:pt-16 pb-16 pt-16">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap mx-auto">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MY BALLOTS"
                  statTitle="4"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap my-12">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardBallot
            theme="dark"
            ownerAddress="0x212...1A312"
            proposalDescription="Which brand of car should I buy?" />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardBallot
            ownerAddress="0x0AB2...ABC12"
            proposalDescription="Which element of earth should I buy?" />
        </div>
        <div className="w-full xl:w-6/12 mb-12 px-4">
          <CardBallot
            ownerAddress="0x23A...1A814"
            proposalDescription="Which color of car should I buy?" />
        </div>
        <div className="w-full xl:w-6/12 mb-12 px-4">
          <CardBallot
            theme="dark"
            ownerAddress="0xEF23...1AB12"
            proposalDescription="Which think of my brain should I buy?" />
        </div>
      </div>
    </>
  );
}
