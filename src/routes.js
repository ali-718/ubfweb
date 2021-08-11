import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DonatePage } from "./containers/Pages/DonatePage";
import { HomePage } from "./containers/Pages/HomePage";
import { HOME, DONATE } from "./routesMap";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={DONATE} component={DonatePage} />
      </Switch>
    </Router>
  );
};
