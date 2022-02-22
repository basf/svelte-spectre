export function Timer(callback, delay) {
	let timerId,
		start,
		remaining = delay;
	const set = (remaining) => {
		clearTimeout(timerId);
		timerId = setTimeout(callback, remaining);
	};
	const pause = () => {
		clearTimeout(timerId);
		remaining -= Date.now() - start;
	};
	const resume = () => {
		start = Date.now();
		clearTimeout(timerId);
		timerId = setTimeout(callback, remaining);
	};
	const clear = () => {
		clearTimeout(timerId);
	};
	resume();
	return { set, pause, resume, clear, timerId };
}
