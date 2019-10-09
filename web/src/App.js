import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/templates/NavBar";

import NotFoundPage from "./components/pages/NotFoundPage";

import HomePage from "./components/pages/HomePage";
import PricingPage from "./components/pages/PricingPage";
import RegisterPage from "./components/pages/RegisterPage";

import Footer from "./components/templates/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route path="/not-found" component={NotFoundPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;