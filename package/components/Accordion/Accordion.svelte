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
