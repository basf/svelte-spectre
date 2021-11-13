<svelte:window bind:innerWidth={ww} />

<div
	class="off-canvas"
	class:off-canvas-sidebar-show={show}
	style="--sidebar: {sidebar?.offsetWidth}px;"
>
	{#if !extclose}
		<a
			class="off-canvas-toggle btn btn-primary btn-action"
			href="#"
			on:click|preventDefault={close}
		>
			<i class="icon icon-menu" />
		</a>
	{/if}

	<div class="off-canvas-sidebar p-2" class:active={open} bind:this={sidebar}>
		<slot name="sidebar"><small>off-screen sidebar</small></slot>
	</div>

	<a class="off-canvas-overlay" href="#" on:click|preventDefault={close} />

	<div class="off-canvas-content">
		<slot>off-screen content</slot>
	</div>
</div>

<script context="module" lang="ts">
	import type { Size } from '../../types/size';
	import type { Offset } from '../../types/position';

	export type { Size, Offset };
</script>

<script lang="ts">
	export let open: boolean = false;
	export let show: boolean = false;
	export let extclose: boolean = false;
	export let breakpoint: string | number = 960;
	export let size: Size = 'md';
	export let offset: Offset = '';

	const close = () => (open = !open);

	let ww = 0,
		sidebar = null;
	$: show = ww >= breakpoint;
</script>

<style lang="scss">
	@import 'spectre.css/src/off-canvas';
	@import 'spectre.css/src/buttons';
	@import 'spectre.css/src/icons';

	:global(.spectre) {
		.off-canvas {
			.off-canvas-content {
				padding: 0;
				width: calc(100% - var(--sidebar, 0));
			}
			.off-canvas-sidebar {
				height: 100vh;
				z-index: $zindex-4;
				&.active + .off-canvas-overlay {
					z-index: $zindex-3;
				}
			}
			&.off-canvas-sidebar-show {
				.off-canvas-toggle {
					display: none;
				}

				.off-canvas-sidebar {
					flex: 0 0 auto;
					position: sticky;
					transform: none;
				}

				.off-canvas-overlay {
					display: none !important;
				}
			}
		}
	}
</style>
