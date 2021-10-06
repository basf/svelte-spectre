import { writable } from 'svelte/store';
import type { Icons } from '../../types/icons';
import type { Color } from '../../types/bg';
import type { Pos } from './positions';

export type { Pos, Tost }

type Tost = {
	id?: number,
	type?: Color,
	title?: string,
	msg?: string,
	icon?: Icons,
	close?: boolean,
	timeout?: number,
	init?: number,
	next?: number,
	invert?: boolean,
	reverse?: boolean,
	pos?: Pos
}

const defaults: Tost = { close: true, pos: 'top_center' }

function createToast() {
	const { subscribe, set, update } = writable([]);

	let id = 0

	const send = (toast: Tost = {}) => {
		toast.id = id++
		update((state) => [...state, { ...defaults, ...toast }]);
	}
	const close = (id: number) => {
		update((state) => [...state.filter((t) => t.id !== id)]);
	}
	const clear = () => set([]);

	return {
		subscribe,
		send,
		close,
		clear,
		default: (toast: Tost = {}) =>
			send({ msg: 'default', icon: 'message', ...toast }),
		error: (toast: Tost = {}) =>
			send({ type: 'error', icon: 'stop', ...toast }),
		warning: (toast: Tost = {}) =>
			send({ type: 'warning', icon: 'mail', ...toast }),
		primary: (toast: Tost = {}) =>
			send({ type: 'primary', icon: 'flag', ...toast }),
		success: (toast: Tost = {}) =>
			send({ type: 'success', icon: 'emoji', ...toast }),
	};
}

export const toast = createToast();
