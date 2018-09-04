import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavLink,
  Container
} from "mdbreact";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar color="white" light expand="md" fixed="top" scrolling>
        <Container>
          <NavbarBrand href="/">
            <strong>Rauch Brands</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <NavLink
                className="navLink"
                to="/"
                activeClassName="is-active"
                exact={true}
              >
                {" "}
                Home
              </NavLink>
              <NavLink
                className="navLink"
                to="/about"
                activeClassName="is-active"
              >
                {" "}
                About Us{" "}
              </NavLink>
              <NavLink
                className="navLink"
                to="/contact"
                activeClassName="is-active"
              >
                {" "}
                Contact{" "}
              </NavLink>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
