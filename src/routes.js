import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardPage } from "./containers/Pages/DashboardPage";
import { DonatePage } from "./containers/Pages/DonatePage";
import { HomePage } from "./containers/Pages/HomePage";
import { LoginPage } from "./containers/Pages/LoginPage";
import { SignupPage } from "./containers/Pages/SignupPage";
import { HOME, DONATE, LOGIN, SIGNUP, DASHBOARD } from "./routesMap";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={DONATE} component={DonatePage} />
        <Route exact path={LOGIN} component={LoginPage} />
        <Route exact path={SIGNUP} component={SignupPage} />
        <Route exact path={DASHBOARD} component={DashboardPage} />
      </Switch>
    </Router>
  );
};
