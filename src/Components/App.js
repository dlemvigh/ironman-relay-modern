import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler } from 'reactstrap';
import { graphql, fetchQuery } from 'relay-runtime';
import relay from '../relay';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Pending...",
      me: {}
    };
  }

  componentDidMount() {
    fetchQuery(
      relay,
      graphql`query AppQuery { 
        me {
          id
          age
          gender
        }
      }`
    ).then((value) => {
      const text = value.me.id;
      const me = value.me;
      this.setState({ text, me });
    });    
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand>
            Ironman 70.3 Club
          </NavbarBrand>
          <NavbarToggler />
          <Nav pullRight>
            <NavItem>Test</NavItem>
          </Nav>
        </Navbar>
        <p className="App-intro">
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default App;
