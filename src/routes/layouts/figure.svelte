<figure class="figure {offset}">
	<slot name="img">
		<img
			class="img-responsive"
			class:img-fit-contain={contain}
			class:img-fit-cover={cover}
			{...$$restProps}
		/>
	</slot>
	{#if $$slots.default}
		<figcaption class="figure-caption text-{align}"><slot /></figcaption>
	{/if}
</figure>

<script lang="ts" context="module">
	import type { Offset } from '$lib/types/position';
	type Align = '' | 'left' | 'center' | 'right';
	export type { Offset, Align };
</script>

<script lang="ts">
	export let offset: Offset = '';
	export let contain: boolean = false;
	export let cover: boolean = false;
	export let align: Align = 'center';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/media';
	}
</style>
