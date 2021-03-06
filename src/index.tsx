import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/globalStyles";
import Home from "./Pages/Home";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
