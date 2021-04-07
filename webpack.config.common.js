const { EntryOptionPlugin } = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)/,
        type: "asset",
      },
    ],
  },
};
