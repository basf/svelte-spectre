<div {...$$restProps} class="toast {type && `toast-${type}`}" use:pausable={timeout > 0}>
	{#if icon}
		<Icon {icon} />
	{/if}
	<div class="toast-content">
		<slot />
	</div>
	{#if closable}
		<IconButton icon="cross" on:click={close} />
	{/if}
	{#if timeout}
		<Progress value={$progress} {invert} />
	{/if}
</div>

<script context="module" lang="ts">
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

	interface Options {
		delay?: number;
		duration?: number;
		easing?: (t: number) => number;
		interpolate?: (a: number, b: number) => (t: number) => number;
	}

	export type { Color, Icons, ToastItem };
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let toastItem: ToastItem = {};
	export let id = toastItem.id || 0;
	export let type = toastItem.type || 'initial';
	export let icon = toastItem.icon;
	export let timeout = toastItem.timeout || 0;
	export let closable = toastItem.closable ?? false;
	export let invert: boolean = toastItem.invert || false;
	export let reverse: boolean = toastItem.reverse || false;
	export let visible: boolean = true;

	let init: number = reverse ? 1 : 0,
		next: number = reverse ? 0 : 1,
		start: number = Date.now(),
		remaining: number = timeout,
		options: Options = { duration: remaining };

	const defaults: Options = { delay: 0, duration: 0, easing: linear };
	const progress: Tweened<number> = tweened(init, { ...defaults });

	$: timeout && progress.set(next, options).then(autoclose);

	const autoclose = () => timeout && $progress % 1 === 0 && close();

	const close = () => {
		dispatch('close', id);
		toast.close(id);
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
			node.onpointerenter = pause;
			node.onpointerleave = resume;
		}
		return {
			destroy() {
				node.onpointerenter = null;
				node.onpointerleave = null;
			},
		};
	}
</script>

<style lang="scss">
	:global(.spectre) {
		@import '@spectre-org/spectre-css/src/toasts';

		.toast {
			position: relative;
			padding: 0;
			padding-left: $unit-2;
			word-wrap: break-word;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.toast-content {
				flex: 1;
				flex-direction: column;
				padding: $unit-2 $unit-4;
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
