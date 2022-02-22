<ul {...$$restProps} class="tab" class:tab-block={block}>
	{#each items as item, i}
		<li
			class:active={active === i || item?.path?.includes(`${active}`)}
			class="tab-item"
			tabindex="0"
			use:select={i}
			bind:this={nodes[i]}
		>
			<a href={item.path} use:addBadge={item.badge}>
				{#if item.icon}<Icon icon={item.icon} />{/if}
				{#if item.title}{item.title}{/if}
				{#if item.clear}<IconButton variant="clear" />{/if}
			</a>
		</li>
	{/each}

	{#if $$slots.action}
		<li class="tab-item tab-action">
			<slot name="action" />
		</li>
	{/if}
</ul>

<script context="module">
	import Icon from '../Icon/Icon.svelte';
	import IconButton from '../Button/Button.svelte';
	import { badge as addBadge } from '../Badge';
</script>

<script>
	export let items = [];
	export let active = 0;
	export let block = false;
	let index = active,
		nodes = [];
	function select(node, i) {
		node.onkeydown = (e) => {
			switch (e.key) {
				case 'Tab':
					e.preventDefault();
					index = index < items.length - 1 ? index + 1 : 0;
					nodes[index].focus();
					break;
				case ' ':
				case 'Enter':
					e.preventDefault();
					nodes[i].firstChild.click();
					if (typeof active === 'number') {
						active = i;
					}
					index = i;
					break;
				case 'Escape':
					e.preventDefault();
					nodes[index].blur();
					break;
				default:
					break;
			}
		};
		node.onclick = (e) => {
			if (typeof active === 'number') {
				active = i;
			}
			index = i;
			nodes[index].focus();
		};
	}
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

	.tab-item:focus {
		outline: 0;
	}
	.tab-item:focus a,
	.tab-item:focus button {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
	}
	.tab-item :global(.icon) {
		margin-top: -0.35rem;
		margin-right: 0.35rem;
	}
	.tab-item :global(.btn-clear) {
		margin-top: -0.2rem;
	}
	.tab-item > :global(button) {
		color: inherit;
		display: block;
		margin: 0 0.4rem 0 0 !important;
		padding: 0.4rem 0.2rem 0.3rem 0.2rem;
		text-decoration: none;
		background: none;
		border: 0;
		border-bottom: 0.1rem solid transparent;
	}
	.tab-item > :global(button):focus,
	.tab-item > :global(button):hover {
		color: #5755d9;
	}
	.tab-item.active :global(button),
	.tab-item :global(button.active) {
		border-bottom-color: #5755d9;
		color: #5755d9;
	}
</style>
