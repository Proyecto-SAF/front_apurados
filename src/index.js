import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import LandingPage from "views/examples/LandingPage.js";
import HomePage from "views/examples/HomePage";
import CatalogoPage from "views/examples/CatalogoPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route path="/home-page" render={(props) => <HomePage {...props} />} />
        <Route
          path="/catalogo-page"
          render={(props) => <CatalogoPage {...props} />}
        />
       
        <Redirect to="/landing-page" />
        <Redirect from="/" to="/landing-page" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
