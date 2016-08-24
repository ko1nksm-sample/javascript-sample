module.exports = {
    "extends": "standard",
    "plugins": [
      "standard",
      "promise",
      "import"
    ],
    "settings": {
      // eslint-import-resolver-webpack
      // webpackの設定を使ってモジュールのパスを解決する
      // bower_componentsのパス解決のためなので
      // bowerを使用しないならば "node" (eslint-import-resolver-node) で良い
      "import/resolver": "webpack",
      "import/named": 2,
      "import/namespace": 2,
      "import/default": 2,
      "import/export": 2
    },
    "rules": {
      "import/no-unresolved": 2,
    },
    "env": {
      "browser": true
    }
};