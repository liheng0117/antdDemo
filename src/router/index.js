import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Login, Reg, Echart, MyTable, MyForm, Sample } from "./assembly";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Home {...this.props}>
            <Switch>
              <Route path="/table" component={MyTable} />
              <Route path="/echart" component={Echart} />
              <Route path="/myform" component={MyForm} />
              <Route path="/sample" component={Sample} />
              <Redirect path="/" to="/table" />
            </Switch>
          </Home>
        </Switch>
      </BrowserRouter>
    );
  }
}
