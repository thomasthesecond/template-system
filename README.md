# Building a template system with React and CSS grid

Currently a work-in-progress; consider this an early alpha build.

Inspired by https://24ways.org/2017/design-systems-and-css-grid/.

Building re-usable component systems are very popular.

I wanted to see if I could build a re-usable template system to go along with the component system.

I believe layout styles (margin, position) do not belong on components, but rather components should be given position once imported into the app. For example, a button by itself should never have margin, however, your app stylesheet should give your button component margin as needed.

The goal(s) of the template system is to provide re-usable patterns for pages with common layouts; provide position and spacing for components that will be placed on the page and thus remove all position styles from the components themselves; provide specific areas for components to be placed within the template; allow for importing of template and importing of components without any additional styles.

Start by figuring out your grid system. You may have a designer provide the grid dimensions or you may be using a pre-defined grid system. The grid system I'll be using is a little complex because it changes columns and dimensions at certain breakpoints which I'll refer to as mobile (0 to 767), tablet (768 to 1023), laptop (1024 - 1353) and desktop (1354 and up).

The CSS for such a grid system looks like this when defined with CSS custom properties:

```css
:root {
  --grid-column-gap: 16px;
  --grid-column-margin: 0;
  --grid-column-width: 1fr;
  --grid-columns: 4;
  --grid-row-gap: 32px;
  --max-width: 328px;
}

@media (min-width: 768px) {
  :root {
    --grid-columns: 8;
    --max-width: 736px;
  }
}

@media (min-width: 1024px) {
  :root {
    --grid-column-gap: 24px;
    --grid-column-margin: 8px;
    --grid-columns: 12;
    --max-width: 960px;
  }
}

@media (min-width: 1354px) {
  :root {
    --grid-column-gap: 30px;
    --grid-column-margin: 1fr;
    --grid-column-width: 80px;
    --max-width: 1290px;
  }
}
```

Here's what each custom property is for:

* `--grid-column-gap` Spacing (vertical) between each grid column (`16px` for mobile and tablet, `24px` for laptop and `30px` for desktop)
* `--grid-column-margin` Value to tell the grid container how far from the edge of the screen we want it. This may be confusing now but I hope later it will make sense. (`0` for mobile and tablet, `8px` for laptop and `1fr` for desktop which essentially behaves similar to `margin: auto`); `8px` on laptop because (1024 (window) - 960 (max-width)) / 2 (left and right side of screen) = 32; 32 - 24 (grid-column-gap) = 8 (grid-column-margin)
* `--grid-column-width` Width of each grid column; here we just use the available space with the `1fr` unit which will automatically calculate the column width based on our other properties. However, once our layout hits desktop, we set the wdith to a fixed value, `80px`, which will essentially give our container a max-width without having to set the `max-width` property. We don't really care about the column width on mobile, tablet or laptop since the layout is fluid. We do care about the column width on desktop and larger screens because we want to constrain the container width at a certain point (i.e., `max-width`). More on this later.
* `--grid-columns` The number of columns in the grid (4 for mobile, 8 for tablet and 12 for laptop and desktop)
* `--grid-row-gap` Spacing (horizontal) between each grid row; `32px` for all breakpoints

## Running the app

```shell
https://github.com/thomasthesecond/template-system.git
cd template-system
npm install
npm run dev # Run in development mode on port 3000 or
npm run dev -- -p <some other port> # on a different port
```
