import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./assembly";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
