var path = require("path");
var input = path.join(__dirname, "/client/src");
var output = path.join(__dirname, "/public");

module.exports = {
  entry: `${input}/index.js`,
  output: {
    filename: "bundle.js",
    path: output,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
