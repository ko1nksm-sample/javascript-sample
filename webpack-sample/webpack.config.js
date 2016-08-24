var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./src/entry.js",
  resolve: {
    root: path.resolve('src'),
    modulesDirectories: ["web_modules", "node_modules", "bower_components"]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],
  externals: [
    function(context, request, callback) {
      console.log(context + ' : ' + request);
      callback();
    },
    {
      "jquery": "$",
      "lodash": "_",
      "moment": "moment",
    }
  ],
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
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  devtool: 'source-map'
};
