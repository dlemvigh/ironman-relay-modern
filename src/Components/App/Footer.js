import React from "react";
import { Container } from "reactstrap";
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <div className="footer-left">
            <strong>Powered by Enthusiasm</strong>
          </div>
          <div className="footer-right">
            App icons by <a href="https://icons8.com/">Icons8</a>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer;
