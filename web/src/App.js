import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/templates/NavBar";

import NotFoundPage from "./components/pages/NotFoundPage";

import HomePage from "./components/pages/HomePage";
import PricingPage from "./components/pages/PricingPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import ContactPage from "./components/pages/ContactPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import BonusPage from "./components/pages/BonusPage";

import Footer from "./components/templates/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route path="/not-found" component={NotFoundPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/bonus" component={BonusPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
