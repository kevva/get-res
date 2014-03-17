/*global describe, it */
'use strict';

var assert = require('assert');
var getRes = require('./');

describe('getRes()', function () {
    it('should fetch 10 items', function (cb) {
        getRes(function (err, data) {
            assert.strictEqual(data.length, 10);

            data.forEach(function (el) {
                assert(/^\d{3,4}x\d{3,4}$/i.test(el));
            });

            cb();
        });
    });
});
