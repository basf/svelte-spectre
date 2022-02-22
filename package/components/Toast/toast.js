import { writable } from 'svelte/store';
const defaults = { closable: true, pos: 'top_center' };
function createToast() {
	const { subscribe, set, update } = writable([]);
	let id = 0;
	const send = (toast = {}) => {
		toast.id = id++;
		update((state) => [...state, { ...defaults, ...toast }]);
	};
	const close = (id) => {
		update((state) => [...state.filter((t) => t.id !== id)]);
	};
	const clear = () => set([]);
	return {
		subscribe,
		send,
		close,
		clear,
		default: (toast = {}) => send({ msg: 'default', icon: 'message', ...toast }),
		error: (toast = {}) => send({ type: 'error', icon: 'stop', ...toast }),
		warning: (toast = {}) => send({ type: 'warning', icon: 'mail', ...toast }),
		primary: (toast = {}) => send({ type: 'primary', icon: 'flag', ...toast }),
		success: (toast = {}) => send({ type: 'success', icon: 'check', ...toast }),
	};
}
export const toast = createToast();
