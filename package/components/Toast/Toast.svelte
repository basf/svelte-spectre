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

<script context="module">
	var _a;
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import IconButton from '../Button/IconButton.svelte';
	import Icon from '../Icon/Icon.svelte';
	import Progress from '../Progress/Progress.svelte';
	import { toast } from './toast';
</script>

<script>
	var _a;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let toastItem = {};
	export let id = toastItem.id || 0;
	export let type = toastItem.type || 'initial';
	export let icon = toastItem.icon;
	export let timeout = toastItem.timeout || 0;
	export let closable = (_a = toastItem.closable) !== null && _a !== void 0 ? _a : true;
	export let invert = toastItem.invert || false;
	export let reverse = toastItem.reverse || false;
	export let visible = true;
	let init = reverse ? 1 : 0,
		next = reverse ? 0 : 1,
		start = Date.now(),
		remaining = timeout,
		options = { duration: remaining };
	const defaults = { delay: 0, duration: 0, easing: linear };
	const progress = tweened(init, { ...defaults });
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
	function pausable(node, paused) {
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

<style>
	:global(.spectre) .toast {
		background: rgba(48, 55, 66, 0.95);
		border-color: #303742;
		border: 0.05rem solid #303742;
		border-radius: 0.1rem;
		color: #fff;
		display: block;
		padding: 0.4rem;
		width: 100%;
	}
	:global(.spectre) .toast.toast-primary {
		background: rgba(87, 85, 217, 0.95);
		border-color: #5755d9;
	}
	:global(.spectre) .toast.toast-success {
		background: rgba(50, 182, 67, 0.95);
		border-color: #32b643;
	}
	:global(.spectre) .toast.toast-warning {
		background: rgba(255, 183, 0, 0.95);
		border-color: #ffb700;
	}
	:global(.spectre) .toast.toast-error {
		background: rgba(232, 86, 0, 0.95);
		border-color: #e85600;
	}
	:global(.spectre) .toast a {
		color: #fff;
		text-decoration: underline;
	}
	:global(.spectre) .toast a:focus,
	:global(.spectre) .toast a:hover,
	:global(.spectre) .toast a:active,
	:global(.spectre) .toast a.active {
		opacity: 0.75;
	}
	:global(.spectre) .toast .btn-clear {
		margin: 0.1rem;
	}
	:global(.spectre) .toast p:last-child {
		margin-bottom: 0;
	}
	:global(.spectre) .toast {
		position: relative;
		padding: 0;
		padding-left: 0.4rem;
		word-wrap: break-word;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	:global(.spectre) .toast .toast-content {
		flex: 1;
		flex-direction: column;
		padding: 0.4rem 0.8rem;
	}
	:global(.spectre) .toast :global(.btn-link) {
		color: currentColor;
		opacity: 1;
	}
	:global(.spectre) .toast :global(.btn-link):hover,
	:global(.spectre) .toast :global(.btn-link):active,
	:global(.spectre) .toast :global(.btn-link):focus {
		background: rgba(247, 248, 249, 0.5);
		opacity: 0.95;
		color: inherit;
	}
	:global(.spectre) .toast :global(*) > :global(*) {
		margin: 0;
	}
	:global(.spectre) .toast :global(.progress) {
		position: absolute;
		inset: -1px;
		top: auto;
		width: calc(100% + 2px);
		opacity: 0.69;
		background: transparent;
	}
</style>
