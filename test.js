/*global describe, it */
'use strict';

var assert = require('assert');
var getres = require('./');

describe('getres()', function () {
    it('should fetch 10 items', function (cb) {
        getres(function (err, data) {
            assert.strictEqual(data.length, 10);

            data.forEach(function (el) {
                assert(/^\d{3,4}x\d{3,4}$/i.test(el));
            });

            cb();
        });
    });
});
