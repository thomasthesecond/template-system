import React from "react";
import cn from "classnames";
import { Grid, Container, Divider } from "../../layout";
import styles from "./banner.css";
// import container from "../../components/container/container.css";
// import { getClassname } from "../../utils";

export class Banner extends React.Component {
  render() {
    const { children, theme = "white" } = this.props;

    const className = cn(
      styles.banner,
      theme === "white" && styles["banner--white"],
      theme === "overlay" && styles["banner--overlay"],
      theme === "blue" && styles["banner--brand-blue"],
      "grid",
    );

    return (
      <header
        // className={cn(styles.banner, container.container, getClassname("container"))}
        className={className}
        role="banner"
      >
        <Container className={styles.container}>
          Banner
        </Container>

        {theme !== "blue" &&
          <Divider
            className={cn(
              styles.divider,
              theme === "overlay" && styles["divider--overlay"],
            )}
            container
          />
        }
      </header>
    );
  }
}
