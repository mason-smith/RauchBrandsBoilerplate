import React from "react";
import { CardTitle, CardText } from "mdbreact";

export default class CategoryCard extends React.Component {
  render() {
    return (
      <div className="card animated fadeIn">
        <div className="view z-depth-2">
          <img src={this.props.src} alt="Image" class="img-fluid" />
        </div>
        <div className="card-body card-body-cascade">
          {/* ADD HEIGHT PROPERTIES TO FORCE HEIGHT */}
          <CardTitle className="align-middle">
            <img src={this.props.title} alt="Image" class="img-fluid" />
          </CardTitle>
          <CardText>{this.props.description}</CardText>
          <a href={this.props.href} class="btn btn-main">
            Visit Site
          </a>
        </div>
      </div>
    );
  }
}
