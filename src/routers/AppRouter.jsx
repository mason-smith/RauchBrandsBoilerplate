import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage.jsx";
import AboutPage from "../components/AboutPage.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Header from "../components/Header.jsx";
import ContactPage from "../components/ContactPage.jsx";

const AppRouter = () => (
  <BrowserRouter>
    <div className="wrapper">
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
