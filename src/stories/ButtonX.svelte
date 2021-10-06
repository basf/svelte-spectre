{#if href}
	<a
		{...$$restProps}
		{href}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:circle={shape === 'circle'}
		class:loading
		class:active
		on:click
		on:dblclick
	>
		<slot name="iconRight" />
		<slot>Text</slot>
		<slot name="iconLeft" />
	</a>
{:else}
	<button
		{...$$restProps}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:circle={shape === 'circle'}
		class:loading
		class:active
		on:click
		on:dblclick
	>
		<slot name="iconRight" />
		<slot>Text</slot>
		<slot name="iconLeft" />
	</button>
{/if}

<script lang="ts" context="module">
	import type { Size } from '../lib/types/size';

	type Variant = 'default' | 'primary' | 'link' | 'success' | 'error';
	type Shape = 'square' | 'circle' | false;

	export type { Size, Variant, Shape };
</script>

<script lang="ts">
	export let variant: Variant = 'default';
	export let size: Size = 'md';
	export let shape: Shape = false;
	export let active: boolean = false;
	export let loading: boolean = false;
	export let block: boolean = false;
	export let href: string = '';
</script>

<style lang="scss">
	@import 'spectre.css/src/buttons';
	.circle {
		border-radius: 50%;
	}
	.btn.btn-xl {
		@extend .btn, .btn-lg;
		height: $unit-12;
	}
	.btn.btn-action.btn-xl {
		width: $unit-12;
	}
	.btn.btn-xs {
		@extend .btn, .btn-sm;
		height: $unit-5;
	}
	.btn.btn-action.btn-xs {
		width: $unit-5;
	}
</style>
