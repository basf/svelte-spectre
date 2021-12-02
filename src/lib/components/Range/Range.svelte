<label
	{...$$restProps}
	id="range-{fid}"
	class="is-{validity}"
	class:form-inline={inline}
	style="--range: {range}; --min: {min}; --max: {max}"
	data-range={range}
>
	<slot />
	<input class="slider" type="range" bind:value={range} {min} {max} on:input on:change />
</label>

<script lang="ts" context="module">
	import uuid from '../../helpers/uuid';

	type Validity = 'success' | 'error' | false;

	export type { Validity };
</script>

<script lang="ts">
	export let range: number = 50;
	export let min: number = 0;
	export let max: number = 100;
	export let inline: boolean = false;
	export let validity: Validity = false;

	const fid: string = uuid();
</script>

<style lang="scss">
	@import 'spectre.css/src/sliders';

	label {
		display: block;
		position: relative;

		&:not([data-tooltip]) {
			&::after {
				content: attr(data-range);
				position: absolute;
				left: calc(100% / calc((var(--max) - var(--min)) / (var(--range) - var(--min))));
				bottom: 150%;
				color: $light-color;
				background: rgba($dark-color, 0.95);
				padding: $unit-1 $unit-2;
				border-radius: $border-radius;
				transform: translateX(-50%);
				transition: opacity 250ms, transform 250ms, bottom 250ms;
				opacity: 0;
			}
		}
		&:hover,
		&:active {
			&:not([data-tooltip]) {
				&::after {
					opacity: 1;
					bottom: 100%;
				}
			}
		}
	}
	input[type='range'] {
		// --size: 60px;
		// --color: $bg-color-dark;
		// --background: $primary-color;
		--direction: to right;
		width: 100%;
		// &.is-error {
		// 	--background: $error-color;
		// }

		//webkit
		&::-webkit-slider-runnable-track {
			height: 3px;
			background: linear-gradient(
				var(--direction),
				$primary-color
					calc(100% / calc((var(--max) - var(--min)) / (var(--range) - var(--min)))),
				$bg-color-dark
					calc(100% / calc((var(--max) - var(--min)) / (var(--range) - var(--min))))
			);
		}
		&::-webkit-slider-thumb {
			transform: scale(1.25);
			box-shadow: 0 0 0 0pt rgba($primary-color, 0.27);
			transition: transform 250ms, box-shadow 250ms;
		}
		&:hover::-webkit-slider-thumb {
			transform: scale(1.5);
		}
		&:active::-webkit-slider-thumb {
			transform: scale(1.25);
			box-shadow: 0 0 0 3pt rgba($primary-color, 0.27);
		}

		//moz
		&::-moz-range-track {
			height: 3px;
			background: linear-gradient(
				var(--direction),
				$primary-color
					calc(100% / calc((var(--max) - var(--min)) / (var(--range) - var(--min)))),
				$bg-color-dark
					calc(100% / calc((var(--max) - var(--min)) / (var(--range) - var(--min))))
			);
		}
		&::-moz-range-thumb {
			transform: scale(1.25);
			box-shadow: 0 0 0 0pt rgba($primary-color, 0.27);
			transition: transform 250ms, box-shadow 250ms;
		}
		&:hover::-moz-range-thumb {
			transform: scale(1.5);
		}
		&:active::-moz-range-thumb {
			transform: scale(1.25);
			box-shadow: 0 0 0 3pt rgba($primary-color, 0.27);
		}
	}
</style>
