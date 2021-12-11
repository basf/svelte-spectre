import fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {

	const { name, version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	console.log('v:', name, version);
	if (name && version) {
		return {
			body: {
				name, version
			}
		};
	}
}
