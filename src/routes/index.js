import React from "react";
import { Switch, Route } from "react-router-dom";
import CertificationPage from "../views/CertificationPage";
import LandingPage from "../views/LandingPage";
import EducationPage from "../views/EducationPage";
import SkillPage from "../views/SkillPage";
import ExperiencePage from "../views/ExperiencePage";
import ProfilePage from "../views/ProfilePage";
import ContactPage from "../views/ContactPage";
import { AnimatedSwitch } from "react-router-transition";

function Routes() {
  return (
    <Switch>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/contact">
          <ContactPage />
        </Route>
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
      </AnimatedSwitch>
    </Switch>
  );
}

export default Routes;
