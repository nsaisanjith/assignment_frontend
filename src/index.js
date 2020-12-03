import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage";
import ViewDetails from "./components/ViewDetails";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";

const route = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/find" exact={true} component={ViewDetails} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(route, document.getElementById("root"));
