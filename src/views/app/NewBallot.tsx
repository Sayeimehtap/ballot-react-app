import React from "react";

// components

import CardNewBallot from "../../components/Cards/CardNewBallot";

class NewBallot extends React.Component<any, any> {

  public componentDidMount() {
    // trace
  }

  public render() {


    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <CardNewBallot
             />
          </div>
        </div>
      </>
    );
  }
}

export default NewBallot;
