import React from "react";
import { Card, CardTitle, CardText } from "mdbreact";

export default class CategoryCard extends React.Component {
  render() {
    return (
      <Card className="align-center animated fadeIn">
        <div className="view z-depth-2">
          <img src={this.props.src} alt="Image" class="img-fluid" />
        </div>
        <div className="card-body card-body-cascade">
          <CardTitle className="align-middle">{this.props.title}</CardTitle>
          <CardText>{this.props.description}</CardText>
        </div>
      </Card>
    );
  }
}
