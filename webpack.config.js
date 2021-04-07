const { EntryOptionPlugin } = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
 /*  devtool: false, */
  entry: "./src/app.js",
  output: {
    filename: "bundled.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
      new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject:"body"
  })
],
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
