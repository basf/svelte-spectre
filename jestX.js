const Runtime = require('jest-runtime');

const origCreateHasteMap = Runtime.createHasteMap;

Runtime.createHasteMap = function (...args) {
	const ret = origCreateHasteMap.call(this, ...args);
	ret._options.retainAllFiles = true;
	return ret;
};

module.exports = require('jest/bin/jest');
