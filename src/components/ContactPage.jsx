import React, { Component } from "react";
import { Container, Row } from "mdbreact";
import ContactCard from "./contact/ContactCard.jsx";
import ContactMap from "./contact/ContactMap.jsx";

export default class ContactPage extends Component {
  render() {
    return (
      <Container className="mt-5 pt-5">
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5 primary-text">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <Row>
            <ContactCard />
            <ContactMap />
          </Row>
        </section>
      </Container>
    );
  }
}
