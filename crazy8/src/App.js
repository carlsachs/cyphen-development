import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "pages/LandingPage.js";
import Contact from "pages/ContactUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/adminDash/src/views/Index";
import AdminAuth from "./components/adminDash/src/views/examples/Login";
import Team from "./pages/Team.js";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/adminlogin">
          <AdminAuth />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
      </Switch>
    </Router>
  );
}

// export default AgencyLandingPage;
