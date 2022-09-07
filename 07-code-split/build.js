const path = require("path");
const webpack = require("webpack");

const fn1 = () =>
  webpack({
    entry: "./index.js",
    mode: "none",
    output: {
      clean: true,
      filename: "main.[id].[contenthash].js",
      chunkFilename: "[name].[id].chunk.[contenthash].js",
      path: path.resolve(__dirname, "dist/contenthash"),
    },
    optimization: {
      minimize: false,
    },
  });

const fn2 = () =>
  webpack({
    entry: "./index.js",
    mode: "none",
    output: {
      filename: "main.[contenthash].js",
      chunkFilename: "[name].chunk.[chunkhash].js",
      path: path.resolve(__dirname, "dist/import"),
      clean: true,
      chunkLoading: "import",
      chunkFormat: "module",
    },
  });

fn1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2));
});

fn2().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2));
});
