import Document, { Head, Main, NextScript } from "next/document";

export default class TemplateSystemDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Template system</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
