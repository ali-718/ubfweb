import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./containers/Pages/HomePage";
import { HOME } from "./routesMap";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
      </Switch>
    </Router>
  );
};
