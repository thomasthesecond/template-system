import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./container.css";

export const Container = ({
  full,
  children,
  ...rest,
}) => {
  const className = cn(
    (!full) && "container",
    full && "container--full",
    rest.className,
  );

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

Container.propTypes = {
  full: PropTypes.bool,
};
