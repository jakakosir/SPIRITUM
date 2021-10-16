const { EntryOptionPlugin } = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/app.js",
    osebnaRast: "./src/osebnaRast.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"],
     template: "./src/template.html",
    // template: "!!ejs-webpack-loader!src/views/template.ejs", 
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "osebnaRast.html",
      chunks: ["osebnaRast"],
      template: "./src/osebnaRast.html",
      /* template: "!!ejs-webpack-loader!./src/osebnaRast.ejs", */
      inject: "body",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.ejs$/,
        use: ["ejs-webpack-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)/,
        type: "asset",
      },
    ],
  },
};
