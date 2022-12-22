<div {...$$restProps} class="columns">
	<ul class="pagination column col-{perpage ? 10 : 12} col-xs-12">
		<li class="page-item" class:disabled={page === 1}>
			<a href="#_" on:click|preventDefault={() => page--}>
				<slot name="prev">
					<Icon icon="back" />
				</slot>
			</a>
		</li>
		{#each { length } as _, p (++p)}
			{#if !rest}
				<li class="page-item" class:active={page === p}>
					<a href="#_" on:click|preventDefault={() => (page = p)}>{p}</a>
				</li>
			{:else if page <= rest}
				{#if p <= rest + 1 || p === length}
					<li class="page-item" class:active={page === p}>
						<a href="#_" on:click|preventDefault={() => (page = p)}>{p}</a>
					</li>
				{/if}
				{#if p === rest + 1}
					<li class="page-item" class:active={page === p}>
						<slot name="rest">
							<span>...</span>
						</slot>
					</li>
				{/if}
			{:else if page > rest && page <= length - rest}
				{#if p === length}
					<li class="page-item" class:active={page === p}>
						<slot name="rest">
							<span>...</span>
						</slot>
					</li>
				{/if}
				{#if (p >= page - shift && p < page + (rest - shift)) || p === length || p === 1}
					<li class="page-item" class:active={page === p}>
						<a href="#_" on:click|preventDefault={() => (page = p)}>{p}</a>
					</li>
				{/if}
				{#if p === 1}
					<li class="page-item" class:active={page === p}>
						<slot name="rest">
							<span>...</span>
						</slot>
					</li>
				{/if}
			{:else if page > length - rest}
				{#if p === length - rest}
					<li class="page-item" class:active={page === p}>
						<slot name="rest">
							<span>...</span>
						</slot>
					</li>
				{/if}
				{#if p >= length - rest || p === 1}
					<li class="page-item" class:active={page === p}>
						<a href="#_" on:click|preventDefault={() => (page = p)}>{p}</a>
					</li>
				{/if}
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

	$: length = Math.ceil(total / limit);
	$: shift = Math.trunc(rest / 2);
	$: page = page > length ? length : page;
	$: page && dispatch('paged', page);
</script>

<style lang="scss">
	@import 'spectre.css/src/pagination';
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
