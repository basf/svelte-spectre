<details {...$$restProps} class="accordion" bind:open={opened}>
	<summary class="accordion-header" on:click|preventDefault={toggled ? toggle : open}>
		<slot name="header" />
	</summary>
	{#if opened}
		<div class="accordion-body" in:slide>
			<slot />
		</div>
	{/if}
</details>

<script context="module">
	import { slide } from 'svelte/transition';
	const list = new Set();
</script>

<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let opened = false;
	export let toggled = false;
	export let group = 'group';
	let fn = { [group]: () => (opened = false) }[group];
	$: init(group);
	function init(group) {
		list.delete(fn);
		fn = { [group]: () => (opened = false) }[group];
		list.add(fn);
		return () => list.delete(fn);
	}
	function toggle() {
		if (opened) {
			dispatch('close', group);
			return (opened = false);
		} else dispatch('open', group);
		list.forEach((fn) => fn.name === group && fn());
		opened = true;
	}
	function open() {
		opened ? dispatch('close', group) : dispatch('open', group);
		opened = !opened;
	}
</script>

<style>
	.bg-darked {
		background: #252b33 !important;
		color: #fff;
	}

	.bg-secondary-darked {
		background: #343a51 !important;
		color: #fff;
	}

	.text-darked {
		color: #f2f2f2 !important;
	}

	a.text-darked:focus,
	a.text-darked:hover {
		color: #e6e6e6;
	}
	a.text-darked:visited {
		color: white;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;
		}

		.form-input,
		.form-select {
			background-color: #252b33 !important;
			border-color: #66758c !important;
			color: #f2f2f2 !important;
		}

		.form-checkbox .form-icon,
		.form-radio .form-icon,
		.form-switch .form-icon {
			border-color: #66758c !important;
			background: #252b33 !important;
		}

		input:active + .form-icon {
			background: #343a51 !important;
		}
		input:checked + .form-icon {
			background: #5755d9 !important;
		}

		.badge[data-badge]::after,
		.badge:not([data-badge])::after {
			box-shadow: 0 0 0 0.1rem #252b33 !important;
			color: #f2f2f2 !important;
		}

		code {
			background: #afa2b1;
			color: #413843;
		}

		.code {
			color: #bcc3ce;
		}
		.code::before {
			color: #bcc3ce;
		}
		.code code {
			background: #303742;
		}
	}
	[color-scheme='dark'] :root {
		color-scheme: dark;
	}
	[color-scheme='dark'] .form-input,
	[color-scheme='dark'] .form-checkbox .form-icon,
	[color-scheme='dark'] .form-select {
		background-color: #252b33 !important;
		border-color: #66758c !important;
		color: #f2f2f2 !important;
	}

	.accordion input:checked ~ .accordion-header > .icon:first-child,
	.accordion[open] .accordion-header > .icon:first-child {
		transform: rotate(90deg);
	}
	.accordion input:checked ~ .accordion-body,
	.accordion[open] .accordion-body {
		max-height: 50rem;
	}
	.accordion .accordion-header {
		display: block;
		padding: 0.2rem 0.4rem;
	}
	.accordion .accordion-header .icon {
		transition: transform 0.25s;
	}
	.accordion .accordion-body {
		margin-bottom: 0.4rem;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.25s;
	}

	summary.accordion-header::-webkit-details-marker {
		display: none;
	}

	.accordion[open] .accordion-header {
		position: relative;
	}
	.accordion[open] .accordion-header :global(.icon) {
		transform: rotate(90deg);
	}
	.accordion[open] .accordion-header :global(.icon[pos='right']) {
		transform: rotate(-90deg);
	}
	.accordion[open] .accordion-header :global(.icon[pos='plus']) {
		transform: rotate(-45deg);
	}
	.accordion .accordion-header {
		cursor: pointer;
		padding: 0.4rem 0;
	}
	.accordion .accordion-header :global(.icon) {
		transition: transform 0.25s;
	}
</style>
