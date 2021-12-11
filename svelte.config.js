import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
// import mm from 'micromatch';
import path from 'path';
import fs from 'fs';
import svg from '@poppanator/sveltekit-svg';
import adapterStatic from '@sveltejs/adapter-static';

export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

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
			// $primary-color: #336eaa;
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
	extensions: ['.svelte', '.json', ...mdsvexConfig.extensions],

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
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		amp: false,
		appDir: '_app',
		files: {
			assets: 'static',
			hooks: 'src/www/hooks',
			lib: 'src/lib',
			routes: 'src/www',
			serviceWorker: 'src/service-worker',
			template: 'src/www/app.html',
		},
		floc: false,
		host: '',
		hostHeader: '',
		hydrate: true,
		package: {
			dir: 'package',
			// exports: (filepath) => {
			// 	if (mm.isMatch(filepath, ['**/_*']))
			// 		return false;
			// 	return mm.isMatch(filepath, ['!**/lib/*']);
			// },
			// files: (filepath) => {
			// 	if (mm.isMatch(filepath, ['**/_*']))
			// 		return false;
			// 	return mm.isMatch(filepath, ['!**/lib/*']);
			// },
			emitTypes: true,
		},
		paths: {
			assets: '',
			base: '',
		},
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail',
		},
		router: true,
		// serviceWorker: {
		// 	files: (filepath) => true,
		// },
		ssr: true,
		target: '',
		trailingSlash: 'always',
		vite: () => ({
			resolve: {
				alias: {
					// '$svelte-spectre': path.resolve('./package/index.js'),
					$assets: path.resolve('./static'),
					// $pack: path.resolve('./package.json'),
				},
				json: {
					// stringify: true,
					// namedExports: true
				},
				// extensions: ['.json']
			},
			server: {
				port: 3030,
				hmr: { overlay: true },
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['..'],
				},
			},
			css: {
				preprocessorOptions: {
					scss: {
						// example : additionalData: `@import "./src/design/styles/variables";`
						// dont need include file extend .scss
						// additionalData: `@import "./src/lib/spectre.scss";`
					},
				},
			},
			plugins: [svg(options)],
		}),
	},
};
