import React, { Component } from "react";
import { Row, Col, Fa, Button } from "mdbreact";

export default class ContactMap extends Component {
  render() {
    return (
      <Col lg="7" className="animated fadeIn">
        <div
          id="map-container"
          className="rounded z-depth-1-half map-container"
          style={{ height: "400px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.2329970227775!2d-122.28695368355183!3d47.602158979184466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzA3LjgiTiAxMjLCsDE3JzA1LjIiVw!5e0!3m2!1sen!2sus!4v1534455824496"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
          />
        </div>
        <br />
        <Row className="text-center">
          <Col md="4">
            <h4>
              <i className="fa fa-map-marker" />
            </h4>
            <p>Seattle, 98122</p>
            <p className="mb-md-0">United States</p>
          </Col>
          <Col md="4">
            <h4>
              <i className="fa fa-phone" />
            </h4>
            <p>+1 (914) 250 - 5555</p>
            <p className="mb-md-0">Mon - Fri, 9:00 am - 5:00 pm</p>
          </Col>
          <Col md="4">
            <h4>
              <i className="fa fa-envelope" />
            </h4>
            <p>info@rauchbrands.com</p>
            <p className="mb-md-0">sale@rauchbrands.com</p>
          </Col>
        </Row>
      </Col>
    );
  }
}
