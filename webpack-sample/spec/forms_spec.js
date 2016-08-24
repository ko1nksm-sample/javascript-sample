// サンプルとしてjQueryの関連のテスト（？）もここに書いているが、
// ブラウザに関する機能はkarma経由でテストした方が良さそう
import assert from 'power-assert'

describe('formsのテスト', function() {
  it('version', function() {
    // import だと最初に実行されてしまうため
    const version = require('lib/forms').version;
    assert(version() == 1);
  });
});
