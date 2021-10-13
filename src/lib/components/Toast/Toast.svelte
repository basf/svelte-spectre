<div
	class="toast {toastItem.type && `toast-${toastItem.type}`}"
	use:pausable={toastItem.timeout > 0}
	transition:fade
>
	<Grid align="center" oneline>
		{#if toastItem.icon}
			<Col col="auto">
				<Icon icon={toastItem.icon} />
			</Col>
		{/if}
		<Col inset="py-2">
			<slot>
				{#if toastItem.title}<h5>{toastItem.title}</h5>{/if}
				{#if toastItem.msg}<p>{toastItem.msg}</p>{/if}
			</slot>
		</Col>
		{#if toastItem.close}
			<Col col="auto" inset="px-0">
				<IconButton icon="cross" on:click={close} />
			</Col>
		{/if}
	</Grid>
	{#if toastItem.timeout}
		<Progress value={$progress} {invert} />
	{/if}
</div>

<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import Col from '../../layouts/Grid/Col.svelte';
	import Grid from '../../layouts/Grid/Grid.svelte';
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
			padding-top: 0;
			padding-bottom: 0;
			word-wrap: break-word;
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
