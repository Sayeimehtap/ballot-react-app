import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import App from "layouts/AppLayout.js";

// views without layouts

import Landing from "views/Landing.js";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/app" component={App} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
