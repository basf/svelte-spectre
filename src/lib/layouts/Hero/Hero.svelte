<div class="hero {size && `hero-${size}`} {bg && `bg-${bg}`} {offset}">
	<div class="hero-body">
		<slot>
			<h1>Hero title</h1>
			<p>This is a hero example</p>
		</slot>
	</div>
</div>

<script lang="ts" context="module">
	import type { Size } from '../../types/size';
	import type { Color } from '../../types/bg';
	import type { Offset } from '../../types/position';

	export type { Size, Color };
</script>

<script lang="ts">
	export let size: Size = 'xs';
	export let bg: Color = '';
	export let offset: Offset = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/hero';
	}
</style>
