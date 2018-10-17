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
                description="For over 30 years, Christopher Radko has been bringing holiday joy into homes across America as the premiere manufacturer of hand-crafted European glass ornaments. Today, our Fine European Glass collection is a showcase for the vibrant colors, exceptional quality and matchless details that have been the hallmarks of Christopher Radko® ornaments since 1985."
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
                description="Founded in 1995, Jay Strongwater offers a sparkling collection of handcrafted, enameled, and bejeweled frames, vases, bowls, boxes, serving accessories, charms, pins, and figurines ranging from collectible miniatures to grand-scale art objets. Jay Strongwater is distributed in leading luxury department stores, fine independent retailers and through its direct to consumer business."
                href="https://www.jaystrongwater.com/"
              />
            </Col>
            <Col
              lg="4"
              md="12"
              className="mb-lg-0 mb-5 align-middle d-flex align-items-stretch"
            >
              <CategoryCard
                src="https://i.imgur.com/a8bJs2t.jpg"
                title="https://i.imgur.com/GnsuAkc.jpg"
                description="Designed to be timeless and transform the rather traditional ornament space, Kat + Annie was created for the next generation of tree trimmers. Kat + Annie features twists on classic ornaments in vibrant colors and unique styles designed to fit a chic modern lifestyle. Ornaments are sold individually as well as meaningfully curated boxed sets in gift ready packages."
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
