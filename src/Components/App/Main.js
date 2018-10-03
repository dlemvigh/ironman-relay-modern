import React from "react";
import { Container } from "reactstrap";

const Main = (props) => (
  <main>
    <Container>
      {props.children}
    </Container>
  </main>
)

export default Main;

