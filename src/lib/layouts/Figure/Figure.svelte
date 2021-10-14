<figure class="figure {offset}">
	<slot>
		<img
			class="img-responsive"
			class:img-fit-contain={contain}
			class:img-fit-cover={cover}
			{src}
			{alt}
		/>
	</slot>
	{#if caption}
		<figcaption class="figure-caption text-{align}">{caption}</figcaption>
	{/if}
</figure>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';
	type Align = '' | 'left' | 'center' | 'right';
	export type { Offset, Align };
</script>

<script lang="ts">
	export let offset: Offset = '';
	export let contain: boolean = false;
	export let cover: boolean = false;
	export let src: string = '';
	export let alt: string = '';
	export let caption: string = '';
	export let align: Align = 'center';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/media';
	}
</style>
