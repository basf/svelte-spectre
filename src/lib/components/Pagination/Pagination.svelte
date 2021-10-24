<div class="columns">
	<ul class="pagination column col-{perpage ? 10 : 12} col-xs-12">
		<li class="page-item" class:disabled={page === 1}>
			<a href="#" on:click|preventDefault={() => page--}>
				<slot name="prev">
					<Icon icon="back" />
				</slot>
			</a>
		</li>
		{#each { length } as _, p (++p)}
			<li class="page-item" class:active={page === p}>
				{#if !rest}
					<a href="#" on:click|preventDefault={() => (page = p)}>{p}</a>
				{:else if page <= rest}
					{#if p <= rest + 1 || p === length}
						<a href="#" on:click|preventDefault={() => (page = p)}>{p}</a>
					{/if}
					{#if p === rest + 1}
						<slot name="rest">
							<span>...</span>
						</slot>
					{/if}
				{:else if page > rest && page <= length - rest}
					{#if p === length}
						<slot name="rest">
							<span>...</span>
						</slot>
					{/if}
					{#if (p >= page - shift && p < page + (rest - shift)) || p === length || p === 1}
						<a href="#" on:click|preventDefault={() => (page = p)}>{p}</a>
					{/if}
					{#if p === 1}
						<slot name="rest">
							<span>...</span>
						</slot>
					{/if}
				{:else if page > length - rest}
					{#if p === length - rest}
						<slot name="rest">
							<span>...</span>
						</slot>
					{/if}
					{#if p >= length - rest || p === 1}
						<a href="#" on:click|preventDefault={() => (page = p)}>{p}</a>
					{/if}
				{/if}
			</li>
		{/each}
		<li class="page-item" class:disabled={page === length}>
			<a href="#" on:click|preventDefault={() => page++}>
				<slot name="next">
					<Icon icon="forward" />
				</slot>
			</a>
		</li>
	</ul>
	{#if perpage}
		<div class="column col-2 col-xs-12 my-2">
			<Select bind:value={limit} options={limits} size="xs" />
		</div>
	{/if}
</div>

<script lang="ts" context="module">
	import Icon from '../Icon/';
	import Select from '../Select/';
</script>

<script lang="ts">
	export let page = 1;
	export let total = 0;
	export let limit = 10;
	export let rest: number;
	export let perpage = true;

	const limits = Array.from({ length: 10 }, (_, i) => (i + 1) * limit);

	$: length = Math.ceil(total / limit);
	$: shift = Math.trunc(rest / 2);
	$: page > length && (page = length);
</script>

<style lang="scss">
	@import 'spectre.css/src/pagination';
	.pagination {
		flex-wrap: wrap;
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
