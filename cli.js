#!/usr/bin/env node
'use strict';

var meow = require('meow');
var getRes = require('./');

meow({
	help: [
		'Usage',
		'  $ get-res'
	].join('\n')
});

getRes(function (err, res) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	res.forEach(function (r, i) {
		i = i + 1;
		console.log(i + '. ' + r.item + ' (' + r.percent + ')');
	});
});
