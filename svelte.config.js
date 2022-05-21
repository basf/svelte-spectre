import fs from 'fs';
import path from 'path';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
import mdsvexConfig from './mdsvex.config.js';
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
			// excludes all .d.ts and files starting with _ as the name
			// exports: (filepath) => !/^_|\/_|\.scss$/.test(filepath),
			// files: (filepath) => !/^_|\/_|\.scss$/.test(filepath),
			emitTypes: true,
		},
		// paths: {
		// 	base: dev ? '' : '/svelte-spectre',
		// },
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
