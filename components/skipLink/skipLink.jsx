import cn from "classnames";
import React from "react";
import styles from "./skipLink.css";

export const SkipLink = (props) => (
  <a
    {...props}
    className={cn(styles.skipLink, props.className)}
    href="#main"
  >
    Skip to main content
  </a>
);
