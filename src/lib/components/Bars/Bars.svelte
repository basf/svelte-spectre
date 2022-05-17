<div class="bar" class:bar-sm={thin} class:striped class:animated>
	{#each items as item, i}
		{#if !item.invisible}
			<div
				class="bar-item tooltip tooltip-{item.tooltip?.pos || 'top'} bar-{item.color ||
					'primary'}"
				style="width: {item.value}%;"
				class:striped={item.striped}
				class:animated={item.animated}
				data-tooltip={item.tooltip?.label || item.value}
			>
				{labled ? item.label || item.value : ''}
			</div>
		{/if}
	{/each}
</div>

<script lang="ts" context="module">
	import type { Color } from '../../types/text';
	type Item = {
		value: number;
		label?: string;
		color: Color;
		striped: boolean;
		animated: boolean;
		invisible?: boolean;
		tooltip?: {
			pos: string;
			label: string;
		};
	};
</script>

<script lang="ts">
	export let items: Item[];
	export let value: number = 0;
	export let min: number = 0;
	export let low: number = 25;
	export let high: number = 50;
	export let max: number = 100;
	export let striped: boolean;
	export let animated: boolean;
	export let thin: boolean;
	export let auto: boolean;
	export let labled: boolean;

	$: if (!items.length && auto) {
		items = [
			{
				value: value <= min ? value : min,
				invisible: !value,
				striped: value < min,
				animated: value < min,
				color: 'secondary',
			},
			{
				value: value <= low ? value - min : low - min,
				invisible: value <= min,
				striped: value < low,
				animated: value < low,
				color: 'error',
			},
			{
				value: value <= high ? value - low : high - low,
				invisible: value <= low,
				striped: value < high,
				animated: value < high,
				color: 'warning',
			},
			{
				value: value <= max ? value - high : max - high,
				invisible: value <= high,
				striped: value < max,
				animated: value < max,
				color: 'success',
			},
			{
				value: value - max,
				invisible: value <= max,
				striped: value < 100,
				animated: value < 100,
				color: 'primary',
			},
		];
	}
</script>

<style lang="scss">
	@import 'spectre.css/src/bars';

	.bar {
		.bar-item {
			&.bar-primary {
				background-color: auto;
			}
			&.bar-secondary {
				background-color: $secondary-color;
			}
			&.bar-warning {
				background-color: $warning-color;
			}
			&.bar-success {
				background-color: $success-color;
			}
			&.bar-error {
				background-color: $error-color;
			}
		}
	}

	.bar,
	.bar .bar-item {
		&.striped {
			background-image: linear-gradient(
				45deg,
				rgba(255, 255, 255, 0.25) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255, 255, 255, 0.25) 50%,
				rgba(255, 255, 255, 0.25) 75%,
				transparent 75%,
				transparent
			);
			background-size: 1em 1em;
		}
		&.animated {
			-webkit-animation: 1s linear infinite stripes;
			animation: 1s linear infinite stripes;
		}
	}

	@keyframes stripes {
		to {
			background-position-x: 1em;
		}
	}
</style>
