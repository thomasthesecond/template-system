import css from "./styles.css";
import { Page, Template } from  "../layout";
import { TemplateDetail } from "../templates";

export default () => (
  <Page>
    <TemplateDetail>
      <Template.Position area="breadcrumbs">
        <a href="#">Home</a>
      </Template.Position>
    </TemplateDetail>
  </Page>
);
