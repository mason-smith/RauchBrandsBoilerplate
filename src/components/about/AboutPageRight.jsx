import React, { Component } from "react";
import { Row, Col, Fa } from "mdbreact";
import CEOCard from "./CEOCard.jsx";

export default class AboutPageRight extends Component {
  render() {
    return (
      <Row className="animated fadeIn">
        <Col lg="7" sm="12">
          <Row className="mb-3">
            <Col md="12" size="10">
              <h5 className="font-weight-bold mb-3 primary-text">
                Heather Shepardson, CEO
              </h5>
              <p className="grey-text">
                Heather’s leadership at Rauch industries has derived not only
                from her success serving in Fortune 500 businesses, but also
                from her passion and enthusiasm for holiday celebrations and
                time-honored traditions.
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="12" size="10">
              <p className="grey-text">
                Since her childhood, Heather was captivated by the Christmas
                holiday season. Surrounded by her family, she would spend her
                time inventing creative ways to deck the halls and trim the
                trees. One year, she and her grandfather invented a method for
                keeping Christmas trees watered so that no one would have to
                crawl underneath each day to pour more water into to the tree
                stand. Years later, Heather would go on to commercialize and
                market this same clever product as the “Ever-Green Watering
                System”. It became a wildly popular, must-have holiday product
                featured on Today and in Oprah’s O Magazine gift guide, among
                others.
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="12" size="10">
              <p className="grey-text">
                After founding and operating Ever-Green Seasons, Inc., Heather
                joined Rauch Industries in 2008. A longtime admirer of
                Christopher Radko products, Heather brings her lively and
                enchanting nature to the special spirit and enduring mission of
                the company. Today, she spends much of her time in Europe
                selecting artisans and factories to ensure that the Christopher
                Radko products are of the highest quality. In the U.S., Heather
                works closely with Christopher Radko’s designers to ensure that
                each ornament is a true treasure for families, collectors and
                all those who appreciate the fine quality of the hand-crafted
                keepsakes. Her creativity, commitment to excellence and business
                acumen are all in tune with the beauty and ceremony that defines
                the #1 producer of fine European glass ornaments and holiday
                collectibles.
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="12" size="10">
              <p className="grey-text">
                Heather has previously held executive, management and sales
                positions with several Fortune 500 businesses, including Level 3
                Communications, Qwest Communications, The Coors Brewing Company
                and Nike, Inc. All of these positions worked together to set the
                foundation for her current success at Christopher Radko and in
                the holiday sector. Heather currently lives in Seattle.
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg="5" className="mb-lg-0 mb-1">
          <CEOCard
            src="https://images.unsplash.com/photo-1525944317248-e9be93b09038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04778f3055c07443fe1e4e582e2997ea&auto=format&fit=crop&w=934&q=80"
            title="Heather Shepardson, CEO"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            href="https://www.katandannie.com/"
          />
        </Col>
      </Row>
    );
  }
}
