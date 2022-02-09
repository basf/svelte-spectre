<svelte:window bind:innerWidth={viewportWidth} />

<div {...$$restProps} class="off-canvas" class:off-canvas-sidebar-show={show}>
	{#if !extclose}
		<a
			class="off-canvas-toggle btn btn-primary btn-action"
			href="#_"
			on:click|preventDefault={() => close('Left')}
		>
			<i class="icon icon-menu" />
		</a>
	{/if}

	{#if !right}
		<div class="off-canvas-sidebar p-2" class:active={openLeft}>
			<!-- {#if !show}
				<button
					href="#_"
					class="btn btn-clear p-absolute mr--1"
					aria-label="Close"
					role="button"
					on:click={() => close('Both')}
				/>
			{/if} -->
			<slot name="sidebarLeft"><small>off-screen sidebarLeft</small></slot>
		</div>
	{/if}

	{#if (openLeft || openRight) && !show}
		<a
			class="off-canvas-overlay"
			href="#_"
			class:z-300={openLeft || openRight}
			on:click|preventDefault={() => close('Both')}
			transition:fade
		/>
	{/if}

	<div class="off-canvas-content">
		<slot>off-screen content</slot>
	</div>

	{#if (right || both) && $$slots.sidebarRight}
		<div
			class="off-canvas-sidebar p-2"
			class:active={openRight}
			class:off-canvas-sidebar-right={right || both}
		>
			<!-- {#if !show}
				<button
					href="#_"
					class="btn btn-clear p-absolute mr--1"
					aria-label="Close"
					role="button"
					on:click={() => close('Both')}
				/>
			{/if} -->
			<slot name="sidebarRight" />
		</div>

		{#if !extclose}
			<a
				class="off-canvas-toggle btn btn-primary btn-action"
				href="#_"
				on:click|preventDefault={() => close('Right')}
			>
				<i class="icon icon-menu" />
			</a>
		{/if}
	{/if}
</div>

<script context="module" lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<script lang="ts">
	export let openLeft: boolean = false;
	export let openRight: boolean = false;
	export let show: boolean = false;
	export let extclose: boolean = false;
	export let right: boolean = false;
	export let both: boolean = false;
	export let breakpoint: string | number = 960;

	const media = {
		xs: 480,
		sm: 600,
		md: 840,
		lg: 960,
		xl: 1280,
		xxl: 1281,
	};
	const close = (side: string) => {
		switch (side) {
			case 'Left':
				openLeft = !openLeft;
				break;
			case 'Right':
				openRight = !openRight;
				break;
			case 'Both':
				openRight = openRight && !openRight;
				openLeft = openLeft && !openLeft;
				break;
			default:
				break;
		}
	};
	let viewportWidth = 0;

	$: show = viewportWidth >= media[breakpoint];
	$: openLeft = show ? false : openLeft;
	$: openRight = show ? false : openRight;
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
				min-width: 12rem;
				max-width: 100%;
				padding: 0;
			}
			.off-canvas-sidebar {
				min-width: 12rem;
				max-width: 18rem;
				height: 100vh;
				z-index: $zindex-4;
				&:empty {
					display: none;
				}
				.btn-clear {
					top: 1rem;
					right: 1rem;
				}
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
