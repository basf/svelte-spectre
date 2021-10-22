<ul class="tab" class:tab-block={block}>
	{#each items as item, i (item.pos)}
		<li class:active={item.path === active} class="tab-item">
			<a class:badge={item.badge} data-badge={item.badge} href={item.path}>
				{#if item.icon}<Icon icon={item.icon} />{/if}
				{#if item.title}{item.title}{/if}
				{#if item.clear}<Button variant="clear" />{/if}
			</a>
		</li>
	{/each}
</ul>

<script>
	import { Icon } from '../Icon/';
	import { Button } from '../Button/';
	export let items = [];
	export let active = '';
	export let block = false;
</script>

<style>
	:global(.spectre) .tab {
		align-items: center;
		border-bottom: 0.05rem solid #dadee4;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0.2rem 0 0.15rem 0;
	}
	:global(.spectre) .tab .tab-item {
		margin-top: 0;
	}
	:global(.spectre) .tab .tab-item a {
		border-bottom: 0.1rem solid transparent;
		color: inherit;
		display: block;
		margin: 0 0.4rem 0 0;
		padding: 0.4rem 0.2rem 0.3rem 0.2rem;
		text-decoration: none;
	}
	:global(.spectre) .tab .tab-item a:focus,
	:global(.spectre) .tab .tab-item a:hover {
		color: #5755d9;
	}
	:global(.spectre) .tab .tab-item.active a,
	:global(.spectre) .tab .tab-item a.active {
		border-bottom-color: #5755d9;
		color: #5755d9;
	}
	:global(.spectre) .tab .tab-item.tab-action {
		flex: 1 0 auto;
		text-align: right;
	}
	:global(.spectre) .tab .tab-item .btn-clear {
		margin-top: -0.2rem;
	}
	:global(.spectre) .tab.tab-block .tab-item {
		flex: 1 0 0;
		text-align: center;
	}
	:global(.spectre) .tab.tab-block .tab-item a {
		margin: 0;
	}
	:global(.spectre) .tab.tab-block .tab-item .badge[data-badge]::after {
		position: absolute;
		right: 0.1rem;
		top: 0.1rem;
		transform: translate(0, 0);
	}
	:global(.spectre) .tab:not(.tab-block) .badge {
		padding-right: 0;
	}

	.tab-item :global(.icon) {
		margin-top: -0.35rem;
		margin-right: 0.35rem;
	}

	.tab-item :global(.btn-clear) {
		margin-top: -0.2rem;
	}
</style>
