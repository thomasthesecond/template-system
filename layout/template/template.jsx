import React from "react";
import cn from "classnames";
import { Grid } from "../grid";
import { TemplateArea } from "./templateArea";
import { TemplatePosition } from "./templatePosition";
import { templateAreas } from "./templateAreas";
import styles from "./template.css";

export class Template extends React.Component {
  static Area = TemplateArea;
  static Position = TemplatePosition;
  static defineAreas = templateAreas;

  render() {
    const {
      children,
      ...rest,
    } = this.props;

    return (
      <Grid {...rest} className={cn("template", rest.className)}>
        {children}
      </Grid>
    );
  }
}
