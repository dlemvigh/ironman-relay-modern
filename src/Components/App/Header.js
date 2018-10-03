import React from 'react';
import { graphql } from "react-relay";
import { Collapse, Container, DropdownMenu, DropdownItem, DropdownToggle, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router'
import HeaderMenuAthletes from "./HeaderMenuAthletes";
import Renderer from "../Renderer";

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
            <NavbarBrand tag={Link} to="/">
              Ironman 70.3 Club
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/graphs" activeClassName="active">Graphs</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Athletes
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Renderer
                      query={HeaderQuery}
                      Component={props => <>
                        <HeaderMenuAthletes users={props.viewer.users} />
                      </>}
                    />
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Seasons
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="season/fall2017" activeClassName="active">
                    Fall 2017
                    </DropdownItem>
                    <DropdownItem tag={Link} to="season/spring2019" activeClassName="active">
                    Spring 2019
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

const HeaderQuery = graphql`
  query HeaderQuery {
    viewer {
      users {
        ...HeaderMenuAthletes_users
      }
    }
  }
`;

export default Header;
