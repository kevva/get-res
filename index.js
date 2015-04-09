'use strict';

var w3counter = require('w3counter');

module.exports = function (cb) {
	w3counter('res', function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};
