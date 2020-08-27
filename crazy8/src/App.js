import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import AgencyLandingPage from "demos/AgencyLandingPage.js";

// import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/adminDash/src/views/Index";
import AdminAuth from "./components/adminDash/src/views/examples/Login";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AgencyLandingPage />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/adminlogin">
        <AdminAuth />
      </Route>
      </Switch>
    </Router>
  );
}

// export default AgencyLandingPage;
