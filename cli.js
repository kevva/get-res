#!/usr/bin/env node
'use strict';

var getRes = require('./');
var meow = require('meow');

/**
 * Initialize CLI
 */

meow({
    help: [
        '  Usage',
        '    get-res'
    ].join('\n')
});

/**
 * Run
 */

getRes(function (err, res) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    res.forEach(function (r, i) {
        i = i + 1;
        console.log(i + '. ' + r.item);
    });
});
