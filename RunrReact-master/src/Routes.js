import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppliedRoute from "./components/AppliedRoute";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    
  </Switch>;

