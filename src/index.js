import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import FrontPage from "./FrontPage";

import Menu from "./Menu";
import EgetSpill from "./EgetSpill";
import NyttSpill from "./NyttSpill";
import NyttStart from "./NyttStart";
import EgetStart from "./EgetStart";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={FrontPage} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/nyttspill" component={NyttSpill} />
    <Route exact path="/nyttstart" component={NyttStart} />
    <Route exact path="/egetspill" component={EgetSpill} />
    <Route exact path="/egetstart" component={EgetStart} />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
