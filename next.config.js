const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]__[hash:base64:5]",
  },
});
