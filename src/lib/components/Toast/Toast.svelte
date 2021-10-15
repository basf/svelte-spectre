<div
	class="toast {toastItem.type && `toast-${toastItem.type}`} {offset}"
	use:pausable={toastItem.timeout > 0}
	transition:fade
>
	{#if toastItem.icon}
		<Icon icon={toastItem.icon} offset="mr-2" />
	{/if}
	<div class="toast-content">
		<slot />
	</div>
	{#if toastItem.close}
		<IconButton icon="cross" on:click={close} />
	{/if}
	{#if toastItem.timeout}
		<Progress value={$progress} {invert} />
	{/if}
</div>

<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import IconButton from '../Button/IconButton.svelte';
	import Icon from '../Icon/Icon.svelte';
	import Progress from '../Progress/Progress.svelte';
	import { toast } from './toast';

	import type { Tweened } from 'svelte/motion';
	import type { ToastItem } from './toast';
	import type { Color } from '../../types/bg';
	import type { Icons } from '../../types/icons';
	import type { Offset } from '../../types/position';

	interface Options {
		delay?: number;
		duration?: number;
		easing?: (t: number) => number;
		interpolate?: (a: number, b: number) => (t: number) => number;
	}

	export type { Color, Icons, ToastItem };
</script>

<script lang="ts">
	export let toastItem: ToastItem = {
		id: 0,
		type: 'initial',
		title: 'title',
		msg: 'msg',
		icon: '',
		close: true,
		timeout: 0,
		init: 0,
		next: 1,
		invert: false,
		reverse: false,
		pos: '',
	};
	export let invert: boolean = toastItem.invert;
	export let reverse: boolean = toastItem.reverse;
	export let visible: boolean = true;
	export let offset: Offset = '';

	let init: number = reverse ? 1 : 0,
		next: number = reverse ? 0 : 1,
		start: number = Date.now(),
		remaining: number = toastItem.timeout,
		options: Options = { duration: remaining };

	const defaults: Options = { delay: 0, duration: 0, easing: linear };
	const progress: Tweened<number> = tweened(init, { ...defaults });

	$: progress.set(next, options).then(autoclose);

	const autoclose = () => toastItem.timeout && $progress % 1 === 0 && close();

	const close = () => {
		toast.close(toastItem.id);
		visible = false;
	};

	const pause = () => {
		remaining -= Date.now() - start;
		next = $progress;
		options = { duration: 0 };
	};
	const resume = () => {
		start = Date.now();
		next = reverse ? 0 : 1;
		options = { duration: remaining };
	};

	function pausable(node: HTMLElement, paused: boolean) {
		if (paused) {
			node.onmouseenter = pause;
			node.onmouseleave = resume;
		}
		return {
			destroy() {
				node.onmouseenter = null;
				node.onmouseleave = null;
			},
		};
	}
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/toasts';

		.toast {
			position: relative;
			padding: 0;
			padding-left: $unit-2;
			word-wrap: break-word;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.toast-content {
				flex-direction: column;
				padding: $unit-2 0;
			}
			:global(.btn-link) {
				color: currentColor;
				opacity: 1;
				&:hover,
				&:active,
				&:focus {
					background: rgba($bg-color, 0.5);
					opacity: 0.95;
					color: inherit;
				}
			}
			:global {
				* > * {
					margin: 0;
				}
				.progress {
					position: absolute;
					inset: -1px;
					top: auto;
					width: calc(100% + 2px);
					opacity: 0.69;
					background: transparent;
				}
			}
		}
	}
</style>
