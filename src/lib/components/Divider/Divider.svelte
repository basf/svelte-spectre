<hr
	{...$$restProps}
	class:divider={align.includes('horizontal')}
	class:text-center={align.includes('center')}
	class:text-right={align.includes('right')}
	class:divider-vert={align === 'vertical'}
	class:divider-empty={empty}
	class="text-{color}"
	data-content={text || undefined}
/>

<script lang="ts" context="module">
	import type { Color } from '../../types/text';

	type Align = 'vertical' | 'horizontal' | 'center' | 'left' | 'right';
	export type { Align, Color };
</script>

<script lang="ts">
	export let align: Align = 'horizontal';
	export let text: string = '';
	export let empty: boolean = false;
	export let color: Color = 'gray';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/utilities/divider';
		hr {
			border: 0;
			color: transparent;
			&.divider,
			&.divider-vert {
				&[data-content]::after {
					color: currentColor;
					background: transparent;
				}
			}
			&.divider {
				width: 100%;
			}
			&.divider-vert {
				height: auto !important;
			}
			&.divider-empty {
				border: 0;
			}
		}
	}
</style>
