<div {...$$restProps} class="spectre">
	<slot />
</div>

<style lang="scss">
	.spectre {
		display: contents;
		box-sizing: border-box;
		overflow-x: hidden;
		font-size: $font-size;
		font-family: $body-font-family;
		line-height: 1.5;
		text-rendering: optimizeLegibility;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		background: $body-bg;
		color: $body-font-color;

		:global {
			@import 'spectre.css/src/base';
			@import 'spectre.css/src/normalize';
			@import 'spectre.css/src/typography';
			@import 'spectre.css/src/layout';
			@import 'spectre.css/src/animations';
			@import 'spectre.css/src/utilities';
			@import 'spectre.css/src/media';
			@import 'spectre.css/src/badges';
			@import 'spectre.css/src/tooltips';

			.mx-auto {
				margin-left: auto;
				margin-right: auto;
			}
			.mx--1 {
				margin-left: -$unit-1;
				margin-right: -$unit-1;
			}
			.mx--2 {
				margin-left: -$unit-2;
				margin-right: -$unit-2;
			}
			.my-auto {
				margin-top: auto;
				margin-bottom: auto;
			}
			.my--1 {
				margin-top: -$unit-1;
				margin-bottom: -$unit-1;
			}
			.my--2 {
				margin-top: -$unit-2;
				margin-bottom: -$unit-2;
			}
			.ml-auto {
				margin-left: auto;
			}
			.ml--1 {
				margin-left: -$unit-1;
			}
			.ml--2 {
				margin-left: -$unit-2;
			}
			.mr-auto {
				margin-right: auto;
			}
			.mr--1 {
				margin-right: -$unit-1;
			}
			.mr--2 {
				margin-right: -$unit-2;
			}
			.mt-auto {
				margin-top: auto;
			}
			.mt--1 {
				margin-top: -$unit-1;
			}
			.mt--2 {
				margin-top: -$unit-2;
			}
			.mb-auto {
				margin-bottom: auto;
			}
			.mb--1 {
				margin-bottom: -$unit-1;
			}
			.mb--2 {
				margin-bottom: -$unit-2;
			}
			.m-auto {
				margin: auto;
			}
			.overlay {
				position: fixed;
				inset: 0;
				cursor: default;
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: center;
				background: rgba($bg-color, 0.75);
				color: $error-color;
			}

			// @for $i from 3 through 9 {
			// 	$unit: '$unit-';
			// 	$index: $unit + $i;
			// 	@include margin-variant($i, $index);
			// 	@include padding-variant($i, $index);
			// }
			@include margin-variant(3, $unit-3);
			@include margin-variant(4, $unit-4);
			@include margin-variant(5, $unit-5);
			@include margin-variant(6, $unit-6);
			@include margin-variant(7, $unit-7);
			@include margin-variant(8, $unit-8);
			@include margin-variant(9, $unit-9);
			@include padding-variant(3, $unit-3);
			@include padding-variant(4, $unit-4);
			@include padding-variant(5, $unit-5);
			@include padding-variant(6, $unit-6);
			@include padding-variant(7, $unit-7);
			@include padding-variant(8, $unit-8);
			@include padding-variant(9, $unit-9);
		}
	}
</style>
