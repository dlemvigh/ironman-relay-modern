import React from "react";
import { Container } from "reactstrap";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container>
          main
          {this.props.children}
        </Container>
      </main>
    )
  }
}

export default Main;
