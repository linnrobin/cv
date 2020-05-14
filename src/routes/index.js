import React from "react";
import { Switch, Route } from "react-router-dom";
import CertificationPage from "../views/CertificationPage";
import LandingPage from "../views/LandingPage";

function Routes() {
  return (
    <Switch>
      <Route path="/certification">
        <CertificationPage />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default Routes;
