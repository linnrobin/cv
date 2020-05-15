import React from "react";
import { Switch, Route } from "react-router-dom";
import CertificationPage from "../views/CertificationPage";
import LandingPage from "../views/LandingPage";
import EducationPage from "../views/EducationPage";
import SkillPage from "../views/SkillPage";
import ExperiencePage from "../views/ExperiencePage";
import ProfilePage from "../views/ProfilePage";

function Routes() {
  return (
    <Switch>
      <Route path="/certification">
        <CertificationPage />
      </Route>
      <Route path="/skill">
        <SkillPage />
      </Route>
      <Route path="/experience">
        <ExperiencePage />
      </Route>
      <Route path="/education">
        <EducationPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default Routes;
