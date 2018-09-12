module.exports = {
  plugins: {
    "postcss-import": {},
    "autoprefixer": {
      grid: false,
    },
    "postcss-grid-span": {
      columns: 12,
      gap: 30,
      maxWidth: 1290,
      appendUnit: false,
    },
    "postcss-simple-vars": {},
  },
}
