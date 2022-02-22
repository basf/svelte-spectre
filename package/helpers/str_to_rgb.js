export function str_to_rgb(input_str) {
	const baseRed = 256,
		baseGreen = 256,
		baseBlue = 256;
	//lazy seeded random hack to get values from 0 - 256
	//for seed just take bitwise XOR of first two chars
	let seed = input_str.charCodeAt(0) ^ input_str.charCodeAt(1);
	const rand_1 = Math.abs(Math.sin(seed++) * 10000) % 256;
	const rand_2 = Math.abs(Math.sin(seed++) * 10000) % 256;
	const rand_3 = Math.abs(Math.sin(seed++) * 10000) % 256;
	const red = Math.round((rand_1 + baseRed) / 2);
	const green = Math.round((rand_2 + baseGreen) / 2);
	const blue = Math.round((rand_3 + baseBlue) / 2);
	return `rgb(${[red, green, blue].join(',')})`;
}
