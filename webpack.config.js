const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".json", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: path.join(__dirname),
    compress: true,
    port: 4000,
  },
};
