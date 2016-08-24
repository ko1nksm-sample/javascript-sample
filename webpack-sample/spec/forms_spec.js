import assert from 'power-assert'

describe('formsのテスト', function() {
  it('version', function() {
    // import だと最初に実行されてしまうため
    const version = require('lib/forms').version;
    assert(version() == 1);
  });
});
