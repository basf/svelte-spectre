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

<script lang="ts" context="module">
	import Icon from '../Icon/Icon.svelte';
	import IconButton from '../Button/Button.svelte';
	import { badge as addBadge } from '../Badge';
	import type Icons from '../Icon/Icon.svelte';
	interface Item {
		title: string;
		path?: string;
		icon?: Icons;
		badge?: string;
		clear?: boolean;
	}
	export type { Icons, Item };
</script>

<script lang="ts">
	export let items: Item[] = [];
	export let active: number = 0;
	export let block: boolean = false;
	let index = active,
		nodes = [];
	function select(node: HTMLElement, i: number) {
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

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/tabs';
	}
	.tab-item {
		&:focus {
			outline: 0;
			a,
			button {
				@include control-shadow();
			}
		}
		:global(.icon) {
			margin-top: -0.35rem;
			margin-right: 0.35rem;
		}
		:global(.btn-clear) {
			margin-top: -0.2rem;
		}
		& > :global(button) {
			color: inherit;
			display: block;
			margin: 0 $unit-2 0 0 !important;
			padding: $unit-2 $unit-1 $unit-2 - $border-width-lg $unit-1;
			text-decoration: none;
			background: none;
			border: 0;
			border-bottom: $border-width-lg solid transparent;
			&:focus,
			&:hover {
				color: $link-color;
			}
		}
		&.active :global(button),
		:global(button.active) {
			// border-bottom: 1px solid;
			border-bottom-color: $primary-color;
			color: $link-color;
		}
	}
</style>
