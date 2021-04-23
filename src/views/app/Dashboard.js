import React from "react";

// components

import CardStats from "./../../components/Cards/CardStats.js"
import CardBallot from "./../../components/Cards/CardBallot";

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
       
      </div>
    </>
  );
}
