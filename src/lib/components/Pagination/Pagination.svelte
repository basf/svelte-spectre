<ul class="pagination {offset}">
	<li class="page-item" class:disabled={active === 0}>
		<a href="#_" on:click={prev}>
			<slot name="prev">
				<Icon icon="back" />
			</slot>
		</a>
	</li>
	{#each items as page, i}
		{#if spread !== 0 && spreaded(i).every((s) => s !== i)}
			<li class="page-item" class:disabled class:active={active === i}>
				<span>...</span>
			</li>
		{:else}
			<li class="page-item" class:disabled class:active={active === i}>
				<a href={'#_'} on:click={() => cur(i)}><slot {page}>{page}</slot></a>
			</li>
		{/if}
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
	const start = 0;
	const end = pages.length - 1;
	const diff = (pages.length - (spread + 2)) / 2;
	const uniq = (a: number[]) => [...new Set(a)];
	// $: pages.length = spread !== 0 ? pages.length - diff : pages.length;

	$: spreaded = (i: number): number[] => {
		const before = active - Math.trunc(spread / 2);
		const after = active + Math.trunc(spread / 2);
		const around = items.slice(before >= 0 ? before : 0, after + 1);
		return uniq([start, ...around, end]);
	};
	// const collapsed = (items: number[], i: number) => spreaded(items).every((s) => s !== i);
	$: console.log(active, items, spreaded());
</script>

<style lang="scss">
	@import 'spectre.css/src/pagination';
	.page-item {
		a {
			font-weight: bold;
			:global(.icon) {
				vertical-align: sub;
			}
		}
	}
</style>
