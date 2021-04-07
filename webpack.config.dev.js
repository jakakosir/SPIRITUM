const { EntryOptionPlugin } = require("webpack");

const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },
});
