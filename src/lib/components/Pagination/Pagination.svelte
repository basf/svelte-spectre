<ul class="pagination {offset}">
	<li class="page-item" class:disabled={active === 0}>
		<a href="#_" on:click={prev}>
			<slot name="prev">
				<Icon icon="back" />
			</slot>
		</a>
	</li>
	{#each spreaded() as page, i}
		<li class="page-item" class:active={active === page}>
			{#if page === null || page === Infinity}
				<span>...</span>
			{:else}
				<a href={'#_'} on:click={() => cur(page)}><slot {page}>{page}</slot></a>
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
	export let spread: number;
	export let active: number;
	export let offset: Offset = '';

	const start = 0;
	const end = pages.length - 1;

	const prev = () => (active > start && active--, dispatch('prev', active));
	const cur = (i: number) => ((active = i), dispatch('current', i));
	const next = () => (active < end && active++, dispatch('next', active));

	$: spreaded = () => {
		const half = Math.trunc(spread / 2);
		const before = active - half;
		const after = active + half;
		const around = pages.slice(before >= start ? before : start, after + 1);
		const result = pages.map((i) => {
			if (i === start || i === end) return i;
			else if (around.some((a) => a === i)) return i;
			else if (i > start && around.every((a) => a > i)) return null;
			else if (i < end && around.every((a) => a < i)) return Infinity;
			else return;
		});
		const uniq = (a: number[]): number[] => [...new Set(a)];
		return spread ? uniq(result) : pages;
	};
</script>

<style lang="scss">
	@import 'spectre.css/src/pagination';
	.pagination {
		justify-content: center;
		.page-item {
			a {
				font-weight: bold;
				:global(.icon) {
					vertical-align: sub;
				}
			}
		}
	}
</style>
