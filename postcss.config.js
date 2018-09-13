module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-calc": {},
    "postcss-custom-media": {},
    "autoprefixer": {
      grid: false,
    },
    "postcss-grid-span": {
      columns: 12,
      gap: 32,
      maxWidth: 1312,
      appendUnit: false,
    },
  },
}
