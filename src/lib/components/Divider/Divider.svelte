<div
	class:divider={align.includes('horizontal')}
	class:text-center={align.includes('center')}
	class:text-right={align.includes('right')}
	class:divider-vert={align === 'vertical'}
	class:divider-empty={empty}
	data-content={text || undefined}
/>

<script lang="ts" context="module">
	type Align = 'vertical' | 'horizontal' | 'center' | 'left' | 'right';
	export type { Align };
</script>

<script lang="ts">
	export let align: Align = 'horizontal';
	export let text: string = '';
	export let empty: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/utilities/divider';
		.divider.divider-empty {
			border: 0;
		}
	}
</style>
