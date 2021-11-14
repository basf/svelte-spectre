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

	{#if !right}
		<div class="off-canvas-sidebar p-2" class:active={open} bind:this={sidebar}>
			<slot name="sidebar"><small>off-screen sidebar</small></slot>
		</div>
	{/if}

	{#if open && !show}
		<a
			class="off-canvas-overlay"
			href="#"
			class:z-300={open}
			on:click|preventDefault={close}
			transition:fade
		/>
	{/if}

	<div class="off-canvas-content">
		<slot>off-screen content</slot>
	</div>

	{#if right}
		<div
			class="off-canvas-sidebar p-2"
			class:active={open}
			class:off-canvas-sidebar-right={right}
			bind:this={sidebar}
		>
			<slot name="sidebar"><small>off-screen sidebar</small></slot>
		</div>
	{/if}
</div>

<script context="module" lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { Size } from '../../types/size';
	import type { Offset } from '../../types/position';

	export type { Size, Offset };
</script>

<script lang="ts">
	export let open: boolean = false;
	export let show: boolean = false;
	export let extclose: boolean = false;
	export let right: boolean = false;
	export let breakpoint: string | number = 960;
	export let size: Size = 'md';
	export let offset: Offset = '';

	const close = () => (open = !open);

	let ww = 0,
		sidebar = null;
	$: show = ww >= breakpoint;
	$: open = show ? false : open;

	$: console.log(open, show);
</script>

<style lang="scss">
	@import 'spectre.css/src/off-canvas';
	@import 'spectre.css/src/buttons';
	@import 'spectre.css/src/icons';

	:global(.spectre) {
		.z-300 {
			z-index: $zindex-3;
		}
		.off-canvas {
			.off-canvas-content {
				padding: 0;
				width: calc(100% - var(--sidebar, 0));
			}
			.off-canvas-sidebar {
				height: 100vh;
				z-index: $zindex-4;
				&.off-canvas-sidebar-right {
					left: auto;
					right: 0;
					transform: translateX(100%);
					&.active {
						transform: translateX(0);
					}
				}
				&.active + .off-canvas-overlay {
					z-index: $zindex-3;
				}
			}
			.off-canvas-overlay {
				display: block;
			}
			&.off-canvas-sidebar-show {
				.off-canvas-toggle {
					display: none;
				}

				.off-canvas-sidebar {
					flex: 0 0 auto;
					position: sticky;
					transform: none;
					// transition: none;
				}

				.off-canvas-overlay {
					display: none !important;
				}
			}
		}
	}
</style>
