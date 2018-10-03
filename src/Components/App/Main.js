import React from "react";
import { Container } from "reactstrap";
import { graphql } from 'react-relay';
import Renderer from "../Renderer";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container>
          {this.props.children}
        </Container>
      </main>
    )
  }
}

export default Main;

