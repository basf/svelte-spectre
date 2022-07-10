import fs from 'fs';
import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

process.env.VITE_APP_NAME = pkg.name;
process.env.VITE_APP_VERSION = pkg.version;
process.env.VITE_APP_GIT = pkg.repository.url.replace(/git\+|\.git/g, '');

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			$assets: path.resolve('./src/www/assets'),
		},
	},
	server: {
		port: 3030,
	},
	plugins: [sveltekit(), svg()],
};

export default config;
