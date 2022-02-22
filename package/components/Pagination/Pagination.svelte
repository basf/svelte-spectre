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
				on:select={() => dispatch('limited', limit)}
				bind:value={limit}
				options={limits}
				size="xs"
			/>
		</div>
	{/if}
</div>

<script context="module">
	import Icon from '../Icon/Icon.svelte';
	import Select from '../Select/Select.svelte';
</script>

<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let page = 1;
	export let total = 0;
	export let limit = 10;
	export let rest;
	export let perpage = true;
	export let limits = Array.from({ length: 10 }, (_, i) => (i + 1) * limit);
	$: length = Math.ceil(total / limit);
	$: shift = Math.trunc(rest / 2);
	$: page = page > length ? length : page;
</script>

<style>
	.pagination {
		display: flex;
		list-style: none;
		margin: 0.2rem 0;
		padding: 0.2rem 0;
	}
	.pagination .page-item {
		margin: 0.2rem 0.05rem;
	}
	.pagination .page-item span {
		display: inline-block;
		padding: 0.2rem 0.2rem;
	}
	.pagination .page-item a {
		border-radius: 0.1rem;
		display: inline-block;
		padding: 0.2rem 0.4rem;
		text-decoration: none;
	}
	.pagination .page-item a:focus,
	.pagination .page-item a:hover {
		color: #5755d9;
	}
	.pagination .page-item.disabled a {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
	}
	.pagination .page-item.active a {
		background: #5755d9;
		color: #fff;
	}
	.pagination .page-item.page-prev,
	.pagination .page-item.page-next {
		flex: 1 0 50%;
	}
	.pagination .page-item.page-next {
		text-align: right;
	}
	.pagination .page-item .page-item-title {
		margin: 0;
	}
	.pagination .page-item .page-item-subtitle {
		margin: 0;
		opacity: 0.5;
	}

	.pagination {
		flex-wrap: wrap;
	}
	.pagination .page-item a {
		font-weight: bold;
	}
	.pagination .page-item a :global(.icon) {
		vertical-align: sub;
	}
</style>
