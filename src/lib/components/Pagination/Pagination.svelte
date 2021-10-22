<ul class="pagination {offset}">
	<li class="page-item" class:disabled={active === 0}>
		<a href="#_" on:click={prev}>
			<slot name="prev">
				<Icon icon="back" />
			</slot>
		</a>
	</li>
	{#each items as page, i}
		<li class="page-item" class:disabled class:active={active === i}>
			{#if spread !== 0 && spreaded?.some((s) => s === i)}
				<span>...</span>
			{:else}
				<a href={'#_'} on:click={() => cur(i)}><slot {page}>{page}</slot></a>
			{/if}
		</li>
	{/each}
	<li class="page-item" class:disabled={active === pages.length - 1}>
		<a href="#_" on:click={next}>
			<slot name="next">
				<Icon icon="forward" />
			</slot>
		</a>
	</li>
</ul>

<script lang="ts" context="module">
	import Icon from '../Icon/Icon.svelte';

	import type { Offset } from '../../types/position';

	export type { Offset };
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let pages: number[];
	export let spread: number = 0;
	export let active: number;
	export let disabled: boolean;
	export let offset: Offset = '';

	const prev = () => (active > 0 && active--, dispatch('prev', active));
	const cur = (i: number) => ((active = i), dispatch('current', i));
	const next = () => (active < pages.length - 1 && active++, dispatch('next', active));

	let items = pages;
	const diff = (pages.length - (spread + 2)) / 2;
	// $: pages.length = spread !== 0 ? pages.length - diff : pages.length;
	$: spreaded = items.reduce((acc = [], c, i) => {
		console.log(acc);
		if (c !== 0 && c !== pages.length - 1) return [...acc, c];
	}, []);

	$: console.log(active, spreaded);
</script>

<style lang="scss">
	@import 'spectre.css/src/pagination';
	.page-item {
		a {
			:global(.icon) {
				vertical-align: sub;
			}
		}
	}
</style>
