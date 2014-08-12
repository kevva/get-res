'use strict';

var getRes = require('./');
var test = require('ava');

test('fetch 10 items', function (t) {
    t.plan(11);

    getRes(function (err, data) {
        t.assert(!err);

        data.forEach(function (el) {
            t.assert(/^\d{3,4}x\d{3,4}$/i.test(el.item));
        });
    });
});
