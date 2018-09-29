import React, { Component } from 'react';
import { graphql, fetchQuery } from 'relay-runtime';
import logo from './logo.svg';
import relay from './relay';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Pending...",
      me: {}
    }
  }

  componentDidMount() {
    fetchQuery(
      relay,
      graphql`query AppQuery { 
        me {
          id
          age
          gender3
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Add text to test hotfixing, blah
        </p>
        <p>
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default App;
