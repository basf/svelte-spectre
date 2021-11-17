<div {...$$restProps} class="chip {offset}" class:active>
	{#if avatar}
		<Avatar size="sm" {name} {status} offset="ml--2 mr-2">
			{#if $$slots.avatar}
				<slot name="avatar" />
			{/if}
		</Avatar>
	{/if}
	<slot />
	{#if closable}
		<button
			href="#"
			class="btn btn-clear mr--1"
			aria-label="Close"
			role="button"
			on:click={() => dispatch('close', 'chip close')}
		/>
	{/if}
</div>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';
	import type { Status } from '../Avatar/Avatar.svelte';

	import Avatar from '../Avatar/Avatar.svelte';
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let offset: Offset = '';
	export let avatar: boolean = false;
	export let name: string = '';
	export let status: Status = false;
	export let active: boolean = false;
	export let closable: boolean = false;
</script>

<style lang="scss">
	@import 'spectre.css/src/chips';
	:global(.spectre) {
		.chip .btn-clear {
			background: transparent;
			border: 0;
			color: currentColor;
			height: $unit-5;
			line-height: $unit-4;
			margin-left: $unit-1;
			margin-right: -2px;
			opacity: 1;
			padding: $unit-h;
			text-decoration: none;
			width: $unit-5;
			cursor: pointer;
			&:focus,
			&:hover {
				background: rgba($bg-color, 0.5);
				opacity: 0.95;
			}
			&::before {
				content: '\2715';
			}
		}
	}
</style>
