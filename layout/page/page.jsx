import React from "react";
import { SkipLink } from "../../components/skipLink";
import { Banner } from "../../regions/banner";
import { Contentinfo } from "../../regions/contentinfo";

export const Page = ({ children }) => (
  <React.Fragment>
    <SkipLink />

    <Banner theme="white" />

    <main role="main" id="main">
      {children}
    </main>

    <Contentinfo />
  </React.Fragment>
);
