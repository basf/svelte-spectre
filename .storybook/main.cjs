const preprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const options = {
    sourceMap: dev,
    scss: {
        prependData: `
			@import './node_modules/spectre.css/src/variables';
			@import './node_modules/spectre.css/src/mixins';
			@import './node_modules/spectre.css/src/icons/icons-core';
		`,
    },
    postcss: true,
    typescript: true,
};
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-svelte-csf',
    ],
    svelteOptions: {
        preprocess: preprocess(options),
    },
};
