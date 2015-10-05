#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getRes = require('./');

meow({
	help: [
		'Usage',
		'  $ get-res'
	]
});

getRes().then(function (res) {
	res.forEach(function (r, i) {
		i++;
		console.log(i + '. ' + r.item + ' (' + r.percent + ')');
	});
});
