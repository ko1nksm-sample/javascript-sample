# webpackベースのフロントエンド開発環境

コンセプト

webpackをベースとしてテストなどを含めて開発に必要なものを揃える。
nodeモジュールをメインで使用するが、bowerモジュールを使うこともできる。

## 構成

* ビルド: webpack
* テスト用ウェブサーバー: webpack-dev-server
* コンパイラ: babel
* スタイルシート: scss（node-sass = libsass）
* パッケージ管理: npm、bower ※オプション
* テスト: mocha + power-assert
* 構文チェック: eslint
* カバレッジ: ispara（istanbulのes6拡張）
* メトリクス: plato

TODO: karma対応を入れる

## テスト用URL

* http://localhost:8080/
* http://localhost:8080/webpack-dev-server/ # live reload


## 依存関係

### ビルド (webpack, webpack-dev-server)

1. webpack実行 [設定ファイル: webpack.config.js]
  * babel実行 (babel-loader)
  * その他ローダー実行 (css-loader, sass-loader, style-loader, json-loader) ※オプション
  * bowerモジュールの結合処理 (webpack.ResolverPlugin) ※オプション
2. babel実行 [設定ファイル: .babelrc]
  * ES6変換 (babel-preset-es2015)
  * power-assert変換 (babel-preset-power-assert)
  * プロジェクトパス解決 (babel-plugin-module-resolver)
  * bowerモジュールのパス解決 (babel-plugin-resolve-bower-module) ※オプション

### テスト、カバレッジ (mocha, ispara)

テストの場合は1を飛ばして「2. mocha実行」から開始

1. ispara実行 [設定ファイル: .istanbul.yml]
2. mocha実行 [設定ファイル: mocha.opts]
  * babel実行 (--compilers js:babel-core/register)
3. babel実行（ビルドの2と同様）

### 構文チェック (eslint)

1. eslint実行 [設定ファイル: .eslintrc.js]
  * nodeモジュールのパス解決 (eslint-import-resolver-node)
  * bowerを使用する場合はeslint-import-resolver-webpackを使ってbowerのモジュールのパスをwebpack経由で解決  ※オプション

### メトリクス (plato)

1. planto実行 (依存するものなし)
