import React from "react";
import { CardTitle, CardText } from "mdbreact";

export default class CategoryCard extends React.Component {
  render() {
    return (
      <div className="card animated fadeIn">
        <div className="view z-depth-2">
          <img src={this.props.src} alt="Image" className="img-fluid" />
        </div>
        <div className="card-body card-body-cascade">
          <CardTitle className="align-middle high">
            <img src={this.props.title} alt="Image" className="img-fluid" />
          </CardTitle>
          <CardText>{this.props.description}</CardText>
          <div className="d-flex justify-content-end">
            <a
              href={this.props.href}
              target="_blank"
              className="text-center btn btn-main"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    );
  }
}
