const { addHook } = require('pirates');
const { transform } = require('./transformer.js');

const handleSvelte = (source, filename) => transform(source, filename);

addHook(handleSvelte, { exts: ['.svelte'] });
