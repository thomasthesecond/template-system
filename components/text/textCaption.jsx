import React from "react";
import cn from "classnames";
import styles from "./text.css";

export const TextCaption = ({
  children,
  className,
}) => (
  <div className={cn(styles.textCaption, className)}>
    {children}
  </div>
);
