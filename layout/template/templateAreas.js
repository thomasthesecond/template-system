import { TemplatePlaceholder } from "./templatePlaceholder";

export const templateAreas = (areasArray, children) => {
  let areas = {};

  areasArray.forEach((area) => {
    areas[area] = <TemplatePlaceholder>{area}</TemplatePlaceholder>;
  });

  if (children) {
    let theChildren = {};

    if (Array.isArray(children)) {
      theChildren = children.reduce((acc, child) => {
        const area = child ? child.props.area : null;

        if (area) {
          acc[area] = child;
        }

        return acc;
      }, areas);
    } else {
      if (children.props.area) {
        const child = children;
        const area = child.props.area;

        theChildren = {
          [area]: child,
        };
      }
    }

    areas = {
      ...areas,
      ...theChildren,
    };
  }

  return areas;
};
