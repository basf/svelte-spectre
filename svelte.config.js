import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
// import mm from 'micromatch';
import path from 'path';
import svg from '@poppanator/sveltekit-svg';
import adapterStatic from '@sveltejs/adapter-static';

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
		adapter: adapterStatic({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		amp: false,
		appDir: '_app',
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html',
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
			base: '/sveltespectre',
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
				},
			},
			server: {
				port: 3030,
				hmr: { overlay: true },
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
