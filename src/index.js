import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage";
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
      <Route path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(route, document.getElementById("root"));
