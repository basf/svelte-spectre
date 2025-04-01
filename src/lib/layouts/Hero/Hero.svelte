<div {...$$restProps} class="hero {size && `hero-${size}`} {bg && `bg-${bg}`}">
	<div class="hero-body" class:text-center={center}>
		<slot>
			<h1>Hero title</h1>
			<p>This is a hero example</p>
		</slot>
	</div>
</div>

<script lang="ts" context="module">
	import type { Size } from '../../types/size';
	import type { Color } from '../../types/bg';

	export type { Size, Color };
</script>

<script lang="ts">
	export let size: Size = 'xs';
	export let bg: Color = '';
	export let center: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import '@spectre-org/spectre-css/src/hero';
		.hero-xs {
			padding-bottom: 1rem;
			padding-top: 1rem;
		}
	}
</style>
