module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "import"
    ],
    "settings": {
      "import/resolver": "webpack",
      "import/named": 2,
      "import/namespace": 2,
      "import/default": 2,
      "import/export": 2
    },
    "rules": {
      "import/no-unresolved": 2,
    }
};