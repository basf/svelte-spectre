<div
	{...$$restProps}
	class:has-success={validity === 'success'}
	class:has-error={validity === 'error'}
	class="form-group"
>
	<slot />
</div>

<script lang="ts" context="module">
	import type { Validity } from '../../components/Input';
	export type { Validity };
</script>

<script lang="ts">
	export let horizontal: boolean = true;
	export let validity: Validity = false;
</script>

<style lang="scss">
	:global {
		@import 'spectre.css/src/forms';
	}

	// :global(.spectre) {
	// 	.form-group {
	// 		display: flex;
	// 		flex-wrap: wrap;

	// 		&:not(:last-child) {
	// 			margin-bottom: $layout-spacing;
	// 		}
	// 	}

	// 	.has-success {
	// 		.form-input-hint {
	// 			color: $success-color;
	// 		}
	// 		.form-input,
	// 		.form-select {
	// 			background: lighten($success-color, 53%);
	// 			border-color: $success-color;
	// 			&:focus {
	// 				@include control-shadow($success-color);
	// 			}
	// 		}
	// 	}
	// 	.has-error {
	// 		.form-input-hint {
	// 			color: $error-color;
	// 		}
	// 		.form-input,
	// 		.form-select {
	// 			background: lighten($error-color, 53%);
	// 			border-color: $error-color;
	// 			&:focus {
	// 				@include control-shadow($error-color);
	// 			}
	// 		}
	// 		.form-checkbox,
	// 		.form-radio,
	// 		.form-switch {
	// 			.form-icon {
	// 				border-color: $error-color;
	// 			}

	// 			input {
	// 				&:checked + .form-icon {
	// 					background: $error-color;
	// 					border-color: $error-color;
	// 				}

	// 				&:focus + .form-icon {
	// 					@include control-shadow($error-color);
	// 					border-color: $error-color;
	// 				}
	// 			}
	// 		}
	// 		.form-checkbox {
	// 			input {
	// 				&:indeterminate + .form-icon {
	// 					background: $error-color;
	// 					border-color: $error-color;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
</style>
