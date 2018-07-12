import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../pages/landing";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact={true} />
      </Switch>
    </BrowserRouter>
  );
};
