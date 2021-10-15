<div class="spectre">
	<slot />
</div>

<style lang="scss">
	.spectre {
		display: contents;
		box-sizing: border-box;
		overflow-x: hidden;
		font-size: $font-size;
		font-family: $body-font-family;
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
			.m-auto {
				margin: auto;
			}
		}
	}
</style>
