# webpackベースのフロントエンド開発環境


## 最小限のwebpack構成

### package.json作成

参考 http://webpack.github.io/docs/tutorials/getting-started/

```
npm init
npm install webpack --save-dev
```

### css-loader, style-loaderの追加

```
npm install css-loader style-loader --save-dev

```

### webpack.config.jsの作成

```
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```


### webpackの実行

```
$(npm bin)/webpack
```

### webpack-dev-serverの実行

```
npm install webpack-dev-server --save-dev

```

```
http://localhost:8080/
http://localhost:8080/webpack-dev-server/ # live reload
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
