import React from 'react';
import { Collapse, Container, DropdownMenu, DropdownItem, DropdownToggle, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';

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
                  <NavLink href="/">Graphs</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Athletes
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                    Alice
                    </DropdownItem>
                    <DropdownItem>
                    Bob
                    </DropdownItem>
                    <DropdownItem>
                    Charlie
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Seasons
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    All time
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
