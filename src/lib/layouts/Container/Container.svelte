<div class="container grid-{size} {offset}">
	<slot />
</div>

<script context="module" lang="ts">
	import type { Size } from '../../types/size';
	import type { Offset } from '../../types/position';

	export type { Size, Offset };
</script>

<script lang="ts">
	export let size: Size = 'md';
	export let offset: Offset = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import url('spectre.css/src/layout');
	}
</style>
