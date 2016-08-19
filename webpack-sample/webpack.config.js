var path = require("path");

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
