{#if href}
	<a
		{...$$restProps}
		{href}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:circle={shape === 'circle'}
		class:input-group-btn={input}
		class:loading
		class:active
		on:click
		on:dblclick
	>
		<slot>Text</slot>
	</a>
{:else}
	<button
		{...$$restProps}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:circle={shape === 'circle'}
		class:input-group-btn={input}
		class:loading
		class:active
		on:click
		on:dblclick
	>
		<slot>Text</slot>
	</button>
{/if}

<script lang="ts" context="module">
	import type { Size } from '../../types/size';

	type Variant = 'default' | 'primary' | 'secondary' | 'link' | 'success' | 'error';
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
	export let input: boolean = false;
	export let href: string = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/buttons';
	}
	.circle {
		border-radius: 50%;
	}
	.btn {
		position: relative !important;
		display: inline-flex !important;
		align-items: center !important;
		justify-content: center !important;
	}
	.btn.btn-xl {
		@extend .btn, .btn-lg;
		height: $unit-12 !important;
	}
	.btn.btn-action.btn-xl {
		width: $unit-12 !important;
	}
	.btn.btn-xxl {
		@extend .btn, .btn-lg;
		height: $unit-16 !important;
	}
	.btn.btn-action.btn-xxl {
		width: $unit-16 !important;
	}
	.btn.btn-xs {
		@extend .btn, .btn-sm;
		height: $unit-6 !important;
	}
	.btn.btn-action.btn-xs {
		width: $unit-6 !important;
	}
</style>
