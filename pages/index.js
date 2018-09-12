import { Grid } from  "../layout";
import styles from "./styles.css";

export default () => (
  <Grid>
    <div className={styles.welcome}>
      <h1>Template system</h1>

      <p>
        This app demonstrates how the “templates” and “pages” portion
        of atomic design can be built and incorporated into a design
        system. It uses React and CSS grid to build a template system
        and Next.js to serve the pages.
      </p>
      <p>
        This was inspired by <a href="https://24ways.org/2017/design-systems-and-css-grid/">https://24ways.org/2017/design-systems-and-css-grid/</a>.
      </p>
      <p>
        The ideas here are not fully complete and is currently a work-in-progress; consider this an early alpha build.
      </p>
      <p>
        See the README documentation for more information.
      </p>

      <h2>View the templates</h2>

      <ul>
        <li><a href="/detail">Detail template</a></li>
      </ul>
    </div>
  </Grid>
);
