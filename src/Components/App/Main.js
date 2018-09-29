import React from "react";
import { Container } from "reactstrap";

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
