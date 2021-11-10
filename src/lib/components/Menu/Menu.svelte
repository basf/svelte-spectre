<ul class="menu" class:menu-nav={nav}>
	{#if $$slots.header}
		<li class="menu-item">
			<slot name="header" />
		</li>
	{/if}
	{#if items}
		{#each items as item, i}
			{#if item.divider}
				<Divider text={item.divider} />
			{:else}
				<li class="menu-item">
					{#if Object.keys(item).includes('checkbox') && !item.badge}
						<Checkbox bind:value={item.checkbox}>{item.text}</Checkbox>
					{:else if Object.keys(item).includes('switch')}
						<Switch bind:value={item.switch}>{item.text}</Switch>
					{:else if Object.keys(item).includes('radio')}
						<label class="form-radio">
							<input type="radio" value={item.text} bind:group={radiogroup} />
							<i class="form-icon" />
							{item.text}
						</label>
					{:else}
						<a href={item.link || '#'} class:active={item.active}>
							{#if item.icon}<Icon icon={item.icon} />{/if}
							{item.text}
						</a>
						{#if item.badge}
							<div class="menu-badge">
								{#if Object.keys(item).includes('checkbox')}
									<Checkbox bind:value={item.checkbox}>{item.badge}</Checkbox>
								{:else}
									<Badge color="primary">{item.badge}</Badge>
								{/if}
							</div>
						{/if}
					{/if}
				</li>
			{/if}
		{/each}
	{:else}
		<slot />
	{/if}
	{#if $$slots.footer}
		<li class="menu-item">
			<slot name="footer" />
		</li>
	{/if}
</ul>

<script lang="ts" context="module">
	import type { Icons } from '../../types/icons';

	interface MenuItem {
		id?: number;
		text?: string;
		link?: string;
		icon?: Icons;
		active?: boolean;
		badge?: string;
		divider?: string;
		checkbox?: boolean;
		switch?: boolean;
		radio?: boolean;
	}
	export type { MenuItem, Icons };
</script>

<script lang="ts">
	import Checkbox from '../Checkbox/Checkbox.svelte';
	import Switch from '../Switch/Switch.svelte';
	import Radio from '../Radio/Radio.svelte';
	import Divider from '../Divider/Divider.svelte';
	import Badge from '../Badge/Badge.svelte';
	import Icon from '../Icon/Icon.svelte';

	export let items: MenuItem[];
	export let active: boolean;
	export let nav: boolean;
	export let radiogroup: any;
</script>

<style lang="scss">
	@import 'spectre.css/src/menus';
	@import 'spectre.css/src/icons';
	@import 'spectre.css/src/labels';

	.menu {
		.menu-item {
			border-radius: $border-radius;
			&:first-child {
				margin-bottom: $unit-4;
			}
			&:last-child {
				margin-top: $unit-4;
			}
			&:not(:first-child, :last-child) {
				&:focus,
				&:hover {
					background: $secondary-color;
					color: $primary-color;
				}
				&:active,
				&.active {
					background: $secondary-color;
					color: $primary-color;
				}
				&:active {
					@include control-shadow();
				}
			}
		}
		:global(.divider) {
			text-transform: uppercase;
			&:not(:first-child) {
				margin-top: 1.5em !important;
			}
		}
	}
</style>
