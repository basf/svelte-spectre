<ul class="menu" class:menu-nav={nav}>
	{#if items}
		{#each items as item, i}
			{#if item.divider}
				<li class="divider" data-content={item.divider} />
			{:else}
				<li class="menu-item">
					{#if Object.keys(item).includes('checkbox') && !item.badge}
						<label class="form-checkbox">
							<input type="checkbox" bind:checked={item.checkbox} />
							<i class="form-icon" />
							{item.text}
						</label>
					{:else if Object.keys(item).includes('switch')}
						<label class="form-switch">
							<input type="checkbox" bind:checked={item.switch} />
							<i class="form-icon" />
							{item.text}
						</label>
					{:else if Object.keys(item).includes('radio')}
						<label class="form-radio">
							<input type="radio" value={item.text} bind:group={radiogroup} />
							<i class="form-icon" />
							{item.text}
						</label>
					{:else}
						<a href={item.link || '#'} class:active={item.active}>
							{#if item.icon}<i class="icon icon-{item.icon}" />{/if}
							{item.text}
						</a>
						{#if item.badge}
							<div class="menu-badge">
								{#if Object.keys(item).includes('checkbox')}
									<label class="form-checkbox">
										<input type="checkbox" bind:checked={item.checkbox} />
										<i class="form-icon" />
										{item.badge}
									</label>
								{:else}
									<label class="label label-primary">{item.badge}</label>
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
</ul>

<script lang="ts" context="module">
	import type { Zoom } from '../../types/size';
	import type { Icons } from '../../types/icons';
	import type { Offset } from '../../types/position';
	import type { Color } from '../../types/text';

	export type { Zoom, Icons };
</script>

<script lang="ts">
	import Checkbox from '../Checkbox';

	export let items: any[];
	export let active: boolean;
	export let nav: boolean;
	export let radiogroup: any;
	export let icon: Icons = '';
	export let size: Zoom = '1x';
	export let offset: Offset = '';
	export let color: Color = '';
</script>

<style lang="scss">
	@import 'spectre.css/src/menus';
	@import 'spectre.css/src/icons';
	@import 'spectre.css/src/labels';
	:global {
		@import 'spectre.css/src/icons/icons-core';
	}
	.menu {
		.menu-item {
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
		}
		.divider {
			text-transform: uppercase;
			&:not(:first-child) {
				margin-top: 1.6em;
			}
		}
	}
</style>
