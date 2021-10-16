const { EntryOptionPlugin } = require("webpack");

const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const { allowedNodeEnvironmentFlags } = require("process");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundled.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][hash][ext][query]",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
