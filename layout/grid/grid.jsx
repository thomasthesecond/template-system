import React from "react";
import cn from "classnames";
import styles from "./grid.css";

export const Grid = (props) => {
  const className = cn(
    "grid",
    props.className,
  );

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};
