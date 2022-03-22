<div {...$$restProps} class="chip bg-{color}" class:active>
	{#if avatar}
		<Avatar size="sm" {name} {status}>
			<slot name="avatar" />
		</Avatar>
	{/if}
	<slot />
	{#if closable}
		<button
			class="btn btn-clear mr--1"
			aria-label="Close"
			on:click={() => dispatch('close', 'chip close')}
		/>
	{/if}
</div>

<script lang="ts" context="module">
	import type { Status } from '../Avatar/Avatar.svelte';

	import Avatar from '../Avatar/Avatar.svelte';

	import type { Color } from '../../types/text';

	export type { Status };
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let avatar: boolean = false;
	export let name: string = '';
	export let status: Status = null;
	export let color: Color = null;
	export let active: boolean = false;
	export let closable: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/chips';
		.chip {
			max-width: fit-content;
			:global(.avatar) {
				margin-left: -$unit-2;
				margin-right: $unit-2;
			}
			&.bg-primary {
				background-color: $primary-color !important;
			}
			&.bg-secondary {
				background-color: $secondary-color !important;
			}
			&.bg-success {
				background-color: $success-color !important;
			}
			&.bg-warning {
				background-color: $warning-color !important;
			}
			&.bg-error {
				background-color: $error-color !important;
			}
			&.bg-gray {
				background-color: $gray-color !important;
			}
			&.bg-light {
				background-color: $light-color !important;
			}
			.btn-clear {
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
	}
</style>
