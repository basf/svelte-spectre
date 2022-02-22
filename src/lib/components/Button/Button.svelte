{#if href}
	<a
		{...$$restProps}
		{href}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:s-circle={shape === 'circle'}
		class:input-group-btn={input}
		class:loading
		class:active
		class:tooltip={tooltip || tooltipLeft || tooltipRight || tooltipBottom}
		class:tooltip-left={tooltipLeft}
		class:tooltip-right={tooltipRight}
		class:tooltip-bottom={tooltipBottom}
		data-tooltip={tooltip || tooltipLeft || tooltipRight || tooltipBottom}
		on:click
		on:dblclick
		use:addBadge={badge}
	>
		<slot />
	</a>
{:else}
	<button
		{...$$restProps}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:s-circle={shape === 'circle'}
		class:input-group-btn={input}
		class:loading
		class:active
		class:tooltip={tooltip || tooltipLeft || tooltipRight || tooltipBottom}
		class:tooltip-left={tooltipLeft}
		class:tooltip-right={tooltipRight}
		class:tooltip-bottom={tooltipBottom}
		data-tooltip={tooltip || tooltipLeft || tooltipRight || tooltipBottom}
		on:click
		on:dblclick
		use:addBadge={badge}
	>
		<slot />
	</button>
{/if}

<script lang="ts" context="module">
	import type { Size } from '../../types/size';
	import { badge as addBadge } from '../../components/Badge';

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
	export let badge: any;
	export let tooltip: string;
	export let tooltipLeft: string;
	export let tooltipRight: string;
	export let tooltipBottom: string;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/buttons';
	}
	.btn {
		position: relative !important;
		display: inline-flex !important;
		align-items: center !important;
		justify-content: center !important;
		&.btn-xl {
			@extend .btn, .btn-lg;
			height: $unit-12 !important;
		}
		&.btn-xxl {
			@extend .btn, .btn-lg;
			height: $unit-16 !important;
		}
		&.btn-xs {
			@extend .btn, .btn-sm;
			height: $unit-6 !important;
		}
		&.btn-action {
			&.btn-xl {
				width: $unit-12 !important;
			}
			&.btn-xxl {
				width: $unit-16 !important;
			}
			&.btn-xs {
				width: $unit-6 !important;
			}
		}
	}
</style>
