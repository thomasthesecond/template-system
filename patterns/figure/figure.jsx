import React from "react";
import cn from "classnames";
import styles from "./figure.css";

const Figure = ({ src, alt, caption, className }) => (
  <figure className={cn(styles.figure, className)}>
    <img
      className={styles.figureImage}
      src={src}
      alt={alt}
    />

    {caption &&
      <figcaption className={styles.figureCaption}>
        {caption}
      </figcaption>
    }
  </figure>
);

export default Figure;
