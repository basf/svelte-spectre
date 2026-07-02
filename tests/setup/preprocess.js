const { preprocess } = require('svelte/compiler');
const { pathToFileURL } = require('url');

const { source, filename, svelteConfig } = process.env;

import(pathToFileURL(svelteConfig).toString())
	.then((configImport) => {
		const config = configImport.default ? configImport.default : configImport;

		preprocess(source, config.preprocess || {}, { filename }).then((r) =>
			process.stdout.write(r.code)
		);
	})
	.catch((err) => process.stderr.write(err));
