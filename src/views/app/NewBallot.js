import React from "react";

// components

import CardNewBallot from "components/Cards/CardNewBallot";

export default function NewBallot() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <CardNewBallot />
        </div>
      </div>
    </>
  );
}
