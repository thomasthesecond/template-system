import React from "react";
import cn from "classnames";
import { Container, Divider } from "../../layout";
import styles from "./contentinfo.css";

export class Contentinfo extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <footer
        className={cn(styles.contentinfo, "grid")}
        role="contentinfo"
      >
        <Divider container />

        <Container className={styles.container}>
          Contentinfo
        </Container>
      </footer>
    );
  }
}
