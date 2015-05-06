/*!
 * is-invalid-path <https://github.com/jonschlinkert/is-invalid-path>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var isInvalid = require('./');

describe('isInvalid', function () {
  it('should return `false` if the path is valid:', function () {
    isInvalid('.').should.be.false;
    isInvalid('aa').should.be.false;
    isInvalid('abc.js').should.be.false;
    isInvalid('abc/def/ghi.js').should.be.false;
  });

  it('should return `true` if it is a glob pattern:', function () {
    isInvalid('*.js').should.be.true;
    isInvalid('!*.js').should.be.true;
    isInvalid('!foo').should.be.true;
    isInvalid('!foo.js').should.be.true;
    isInvalid('**/abc.js').should.be.true;
    isInvalid('abc/*.js').should.be.true;
  });

  it('should return `true` if the path has brace characters:', function () {
    isInvalid('abc/{a,b}.js').should.be.true;
    isInvalid('abc/{a..z}.js').should.be.true;
    isInvalid('abc/{a..z..2}.js').should.be.true;
  });

  it('should return `true` if it has an extglob:', function () {
    isInvalid('abc/@(a).js').should.be.true;
    isInvalid('abc/!(a).js').should.be.true;
    isInvalid('abc/+(a).js').should.be.true;
    isInvalid('abc/*(a).js').should.be.true;
    isInvalid('abc/?(a).js').should.be.true;
  });

  it('should return `true` if it has extglob characters:', function () {
    isInvalid('abc/@.js').should.be.true;
    isInvalid('abc/!.js').should.be.true;
    isInvalid('abc/+.js').should.be.true;
    isInvalid('abc/*.js').should.be.true;
    isInvalid('abc/?.js').should.be.true;
  });

  it('should return `true` if the path has regex characters:', function () {
    isInvalid('abc/(aaa|bbb).js').should.be.true;
    isInvalid('abc/?.js').should.be.true;
    isInvalid('?.js').should.be.true;
    isInvalid('[abc].js').should.be.true;
    isInvalid('[^abc].js').should.be.true;
    isInvalid('a/b/c/[a-z].js').should.be.true;
    isInvalid('[a-j]*[^c]b/c').should.be.true;
  });

  it('should return `true` if it is not a string:', function () {
    isInvalid().should.be.true;
    isInvalid({}).should.be.true;
    isInvalid(null).should.be.true;
    isInvalid(['**/*.js']).should.be.true;
    isInvalid(['foo.js']).should.be.true;
  });
});

