import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AppNavbar from "components/Navbars/AppNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterApp from "components/Footers/FooterApp.js";

// views

import Dashboard from "views/app/Dashboard.js";
import Settings from "views/app/Settings.js";
import Tables from "views/app/Tables.js";
import NewBallot from "views/app/NewBallot";

export default function AppLayout() {
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
            <Route path="/app/ballots" exact component={Dashboard} />
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
