{#if progress}
	<div class="meter">
		<span
			class:error={min <= value && value <= low}
			class:warning={low <= value && value <= high}
			class:success={high <= value && value <= max}
			style="width: {value}%"
			class:striped
			class:animated
		/>
	</div>
{:else}
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
{/if}

<script lang="ts">
	export let value: number = 0;
	export let min: number = 0;
	export let max: number = 100;
	export let low: number = 26;
	export let high: number = 51;
	export let optimum: number = 90;
	export let striped: boolean;
	export let animated: boolean;
	export let progress: boolean;
</script>

<style lang="scss">
	@import '@spectre-org/spectre-css/src/meters';

	.meter {
		span {
			display: block;
			height: 100%;
			position: relative;
			overflow: hidden;
			border-radius: 0.1rem;
			-webkit-transition: width 0.5s;
			transition: width 0.5s;

			&.error {
				background-color: $error-color;
			}
			&.warning {
				background-color: $warning-color;
			}
			&.success {
				background-color: $success-color;
			}

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
		appearance: meter;
		&::-webkit-meter-bar {
			background: none;
			height: 1em;
			border: 0;
		}
		&::-webkit-meter-suboptimum-value,
		&::-webkit-meter-optimum-value,
		&::-webkit-meter-even-less-good-value {
			-webkit-transition: width 0.5s;
			transition: width 0.5s;
		}
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
					-webkit-animation: 1s linear infinite stripes;
					animation: 1s linear infinite stripes;
				}
				&::-webkit-meter-bar {
					-webkit-animation: 1s linear infinite stripes;
					animation: 1s linear infinite stripes;
				}
				&::-webkit-meter-suboptimum-value,
				&::-webkit-meter-optimum-value,
				&::-webkit-meter-even-less-good-value {
					-webkit-animation: 1s linear infinite stripes;
					animation: 1s linear infinite stripes;
				}
			}
		}
		@keyframes stripes {
			to {
				background-position-x: 1em;
			}
		}
	}
</style>
