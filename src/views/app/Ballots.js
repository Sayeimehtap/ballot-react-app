import React from "react";

// components

import CardBallot from "./../../components/Cards/CardBallot.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardBallot color="dark" />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardBallot />
        </div>
        <div className="w-full xl:w-6/12 mb-12 px-4">
          <CardBallot  />
        </div>
        <div className="w-full xl:w-6/12 mb-12 px-4">
          <CardBallot color="dark" />
        </div>
      </div>
    </>
  );
}
