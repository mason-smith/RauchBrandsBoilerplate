import React from "react";
import CategoryCard from "./CategoryCard.jsx";
import { Row, Col } from "mdbreact";

class HomeCategories extends React.Component {
  render() {
    return (
      <div className="home-categories">
        <div className="container-fluid">
          <Row>
            <Col
              lg="4"
              md="12"
              className="mb-lg-0 mb-5 align-middle d-flex align-items-stretch"
            >
              <CategoryCard
                src="https://i.imgur.com/Lp60LGv.jpg"
                title="https://www.christopherradko.com/images/logo.png"
                description="World's largest collection of Christopher Radko ornaments, including the complete 2018 collection"
                href="https://www.christopherradko.com/"
              />
            </Col>
            <Col
              lg="4"
              md="12"
              className="mb-lg-0 mb-5 align-middle d-flex align-items-stretch"
            >
              <CategoryCard
                src="https://www.jaystrongwater.com/medias/menu-category-jsw-Brocade-2018.jpg?fv=E5BF1482F2D979DE65E80EAF87DF35A7-387487"
                title="https://www.jaystrongwater.com/medias/logo/logo-large.png?fv=A0D0742CE2949AC465D506D9419D9FBE-6085"
                description="Elegant Gifts Crafted to Last a Lifetime! Frames, Figurines, Decor, &amp; More. One-of-a-Kind Designs, Handcrafted Frames, Hand Painted Jewelry, and Fine Gifts."
                href="https://www.jaystrongwater.com/"
              />
            </Col>
            <Col
              lg="4"
              md="12"
              className="mb-lg-0 mb-5 align-middle d-flex align-items-stretch"
            >
              <CategoryCard
                src="https://images.unsplash.com/photo-1509629740155-bc3c81411269?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=004d7b0adee455b267a0f21e30394107&auto=format&fit=crop&w=1950&q=80"
                title="https://www.katandannie.com/medias/logo/logo-medium.png?fv=9A1A4659472DDEA9DEEAD601D3C729E3-12316"
                description="Featuring twists on classic ornaments in vibrant colors and unique styles designed to fit a chic modern lifestyle."
                href="https://www.katandannie.com/"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeCategories;
