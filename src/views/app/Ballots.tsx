import React from "react";
import Web3 from "web3";

// components

import CardBallot from "../../components/Cards/CardBallot";
import CardStats from "../../components/Cards/CardStats";


class Ballots extends React.Component<any, any> {
 render() {
  const web3: Web3 = window.web3;


  console.log(web3);

  return (
    <>
      <div className="relative md:pt-16 pb-16 pt-16">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PEEEERR"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
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
                      theme="dark"

            ownerAddress="0x0AB2...ABC12"
            proposalDescription="Which element of earth should I buy?" />
        </div>
        <div className="w-full xl:w-6/12 mb-12 px-4">
          <CardBallot
                      theme="dark"
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
}

export default Ballots;
