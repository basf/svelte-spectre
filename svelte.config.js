import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';
import adapterStatic from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV;
const primaryColor = process.argv.includes('package') ? '' : '$primary-color: pink;';

const dev = mode === 'development';
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
			'css-unused-selector',
			'missing-declaration',
			'unused-export-let',
		];
		if (ignore.includes(warning.code)) return;
		console.log('w:', warning);
		handler(warning);
	},

	kit: {
		adapter: adapterStatic(),
		files: {
			assets: 'src/www/assets',
			routes: 'src/www',
			template: 'src/www/app.html',
		},
		trailingSlash: 'always',
		prerender: {
			default: true,
		},
		package: {
			dir: 'package',
			emitTypes: true,
		},
	},
};
