import React, { Component } from "react";
import { Container, Row, Col, Fa } from "mdbreact";
import AboutPageLeft from "./about/AboutPageLeft.jsx";
import AboutPageRight from "./about/AboutPageRight.jsx";

export default class AboutPage extends Component {
  render() {
    return (
      <Container>
        <section className="my-5 pt-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5 primary-text">
            About Rauch Brands
          </h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
          </p>
          <AboutPageLeft />
          <hr className="my-5" />
          <AboutPageRight />
        </section>
      </Container>
    );
  }
}
