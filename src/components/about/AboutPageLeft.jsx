import React, { Component } from "react";
import { Row, Col, Fa } from "mdbreact";

export default class AboutPageLeft extends Component {
  render() {
    return (
      <Row className="animated fadeIn">
        <Col lg="5" className="mb-lg-0 mb-5">
          <img
            src="https://images.unsplash.com/photo-1513195301785-4b50e6b11a43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2061b1f6761877176cc2e51a344d19dd&auto=format&fit=crop&w=1951&q=80"
            alt="Sample project image"
            className="img-fluid rounded z-depth-1"
          />
        </Col>
        <Col lg="7">
          <Row className="mb-1">
            <Col md="12" size="10">
              <h5 className="font-weight-bold mb-3 primary-text">Rauch</h5>
              <p className="grey-text">
                Rauch began as a family business in 1952. Its products, which
                include ornamental glass balls, tree skirts, stockings and more,
                have decorated homes for more than half a century. Today, the
                Rauch brand is a market leader in the holiday giftware and
                seasonal goods industries. The company designs and distributes
                its leading products under the Rauch, Christopher Radko® and
                Celebrations by Radko™ brands and distributes through mass
                retailers, department stores and independent gift retailers
                nationwide.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12" size="10">
              <p className="grey-text">
                Rauch’s corporate headquarters and distribution center is
                located in Gastonia, North Carolina. For more information about
                the company, feel free to call <br /> (800) 71-RADKO or send an
                email to RadkoElves@ChristopherRadko.com.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
