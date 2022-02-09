<div {...$$restProps} class="spectre">
	<slot />
</div>

<style lang="scss">
	@media (prefers-color-scheme: dark) {
		:global(:root) {
			color-scheme: dark !important;
		}
		:global(body) {
			background: $dark-background;
			color: $dark-text;
		}
	}
	[color-scheme='dark'] {
		:global(:root) {
			color-scheme: dark !important;
		}
		:global(body) {
			background: $dark-background;
			color: $dark-text;
		}
	}

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
			@include bg-color-variant('.bg-light', $light-color);

			@media (prefers-color-scheme: dark) {
				background: $dark-background;
				color: $dark-text;

				//FORMS
				.form-input,
				.form-select {
					background-color: $dark-background !important;
					// border: 0.05rem solid $gray-color-dark;
					color: $dark-text !important;
				}
				.form-checkbox .form-icon,
				.form-radio .form-icon,
				.form-switch .form-icon {
					// border-color: $gray-color-dark;
					background: $dark-background !important;
				}
				input:active + .form-icon {
					background: $dark-secondary !important;
				}

				input:checked + .form-icon {
					background: $primary-color !important;
				}

				// BADGE
				.badge {
					&[data-badge],
					&:not([data-badge]) {
						&::after {
							box-shadow: 0 0 0 0.1rem $dark-background !important;
							color: $dark-text !important;
						}
					}
				}
				.label {
					&.label-default,
					&.label-initial {
						@include label-variant($dark-text, $dark-color);
					}
					&.label-secondary {
						@include label-variant($primary-color, $dark-secondary);
					}
				}

				// BUTTON
				.btn {
					&.btn-default {
						@include label-variant($primary-color, $dark-background);
						&:hover,
						&:focus {
							background: $dark-secondary;
						}
						&:active {
							background: $primary-color;
							color: $light-color;
						}
					}
					&.btn-secondary {
						@include label-variant($primary-color, $dark-secondary);
						&:hover,
						&:focus {
							background: $dark-background;
						}
						&:active {
							background: $primary-color;
							color: $light-color;
						}
					}
				}

				// CHIP
				.chip {
					background-color: $dark-color !important;
					color: $dark-text;
				}

				// PROGRESS
				.progress {
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

				// CARD
				.card {
					background: $dark-background !important;
					border-color: $dark-color !important;

					&.card-shadowed {
						box-shadow: 0 0.25rem 1rem rgba($dark-shadow, 0.45) !important;
					}
				}

				// CODE
				code {
					background: $dark-code;
					color: $code-color;
				}
				.code {
					color: $gray-color;
					&::before {
						color: $gray-color;
					}
					code {
						background: $dark-color !important;
						color: $gray-color !important;
					}
				}

				// MENU
				.menu {
					background: $dark-background !important;
					&:not(.menu-nav) {
						box-shadow: 0 0.05rem 0.2rem $dark-shadow;
					}
					.menu-item {
						& > a {
							&:focus,
							&:hover,
							&:active,
							&.active {
								background: $dark-secondary !important;
							}
						}
						&:focus,
						&:hover,
						&:active,
						&.active {
							background: $dark-secondary !important;
						}
					}
				}

				// DIVIDER
				.divider,
				.divider-vert {
					&[data-content]::after {
						background: $dark-background !important;
					}
				}
				.divider {
					border-color: $dark-color !important;
				}
				.divider-vert {
					&::before {
						border-color: $dark-color !important;
					}
				}

				// TYPO
				blockquote {
					border-left-color: $gray-color-dark !important;
				}

				// AVATAR
				.avatar {
					.avatar-icon {
						background: $dark-background;
					}
					.avatar-presence {
						box-shadow: 0 0 0 0.1rem $dark-background;
					}
				}

				// EMPTY
				.empty {
					background: $dark-color !important;
				}

				// MODAL
				.modal {
					&:target,
					&.active {
						.modal-overlay {
							background: $dark-overlay !important;
						}
					}
					.modal-container {
						box-shadow: 0 0.2rem (0.2rem + 0.05rem) * 2 rgba($dark-shadow, 0.3) !important;
						background: $dark-background !important;
					}
				}

				// PANEL
				.panel {
					border-color: $dark-color;
				}

				// POPOVER
				.popover-container {
					background: $dark-background !important;
				}
				.popover-shadowed .popover-container {
					box-shadow: 0 0.2rem (0.2rem + 0.05rem) * 2 rgba($dark-shadow, 0.3);
				}

				// SIDEBAR
				.off-canvas {
					.off-canvas-sidebar {
						background: $dark-color !important;
					}
					.off-canvas-overlay {
						background: $dark-overlay !important;
					}
				}
			}

			[color-scheme='dark'] {
				background: $dark-background;
				color: $dark-text;

				//FORMS
				.form-input,
				.form-select {
					background-color: $dark-background !important;
					// border: 0.05rem solid $gray-color-dark;
					color: $dark-text !important;
				}
				.form-checkbox .form-icon,
				.form-radio .form-icon,
				.form-switch .form-icon {
					// border-color: $gray-color-dark;
					background: $dark-background !important;
				}
				input:active + .form-icon {
					background: $dark-secondary !important;
				}

				input:checked + .form-icon {
					background: $primary-color !important;
				}

				// BADGE
				.badge {
					&[data-badge],
					&:not([data-badge]) {
						&::after {
							box-shadow: 0 0 0 0.1rem $dark-background !important;
							color: $dark-text !important;
						}
					}
				}
				.label {
					&.label-default,
					&.label-initial {
						@include label-variant($dark-text, $dark-color);
					}
					&.label-secondary {
						@include label-variant($primary-color, $dark-secondary);
					}
				}

				// BUTTON
				.btn {
					&.btn-default {
						@include label-variant($primary-color, $dark-background);
						&:hover,
						&:focus {
							background: $dark-secondary;
						}
						&:active {
							background: $primary-color;
							color: $light-color;
						}
					}
					&.btn-secondary {
						@include label-variant($primary-color, $dark-secondary);
						&:hover,
						&:focus {
							background: $dark-background;
						}
						&:active {
							background: $primary-color;
							color: $light-color;
						}
					}
				}

				// CHIP
				.chip {
					background-color: $dark-color !important;
					color: $dark-text;
				}

				// PROGRESS
				.progress {
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

				// CARD
				.card {
					background: $dark-background !important;
					border-color: $dark-color !important;

					&.card-shadowed {
						box-shadow: 0 0.25rem 1rem rgba($dark-shadow, 0.45) !important;
					}
				}

				// CODE
				code {
					background: $dark-code;
					color: $code-color;
				}
				.code {
					color: $gray-color;
					&::before {
						color: $gray-color;
					}
					code {
						background: $dark-color !important;
						color: $gray-color !important;
					}
				}

				// MENU
				.menu {
					background: $dark-background !important;
					&:not(.menu-nav) {
						box-shadow: 0 0.05rem 0.2rem $dark-shadow;
					}
					.menu-item {
						& > a {
							&:focus,
							&:hover,
							&:active,
							&.active {
								background: $dark-secondary !important;
							}
						}
						&:focus,
						&:hover,
						&:active,
						&.active {
							background: $dark-secondary !important;
						}
					}
				}

				// DIVIDER
				.divider,
				.divider-vert {
					&[data-content]::after {
						background: $dark-background !important;
					}
				}
				.divider {
					border-color: $dark-color !important;
				}
				.divider-vert {
					&::before {
						border-color: $dark-color !important;
					}
				}

				// TYPO
				blockquote {
					border-left-color: $gray-color-dark !important;
				}

				// AVATAR
				.avatar {
					.avatar-icon {
						background: $dark-background;
					}
					.avatar-presence {
						box-shadow: 0 0 0 0.1rem $dark-background;
					}
				}

				// EMPTY
				.empty {
					background: $dark-color !important;
				}

				// MODAL
				.modal {
					&:target,
					&.active {
						.modal-overlay {
							background: $dark-overlay !important;
						}
					}
					.modal-container {
						box-shadow: 0 0.2rem (0.2rem + 0.05rem) * 2 rgba($dark-shadow, 0.3) !important;
						background: $dark-background !important;
					}
				}

				// PANEL
				.panel {
					border-color: $dark-color;
				}

				// POPOVER
				.popover-container {
					background: $dark-background !important;
				}
				.popover-shadowed .popover-container {
					box-shadow: 0 0.2rem (0.2rem + 0.05rem) * 2 rgba($dark-shadow, 0.3);
				}

				// SIDEBAR
				.off-canvas {
					.off-canvas-sidebar {
						background: $dark-color !important;
					}
					.off-canvas-overlay {
						background: $dark-overlay !important;
					}
				}
			}
		}
	}
</style>
