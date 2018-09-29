import React from 'react';
import { Collapse, Container, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header>
        <Navbar light color="light" expand="md">
          <Container>
            <NavbarBrand href="/">
              Ironman 70.3 Club
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Test</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Test</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Test</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
