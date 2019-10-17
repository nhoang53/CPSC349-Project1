import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/templates/NavBar";

import NotFoundPage from "./components/pages/NotFoundPage";

import HomePage from "./components/pages/HomePage";
import PricingPage from "./components/pages/PricingPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import ContactPage from "./components/pages/ContactPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";

import Footer from "./components/templates/Footer";

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { pathname } = this.props.location;
    const path_tokens = pathname.split("/");

    if (path_tokens.length === 3 && path_tokens[1] === "portfolio") {
      return <Route path="/portfolio/:user" component={NotFoundPage} />;
    } else {
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
            <Route exact path="/" component={HomePage} />
            <Redirect to="/not-found" />
          </Switch>

          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default withRouter(App);
