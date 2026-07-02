const { existsSync } = require('fs');
const { dirname, resolve, join } = require('path');

const configFilename = 'svelte.config.js';

function getSvelteConfig(rootMode, filename) {
	const configDir = rootMode === 'upward' ? getConfigDir(dirname(filename)) : process.cwd();

	const configFile = resolve(configDir, configFilename);

	if (!existsSync(configFile)) {
		throw Error(`Could not find ${configFilename}`);
	}

	return configFile;
}

const getConfigDir = (searchDir) => {
	if (existsSync(join(searchDir, configFilename))) {
		return searchDir;
	}

	const parentDir = resolve(searchDir, '..');

	return parentDir !== searchDir ? getConfigDir(parentDir) : searchDir; // Stop walking at filesystem root
};

module.exports = { getSvelteConfig };
