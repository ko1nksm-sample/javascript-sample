# webpackベースのフロントエンド開発環境


## 構成

* ビルド: webpack
* テスト用ウェブサーバー: webpack-dev-server
* コンパイラ: babel
* スタイルシート: scss（node-sass = libsass）
* パッケージ管理: npm、bower（オプション）
* テスト: mocha + power-assert
* 構文チェック: eslint
* カバレッジ: ispara（istanbulのes6拡張）
* メトリクス: plato

## テスト用URL

* http://localhost:8080/
* http://localhost:8080/webpack-dev-server/ # live reload


## 流れ

### webpack

1. webpack実行
2. babel-loaderでbabel呼び出し
  * babel-plugin-module-resolverでsrcパス解決
  * babel-plugin-resolve-bower-module でbowerモジュール解決
4. webpackにてモジュール解決

### テスト、カバレッジ

1. ispara実行（カバレッジの場合）
2. mocha実行
3. js:babel-core/registerにてbabel呼び出し
  * babel-plugin-module-resolverでsrcパス解決
  * babel-plugin-resolve-bower-module でbowerモジュール解決

### eslint

1. eslint呼び出し
2. eslint-import-resolver-webpackでモジュール解決

## npmモジュールインストール

```
# 初期化
npm init

npm install webpack --save-dev
npm install webpack-dev-server --save-dev

# オプション webpackでcssを読み込む場合に必要
npm install css-loader style-loader --save-dev

# babel関連
npm install babel-loader babel-core babel-preset-es2016 --save-dev
```


### webpack.config.js作成

```
var path = require("path");
module.exports = {
  entry: "./src/entry.js",
  resolve: {
    root: path.resolve('src'),
    modulesDirectories: ["web_modules", "node_modules"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets',
    filename: "bundle.js"
  },
  module: {
    loaders: [
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
```



```
```

### webpack.config.js修正

```
var path = require("path");
module.exports = {
  entry: "./src/entry.js",
  resolve: {
    root: path.resolve('src'),
    modulesDirectories: ["web_modules", "node_modules"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets',
    filename: "bundle.js"
  },
  module: {
    loaders: [
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
```


## babel-loaderの追加


### npmモジュールの追加
```
npm install babel-loader babel-core babel-preset-es2016 --save-dev
```


### webpack.config.jsの修正

以下の追加

```
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ]
}
```

### テスト＋カバレッジ

```
npm install babel-cli jasmine isparta --save-dev
```

jasmineの設定ファイル生成

```
$(npm bin)/jasmine init
```

### ESlint

```
npm install --save-dev eslint
```

```
$(npm bin)/eslint --init
```

```
$(npm bin)/eslint app/assets/javascripts
```