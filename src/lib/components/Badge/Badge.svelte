<span {...$$restProps} class="label label-{color}" class:label-rounded={rounded}>
	<slot />
</span>

<script lang="ts" context="module">
	import type { Color } from '../../types/text';
</script>

<script lang="ts">
	export let color: Color = 'initial';
	export let rounded: boolean = false;
</script>

<style lang="scss">
	@import 'spectre.css/src/labels';
	:global(.spectre) {
		.label {
			font-size: 0.7rem;
			line-height: inherit;
			padding: 0.05rem 0.4rem 0.1rem;
			&.label-rounded {
				padding-left: 0.5rem;
				padding-right: 0.5rem;
			}
			@media (prefers-color-scheme: dark) {
				&.label-default,
				&.label-initial {
					@include label-variant($dark-text, $dark-color);
				}
				&.label-secondary {
					@include label-variant($primary-color, $dark-secondary);
				}
			}

			[color-scheme='dark'] {
				&.label-default,
				&.label-initial {
					@include label-variant($dark-text, $dark-color);
				}
				&.label-secondary {
					@include label-variant($primary-color, $dark-secondary);
				}
			}
		}
	}
</style>
