<ul class="pagination {offset}">
	<li class="page-item" class:disabled={active === start}>
		<a href="#_" on:click={prev}>
			<slot name="prev">
				<Icon icon="back" />
			</slot>
		</a>
	</li>
	{#if pages.length}
		{#each spreaded(pages) as page, i}
			<li class="page-item" class:active={active === page}>
				{#if typeof page === 'boolean'}
					<span>...</span>
				{:else}
					<a href="#_" on:click={() => cur(page)}>{page}</a>
				{/if}
			</li>
		{/each}
	{/if}
	<li class="page-item" class:disabled={active === end}>
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

	export let total: number;
	export let limit: number;
	export let active: number;
	export let spread: number;
	export let offset: Offset = '';

	const pages = [...Array(Math.ceil(total / limit)).keys()].map((p) => p + 1);

	const start = 1;
	const end = pages.length;
	const half = Math.trunc(spread / 2);

	const prev = () => (active > start && active--, dispatch('prev', active));
	const cur = (i: number) => ((active = i), dispatch('current', i));
	const next = () => (active < end && active++, dispatch('next', active));

	$: spreaded = (items: number[]) => {
		const before = active - half;
		const after = active + half;
		const from = before >= start ? before - 1 : start;
		const around = items.slice(from, after);
		const result = items.map((i) =>
			![start, end, ...around].includes(i) ? around.every((a) => a > i) : i
		);
		const uniq = (a: (number | boolean)[]): (number | boolean)[] => [...new Set(a)];
		return spread ? uniq(result) : items;
	};
</script>

<style lang="scss">
	@import 'spectre.css/src/pagination';
	.pagination {
		// display: inline-flex;
		// justify-content: space-between;
		// list-style: none;
		// margin: 0.2rem auto;
		// padding: 0.2rem 0;
		// overflow-x: auto;
		// margin: auto;
		// position: relative;
		// width: 30%;
		.page-item {
			a {
				font-weight: bold;
				:global(.icon) {
					vertical-align: sub;
				}
			}
			&:first-child,
			&:last-child {
				// position: relative;
				// top: 0;
				// background: aliceblue;
				// margin: 0;
				// bottom: 0;
				// justify-content: center;
				// display: flex;
				// align-items: center;
				// z-index: 1;
			}
			&:first-child {
				// left: 0.1rem;
			}
			&:last-child {
				// right: 0.1rem;
			}
		}
	}
</style>
