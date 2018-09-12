import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./divider.css";

export const Divider = ({
  container,
  full,
  ...rest,
}) => {
  const className = cn(
    (!container && !full) && "divider",
    container && "divider--container",
    full && "divider--full",
    rest.className,
  );

  return (
    <hr {...rest} className={className} />
  );
};

Divider.propTypes = {
  container: PropTypes.bool,
  full: PropTypes.bool,
};
