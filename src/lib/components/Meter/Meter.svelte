<meter
	{...$$restProps}
	class="meter"
	class:striped
	class:animated
	{value}
	{min}
	{max}
	{low}
	{high}
	{optimum}
/>

<script lang="ts" context="module">
</script>

<script lang="ts">
	export let value: number = 0;
	export let min: number = 0;
	export let max: number = 100;
	export let low: number = 26;
	export let high: number = 51;
	export let optimum: number = 90;
	export let striped: boolean;
	export let animated: boolean;
</script>

<style lang="scss">
	@import 'spectre.css/src/meters';

	.meter {
		appearance: auto;
		&.striped {
			&::-moz-meter-bar {
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
			&::-webkit-meter-suboptimum-value,
			&::-webkit-meter-optimum-value,
			&::-webkit-meter-even-less-good-value {
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
				&::-moz-meter-bar {
					-webkit-animation: 1s linear infinite progress-bar-stripes;
					animation: 1s linear infinite progress-bar-stripes;
				}
				&::-webkit-meter-suboptimum-value,
				&::-webkit-meter-optimum-value,
				&::-webkit-meter-even-less-good-value {
					-webkit-animation: 1s linear infinite progress-bar-stripes;
					animation: 1s linear infinite progress-bar-stripes;
				}
			}
		}
		@keyframes progress-bar-stripes {
			0% {
				background-position-x: 1em;
			}
		}
	}
</style>
