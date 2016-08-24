import hello from 'lib/hello'
import assert from 'power-assert'

describe('helloのテスト', function() {
  it('hello', function() {
    assert(hello() == "hello");
  });
});
