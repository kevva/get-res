/*global describe, it */
'use strict';

var assert = require('assert');
var getres = require('./');

describe('getres()', function () {
    it('should fetch 10 items', function (cb) {
        getres(function (err, data) {
            cb(assert.strictEqual(data.length, 10));
        });
    });
});
