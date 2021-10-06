<details
	class="accordion {offset}"
	bind:open={opened}
	on:click|preventDefault={toggled ? toggle : open}
>
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1" />
		{title}
	</summary>
	{#if opened}
		<div class="accordion-body" transition:slide>
			<slot />
		</div>
	{/if}
</details>

<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Offset } from '../../types/position';
	export type { Offset };

	const list = new Set();
	function closeAll() {
		list.forEach((fn: Function) => fn());
	}
</script>

<script lang="ts">
	export let opened: boolean = false;
	export let toggled: boolean = false;
	export let title: string = 'Accordion';
	export let offset: Offset = '';

	onMount(() => init());

	function init() {
		const fn = () => (opened = false);
		list.add(fn);
		return () => list.delete(fn);
	}

	function toggle() {
		if (opened) return (opened = false);
		closeAll();
		opened = true;
	}

	function open() {
		opened = !opened;
	}
</script>

<style lang="scss">
	@import 'spectre.css/src/accordions';
	@import 'spectre.css/src/icons';
	.accordion {
		cursor: pointer;
	}
</style>
