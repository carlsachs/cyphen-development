import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "pages/LandingPage.js";
import Contact from "pages/ContactUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/adminDash/src/views/Index.js";
import AdminAuth from "./components/adminDash/src/views/examples/Login.js";
import Team from "./pages/Team.js";
import Pricing from "./pages/Pricing.js";
import OrderForm from "./pages/OrderFormStart.js";
import StepTwo from "./pages/OrderFormStepTwo.js";
import JumpstartForm from "./pages/forms/JumpstartForm.js";
import BoostForm from "./pages/forms/BoostForm.js";
import ThrottleForm from "./pages/forms/ThrottleForm.js";
import UserForm from "./pages/forms/UserForm.js";

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
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/order">
          <OrderForm />
        </Route>
        <Route exact path="/additional">
          <StepTwo />
        </Route>
        <Route exact path="/userinfo">
          <UserForm />
        </Route>
        <Route exact path="/jumpstart">
          <JumpstartForm />
        </Route>
        <Route exact path="/boost">
          <BoostForm />
        </Route>
        <Route exact path="/throttle">
          <ThrottleForm />
      </Route>
      </Switch>
    </Router>
  );
}
