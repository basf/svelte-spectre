import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

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
	},
	postcss: true,
	typescript: true,
	// replace: !dev ? [[/ lang=("|')(.*?)("|')/g, '']] : [],
};

/** @type {import('@sveltejs/kit').Config} */
export default {
	// https://github.com/sveltejs/svelte-preprocess
	compilerOptions: null,
	preprocess: [preprocess(options)],
	extensions: ['.svelte'],
	kit: {
		// adapter: adapterStatic({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),
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
			exports: (filepath) => {
				if (mm.isMatch(filepath, ['**/_*', 'spectre.scss', 'fix.scss', 'scss/*'])) return false;
				return mm.isMatch(filepath, ['**'])
			},
			files: (filepath) => {
				if (mm.isMatch(filepath, ['**/_*', 'spectre.scss', 'fix.scss', 'scss/*'])) return false
				return mm.isMatch(filepath, ['**'])
			},
			// exports: {
			// 	include: ['**'],
			// 	exclude: ['**/_*', 'spectre.scss', 'fix.scss', 'scss/*'],
			// },
			// files: {
			// 	include: ['**'],
			// 	exclude: ['spectre.scss', 'fix.scss', 'scss/*'],
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
		serviceWorker: {
			files: (filepath) => true,
		},
		ssr: true,
		target: '',
		trailingSlash: 'never',
		vite: () => ({
			server: { port: 3030 },
			css: {
				preprocessorOptions: {
					scss: {
						// example : additionalData: `@import "./src/design/styles/variables";`
						// dont need include file extend .scss
						// additionalData: `@import "./src/lib/spectre.scss";`
					},
				},
			},
			plugins: [
				// postcss({
				// 	include: "./src/lib/spectre.scss",
				// 	extract: resolve('package/spectre.css')
				// }),
				// sassPlugin(),
			],
		}),
	},
};
