<progress
	{...$$restProps}
	class="progress {color && `text-${color}`}"
	class:progress-invert={invert}
	{value}
	{max}
/>

<script context="module" lang="ts">
	import type { Color } from '../../types/bg';
	export type { Color };
</script>

<script lang="ts">
	export let color: Color = 'light';
	export let invert: boolean = false;
	export let value: number;
	export let max: number = 0;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/progress';

		.progress {
			--progress-color: currentColor;

			&::-webkit-progress-bar {
				background: transparent;
			}

			&::-webkit-progress-value {
				background: var(--progress-color, $primary-color);
			}

			&::-moz-progress-bar {
				background: var(--progress-color, $primary-color);
			}
			&.progress-invert {
				transform: scaleX(-1);
			}
			&:indeterminate {
				background: $bg-color-dark
					linear-gradient(
						to right,
						var(--progress-color, $primary-color) 30%,
						$bg-color-dark 30%
					)
					top left / 150% 150% no-repeat;
			}

			@media (prefers-color-scheme: dark) {
				background: $dark-color;
				&:indeterminate {
					background: $dark-color
						linear-gradient(
							to right,
							var(--progress-color, $primary-color) 30%,
							$dark-color 30%
						)
						top left / 150% 150% no-repeat;
				}
			}

			[color-scheme='dark'] {
				background: $dark-color;
				&:indeterminate {
					background: $dark-color
						linear-gradient(
							to right,
							var(--progress-color, $primary-color) 30%,
							$dark-color 30%
						)
						top left / 150% 150% no-repeat;
				}
			}
		}
	}
</style>
