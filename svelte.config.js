import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import path from 'path';
import fs from 'fs';
import svg from '@poppanator/sveltekit-svg';
import adapterStatic from '@sveltejs/adapter-static';

const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));
process.env.VITE_APP_NAME = pkg.name
	.trim()
	.toLowerCase()
	.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
process.env.VITE_APP_VERSION = pkg.version;
process.env.VITE_APP_GIT = pkg.repository.url.replace(/git\+|\.git/g, '');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const options = {
	sourceMap: dev,
	scss: {
		prependData: `
			@import './node_modules/spectre.css/src/variables';
			@import './node_modules/spectre.css/src/mixins';
		`,
		quietDeps: true,
		renderSync: true,
	},
	postcss: true,
	typescript: true,
};

/** @type {import('@sveltejs/kit').Config} */
export default {
	// https://github.com/sveltejs/svelte-preprocess
	compilerOptions: null,
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
			template: 'src/www/index.html',
		},
		trailingSlash: 'always',
		vite: () => ({
			resolve: {
				alias: {
					$assets: path.resolve('./src/www/assets'),
				},
			},
			server: {
				port: 3030,
			},
			plugins: [svg(options)],
		}),
	},
};
