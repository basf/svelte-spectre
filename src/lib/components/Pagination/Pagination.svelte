<div {...$$restProps} class="columns">
	<ul class="pagination column col-{perpage ? 10 : 12} col-xs-12">
		<li class="page-item" class:disabled={page === 1}>
			<a href="#_" on:click|preventDefault={() => page--}>
				<slot name="prev">
					<Icon icon="back" />
				</slot>
			</a>
		</li>
		{#each visiblePages as p, i (i)}
			{#if p === '...'}
				<li class="page-item">
					<slot name="rest">
						<span>...</span>
					</slot>
				</li>
			{:else}
				<li class="page-item" class:active={page === p}>
					<a href="#_" on:click|preventDefault={() => (page = p)}>{p}</a>
				</li>
			{/if}
		{/each}
		<li class="page-item" class:disabled={page === length}>
			<a href="#_" on:click|preventDefault={() => page++}>
				<slot name="next">
					<Icon icon="forward" />
				</slot>
			</a>
		</li>
	</ul>
	{#if perpage}
		<div class="column col-2 col-xs-12 my-2">
			<Select
				on:change={() => dispatch('limited', limit)}
				bind:value={limit}
				options={limits}
				size="xs"
			/>
		</div>
	{/if}
</div>

<script lang="ts" context="module">
	import Icon from '../Icon/Icon.svelte';
	import Select from '../Select/Select.svelte';
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let page: number = 1;
	export let total: number = 0;
	export let limit: number = 10;
	export let rest: number;
	export let perpage: boolean = true;
	export let limits: number[] = Array.from({ length: 10 }, (_, i) => (i + 1) * limit);

	$: length = Math.max(1, Math.ceil(total / limit));
	$: shift = Math.trunc(rest / 2);
	$: page = page > length ? length : page;
	$: page && dispatch('paged', page);

	type PageItem = number | '...';

	$: visiblePages = computeVisiblePages(page, length, rest, shift);

	function computeVisiblePages(
		page: number,
		length: number,
		rest: number | undefined,
		shift: number
	): PageItem[] {
		if (!rest || length <= rest * 2 + 2) {
			return Array.from({ length }, (_, i) => i + 1);
		}

		const items: PageItem[] = [];
		const windowStart = page - shift;
		const windowEnd = page + (rest - shift);

		if (page <= rest) {
			for (let p = 1; p <= rest + 1; p++) items.push(p);
			items.push('...');
			items.push(length);
		} else if (page > rest && page <= length - rest) {
			items.push(1);
			items.push('...');
			for (let p = windowStart; p < windowEnd; p++) items.push(p);
			items.push('...');
			items.push(length);
		} else {
			items.push(1);
			items.push('...');
			for (let p = length - rest; p <= length; p++) items.push(p);
		}

		return items;
	}
</script>

<style lang="scss">
	@import '@spectre-org/spectre-css/src/pagination';
	.pagination {
		flex-wrap: wrap;
		.page-item {
			a {
				:global(.icon) {
					vertical-align: sub;
				}
			}
		}
	}
</style>
