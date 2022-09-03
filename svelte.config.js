import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';
import adapterStatic from '@sveltejs/adapter-static';

const dev = process.env.npm_lifecycle_event === 'dev';

const primaryColor = process.argv.includes('package') ? '' : '$primary-color: hsl(215, 15%, 33%);';

const options = {
	sourceMap: dev,
	scss: {
		prependData: `
			${primaryColor}
			@import './node_modules/spectre.css/src/variables';
			@import './node_modules/spectre.css/src/mixins';
			@import './src/lib/dark';
		`,
		quietDeps: true,
		renderSync: true,
	},
	typescript: true,
};

/** @type {import('@sveltejs/kit').Config} */
export default {
	// https://github.com/sveltejs/svelte-preprocess
	compilerOptions: { immutable: false },
	preprocess: [preprocess(options), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	onwarn: (warning, handler) => {
		const ignore = [
			'a11y-invalid-attribute',
			'a11y-label-has-associated-control',
			'a11y-missing-content',
			'a11y-structure',
			'a11y-autofocus',
			'css-unused-selector',
			'missing-declaration',
			'unused-export-let',
		];
		if (ignore.includes(warning.code)) return;
		console.log('w:', warning);
		handler(warning);
	},

	kit: {
		adapter: adapterStatic({
			fallback: 'index.html',
		}),
		files: {
			assets: 'src/www/assets',
			routes: 'src/www',
			appTemplate: 'src/www/app.html',
		},
		trailingSlash: 'always',
		paths: {
			base: dev ? '' : '/svelte-spectre',
		},
	},
	package: {
		dir: 'package',
		emitTypes: true,
	},
};
