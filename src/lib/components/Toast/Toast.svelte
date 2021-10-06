<div
	class="toast {tost.type && `toast-${tost.type}`}"
	use:pausable={tost.timeout > 0}
	transition:fade
>
	<Grid align="center">
		{#if tost.icon}
			<Col col="auto">
				<Icon icon={tost.icon} />
			</Col>
		{/if}
		<Col inset="py-2">
			<slot>Default text</slot>
		</Col>
		{#if tost.close}
			<Col col="auto" inset="px-0">
				<IconButton icon="cross" on:click={close} />
			</Col>
		{/if}
	</Grid>
	{#if tost.timeout}
		<Progress value={$progress} {invert} />
	{/if}
</div>

<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { IconButton } from '../Button';
	import { Icon } from '../Icon';
	import { Grid, Col } from '../../layouts/Grid';
	import { Progress } from '../Progress';
	import { toast } from './toast';

	import type { Tweened } from 'svelte/motion';
	import type { Tost } from './toast';
	import type { Color } from '../../types/bg';
	import type { Icons } from '../../types/icons';

	type Options = {
		delay?: number;
		duration?: number;
		easing?: (t: number) => number;
		interpolate?: (a: number, b: number) => (t: number) => number;
	};

	export type { Color, Icons, Tost };
</script>

<script lang="ts">
	export let tost: Tost;
	export let invert: boolean = tost.invert;
	export let reverse: boolean = tost.reverse;
	export let stack: boolean;
	export let visible: boolean = true;

	let init: number = reverse ? 1 : 0,
		next: number = reverse ? 0 : 1,
		start: number = Date.now(),
		remaining: number = tost.timeout,
		options: Options = { duration: remaining };

	const defaults: Options = { delay: 0, duration: 0, easing: linear };
	const progress: Tweened<number> = tweened(init, { ...defaults });

	const autoclose = () =>
		($progress === 1 || $progress === 0) && stack ? toast.close(tost.id) : (visible = false);

	progress.set(next, options).then(() => tost.timeout && visible && autoclose());

	const pause = () => {
		remaining -= Date.now() - start;
		progress.set($progress, { duration: 0 });
	};
	const resume = () => {
		start = Date.now();
		progress.set(next, { duration: remaining }).then(autoclose);
	};
	const close = () => {
		progress.set(0, { duration: 0 }).then(autoclose);
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
