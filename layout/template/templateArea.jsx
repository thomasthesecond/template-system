import React from "react";
import cn from "classnames";
import styles from "./template.css";

export const TemplateArea = ({
  children,
  className,
}) => (
  <div className={cn("templateArea", className)}>
    {children}
  </div>
);
