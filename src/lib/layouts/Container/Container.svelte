<div {...$$restProps} class="container grid-{size}">
	<slot />
</div>

<script context="module" lang="ts">
	import type { Size } from '../../types/size';

	export type { Size };
</script>

<script lang="ts">
	export let size: Size = 'md';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/layout';
	}
</style>
