import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Developer from "./components/Developer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Result from "./components/Result";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/developer" component={Developer}></Route>
        <Route exact path="/result" component={Result}></Route>
        <Route exact path="*" component={Error}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
