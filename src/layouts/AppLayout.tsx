import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AppNavbar from "./../components/Navbars/AppNavbar";
import Sidebar from "./../components/Sidebar/Sidebar";
import HeaderStats from "./../components/Headers/HeaderStats";
import FooterApp from "./../components/Footers/FooterApp";

// views

import Dashboard from "./../views/app/Dashboard";
import Settings from "./../views/app/Settings";
import Tables from "./../views/app/Tables";
import NewBallot from "./../views/app/NewBallot";
import Ballots from "../views/app/Ballots";
import BallotInfo from "../views/app/BallotInfo";

class AppLayout extends React.Component<any, any> {
  // @ts-ignore
  public render() {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AppNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/app/dashboard" exact component={Dashboard} />
              <Route path="/app/ballots" exact component={Ballots} />
              <Route path="/app/ballots/id" exact component={BallotInfo} />
              <Route path="/app/new-ballot" exact component={NewBallot} />
              <Route path="/app/settings" exact component={Settings} />
              <Route path="/app/tables" exact component={Tables} />
              <Redirect from="/app" to="/app/dashboard" />
            </Switch>
            <FooterApp />
          </div>
        </div>
      </>
    );
  }
}

export default AppLayout;