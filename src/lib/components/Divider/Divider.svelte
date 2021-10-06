<div
	class:divider={align === 'horizontal'}
	class:text-center={align === 'horizontal'}
	class:divider-vert={align === 'vertical'}
	data-content={text || undefined}
/>

<script lang="ts" context="module">
	type Align = 'vertical' | 'horizontal';
	export type { Align };
</script>

<script lang="ts">
	export let align: Align = 'horizontal';
	export let text: string = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/utilities/divider';
	}
</style>
