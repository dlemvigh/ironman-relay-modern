import React from "react";
import { Container } from "reactstrap";
import styles from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Container>
          <div className={styles.left}>
            <strong>Powered by Enthusiasm</strong>
          </div>
          <div className={styles.right}>
            App icons by <a href="https://icons8.com/">Icons8</a>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer;
