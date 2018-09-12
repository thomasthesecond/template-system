# Layout components

## Usage

```js
import { Container, Divider, Grid, Page, Template } from "./path/to/layout";
```

### Container

The `Container` component is to be used only within a `Grid`.

Its width can be either constrained (default) or full width.


```jsx
<Grid>
  <Container full={true|false}>
    …
  </Container>
</Grid>
```

The `container` classname can be placed on any component to turn it into a `Container`, but it still must be placed inside a `Grid`.

The classname is recommended only when you want to avoid nesting components unnecessarily. For example, instead of

```jsx
<Container>
  <MyCustomComponent>
    …
  </MyCustomComponent>
</Container>
```

which will likely output

```html
<div class="container">
  <div>
    …
  </div>
</div>
```

you should do:

```jsx
<MyCustomComponent className="container">
  …
</MyCustomComponent>
```

The classnames were added to the global scope for this reason. All components should be able to access the layout styles regardless in case a layout component can’t be used or doesn’t make sense.

#### Props

* `full`: a boolean that determines if the container should be full-width
* `children`: defines the component’s content
* any valid HTML `div` attribute

### Divider

The `Divider` component is used to put a horizontal rule between sections.

Its width can be either constrained (default) or full width.


```jsx
<Divider />
```

When used within a `Grid`, the props `container` or `full` can be added to place it on the grid. These props add styles to make the `Divider` behave just like the `Container`.

```jsx
<Divider container={true|false} />
<Divider full={true|false} />
```

While you can use both `container` and `full` at the same time on the same component, you shouldn’t.

#### Props

* `container`: a boolean that determines if the divider’s width should be constrained
* `full`: a boolean that determines if the divider should be full-width
* any valid HTML `hr` attribute

### Template

`Template` is a `Grid` but created specifically for building templates with `Template.Area`.

## Example structure

There is a certain structure in which these components should be used.

template.jsx

page.jsx

<Page>
  <Template>
    <Template.Area>
    </Template.Area>
  </Template>
</Page>
```
