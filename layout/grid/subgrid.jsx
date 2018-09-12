import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./grid.css";

export const Subgrid = ({
  full,
  children,
  ...rest,
}) => {
  const className = cn(
    (!full) && "subgrid",
    full && "subgrid--full",
    rest.className,
  );

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

Subgrid.propTypes = {
  full: PropTypes.bool,
};
