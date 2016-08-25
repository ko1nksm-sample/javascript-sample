# npm + webpack + babel で作るフロントエンド開発環境（2016年8月版）

npm + webpack + babel をベースとして開発に必要なものを揃えています。

## 構成

| タスクランナー         | npm                                       |
| ビルド                 | webpack                                   |
| 開発用ウェブサーバー   | webpack-dev-server                        |
| トランスラパイラ       | babel (ES2015, JSX)                       |
| スタイルシート         | scss (node-sass = libsass)                |
| パッケージ管理         | npm、bower(オプション)                    |
| テスト                 | mocha, nyc(カバレッジ)                    |
| ブラウザテスト         | karma + mocha, karma-coverage(カバレッジ) |
| アサーションライブラリ | power-assert                              |
| 構文チェック           | eslint                                    |
| メトリクス計測         | plato                                     |

おまけ MacOSX上のatomでlinter-eslintプラグインが正常に動作することを確認済み

## 概要と前提知識

タスクランナーとしてnpm scriptsを使用しています。Grunt/Gulpはこれらのプラグインの導入で複雑になるため使用していません。

フロントエンド向けのビルドツールとしてwebpackを使用しています。これはブラウザで動かす時に使用されます。

babelをトランスラパイラとしてだけでなく汎用的なコード変換ツールとして捉えて、
babelプラグインでpower-assertとカバレッジ用のコード変換も行っています。

ブラウザを使わないテストではnode上のmochaで実行されます。

ブラウザを使ったテストはkarmaを使って各ブラウザ（デフォルトはPhantomJSのみ）上のmochaで実行されます。


## 処理の流れと依存関係

### ビルド、開発用ウェブサーバー (npm run build, npm run start)

1. webpack実行 [設定ファイル: webpack.config.js]
  * babel実行 (babel-loader)
  * その他ローダー実行 (css-loader, sass-loader, style-loader, json-loader) ※オプション
  * bowerモジュールの結合処理 (webpack.ResolverPlugin) ※オプション
2. babel実行 [設定ファイル: .babelrc]
  * ES6変換 (babel-preset-es2015)
  * プロジェクトパス解決 (babel-plugin-module-resolver)
  * bowerモジュールのパス解決 (babel-plugin-resolve-bower-module) ※オプション

### テスト、カバレッジ (npn run test, npm run test-cov)

テストの場合は1を飛ばして「2. mocha実行」から開始

1. nyc実行 [設定ファイル: package.json]
2. mocha実行 [設定ファイル: mocha.opts]
  * babel実行 (--compilers js:babel-core/register)
  * instrument追加 (babel-plugin-istanbul)
3. babel実行（ビルドの2と同様）
  * ES6変換 (babel-preset-es2015)
  * power-assert変換 (babel-preset-power-assert)
  * instrumentコード埋め込み (babel-plugin-istanbul)

### ブラウザテスト、カバレッジ (npm run karma)

1. karma実行 [設定ファイル: karma.conf.js]
  * webpack実行 (karma-webpack)
  * PhantomJS実行（phantomjs-prebuilt）
  * mocha実行 (karma-mocha)
  * カバレッッジ実行 (karma-coverage)

### 構文チェック (npm run lint)

1. eslint実行 [設定ファイル: .eslintrc.yaml]
  * nodeモジュールのパス解決 (eslint-import-resolver-node)
  * bowerを使用する場合はeslint-import-resolver-webpackを使ってbowerのモジュールのパスをwebpack経由で解決  ※オプション

### メトリクス (npm run metrics)

1. plato実行 (特に依存するものはない)


## 開発用URL

webpack-dev-server

* http://localhost:8080/
* http://localhost:8080/webpack-dev-server/ (live reload)

karma

* http://localhost:9877/


## 既知の問題

テストが全くされてないファイルがカバレッジに含まれない

* https://github.com/istanbuljs/babel-plugin-istanbul/issues/4
* https://github.com/istanbuljs/nyc/issues/333

