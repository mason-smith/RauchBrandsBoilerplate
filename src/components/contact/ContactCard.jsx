import React, { Component } from "react";
import { Col, Card, CardBody, Fa, Button, Input } from "mdbreact";

export default class ContactCard extends Component {
  render() {
    return (
      <Col lg="5" className="lg-0 mb-4 animated fadeIn">
        <Card>
          <CardBody>
            <div className="form-header accent-1 z-depth-2">
              <h3 className="mt-2 py1 text-center">
                <Fa icon="envelope" /> Write to us:
              </h3>
            </div>
            <p className="dark-grey-text text-center py-3 mt-3">
              Questions, comments, just want to say hi? Here's the place!
            </p>
            <div className="md-form">
              <Input
                icon="user"
                label="Your name"
                iconClass="grey-text"
                type="text"
                id="form-name"
              />
            </div>
            <div className="md-form">
              <Input
                icon="envelope"
                label="Your email"
                iconClass="grey-text"
                type="text"
                id="form-email"
              />
            </div>
            <div className="md-form">
              <Input
                icon="tag"
                label="Subject"
                iconClass="grey-text"
                type="text"
                id="form-subject"
              />
            </div>
            <div className="md-form">
              <Input
                icon="pencil"
                label="Your Message"
                iconClass="grey-text"
                type="textarea"
                id="form-text"
              />
            </div>
            <div className="text-center">
              <Button class="btn btn-main">Send Message</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
