'use strict';

require('mocha');
const assert = require('assert');
const isInvalid = require('./');

describe('isInvalid', function() {
  it('should be invalid if the path is not a string', function() {
    assert(isInvalid());
    assert(isInvalid({}));
    assert(isInvalid(null));
    assert(isInvalid([]));
  });

  it('should be invalid if the path has invalid characters', function() {
    assert(isInvalid('<abc'));
    assert(isInvalid('>abc'));
    assert(isInvalid(':abc'));
    assert(isInvalid('"abc'));
    assert(isInvalid('|abc'));
    assert(isInvalid('?abc'));
    assert(isInvalid('*abc'));
  });

  it('should be invalid if the path has slashes and options.file is true', function() {
    assert(isInvalid('foo/abc', { file: true }));
    assert(isInvalid('foo\\abc', { file: true }));
  });

  it('should not be invalid if path has valid characters', function() {
    assert(!isInvalid('.'));
    assert(!isInvalid('abc'));
    assert(!isInvalid('a\'bc'));
    assert(!isInvalid('a\\bc'));
    assert(!isInvalid('a/bc'));
    assert(!isInvalid('!foo'));
    assert(!isInvalid('^abc'));
    assert(!isInvalid('[abc]'));
    assert(!isInvalid('(a)'));
    assert(!isInvalid('+abc'));
    assert(!isInvalid('@abc'));
    assert(!isInvalid('{a}bc'));
    assert(!isInvalid('{a..b..c}'));
  });
});

