var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: './src/entry.js',
  resolve: {
    root: path.resolve(__dirname, './src'),
    // bower_componentsはbowerを使用する時のみ必要
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    // bowerを使用する時のみ必要
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css?sourceMap'] },
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
      { test: /\.json$/, loaders: ['json'] }
    ]
  },
  externals: [
    {
      'lodash': '_',
      'moment': 'moment'
    },
    // bowerモジュールをexternalsする場合
    // babel-plugin-resolve-bower-module (refer to .babelrc) によって
    // 読み込みパスが変更されるために関数で処理する必要がある。
    function (context, request, callback) {
      // console.log(context + ' : ' + request);
      if (request.startsWith(path.resolve('bower_components/jquery/'))) {
        return callback(null, '$')
      }
      callback()
    }
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    port: 3000
  }
}
