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

<script lang="ts" context="module">
	import { slide } from 'svelte/transition';

	const list: Set<Function> = new Set();
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let opened: boolean = false;
	export let toggled: boolean = false;
	export let group: string = 'group';

	let fn: Function = { [group]: () => (opened = false) }[group];

	$: init(group);

	function init(group: string) {
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
		list.forEach((fn: Function) => fn.name === group && fn());
		opened = true;
	}

	function open() {
		opened ? dispatch('close', group) : dispatch('open', group);
		opened = !opened;
	}
</script>

<style lang="scss">
	@import '@spectre-org/spectre-css/src/accordions';
	.accordion {
		&[open] {
			& .accordion-header {
				position: relative;
				:global(.icon) {
					transform: rotate(90deg);
				}
				:global(.icon[pos='right']) {
					transform: rotate(-90deg);
				}
				:global(.icon[pos='plus']) {
					transform: rotate(-45deg);
				}
			}
		}
		.accordion-header {
			cursor: pointer;
			padding: $unit-2 0;
			:global(.icon) {
				transition: transform 0.25s;
			}
		}
	}
</style>
