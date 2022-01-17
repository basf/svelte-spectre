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

<script context="module">
	import { fade } from 'svelte/transition';
</script>

<script>
	export let openLeft = false;
	export let openRight = false;
	export let show = false;
	export let extclose = false;
	export let right = false;
	export let both = false;
	export let breakpoint = 960;
	const media = {
		xs: 480,
		sm: 600,
		md: 840,
		lg: 960,
		xl: 1280,
		xxl: 1281,
	};
	const close = (side) => {
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

<style>
	@charset "UTF-8";
	.off-canvas {
		display: flex;
		flex-flow: nowrap;
		height: 100%;
		position: relative;
		width: 100%;
	}
	.off-canvas .off-canvas-toggle {
		display: block;
		position: absolute;
		top: 0.4rem;
		transition: none;
		z-index: 1;
		left: 0.4rem;
	}
	.off-canvas .off-canvas-sidebar {
		background: #f7f8f9;
		bottom: 0;
		min-width: 10rem;
		overflow-y: auto;
		position: fixed;
		top: 0;
		transition: transform 0.25s;
		z-index: 200;
		left: 0;
		transform: translateX(-100%);
	}
	.off-canvas .off-canvas-content {
		flex: 1 1 auto;
		height: 100%;
		padding: 0.4rem 0.4rem 0.4rem 4rem;
	}
	.off-canvas .off-canvas-overlay {
		background: rgba(48, 55, 66, 0.1);
		border-color: transparent;
		border-radius: 0;
		bottom: 0;
		display: none;
		height: 100%;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		width: 100%;
	}
	.off-canvas .off-canvas-sidebar:target,
	.off-canvas .off-canvas-sidebar.active {
		transform: translateX(0);
	}
	.off-canvas .off-canvas-sidebar:target ~ .off-canvas-overlay,
	.off-canvas .off-canvas-sidebar.active ~ .off-canvas-overlay {
		display: block;
		z-index: 100;
	}

	@media (min-width: 960px) {
		.off-canvas.off-canvas-sidebar-show .off-canvas-toggle {
			display: none;
		}
		.off-canvas.off-canvas-sidebar-show .off-canvas-sidebar {
			flex: 0 0 auto;
			position: relative;
			transform: none;
		}
		.off-canvas.off-canvas-sidebar-show .off-canvas-overlay {
			display: none !important;
		}
	}
	.btn {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #fff;
		border: 0.05rem solid #5755d9;
		border-radius: 0.1rem;
		color: #5755d9;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		height: 1.8rem;
		line-height: 1.2rem;
		outline: none;
		padding: 0.25rem 0.4rem;
		text-align: center;
		text-decoration: none;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		vertical-align: middle;
		white-space: nowrap;
	}
	.btn:focus {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
	}
	.btn:focus,
	.btn:hover {
		background: #f1f1fc;
		border-color: #4b48d6;
		text-decoration: none;
	}
	.btn:active,
	.btn.active {
		background: #4b48d6;
		border-color: #3634d2;
		color: #fff;
		text-decoration: none;
	}
	.btn:active.loading::after,
	.btn.active.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	.btn[disabled],
	.btn:disabled,
	.btn.disabled {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
	}
	.btn.btn-primary {
		background: #5755d9;
		border-color: #4b48d6;
		color: #fff;
	}
	.btn.btn-primary:focus,
	.btn.btn-primary:hover {
		background: #4240d4;
		border-color: #3634d2;
		color: #fff;
	}
	.btn.btn-primary:active,
	.btn.btn-primary.active {
		background: #3a38d2;
		border-color: #302ecd;
		color: #fff;
	}
	.btn.btn-primary.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	.btn.btn-success {
		background: #32b643;
		border-color: #2faa3f;
		color: #fff;
	}
	.btn.btn-success:focus {
		box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);
	}
	.btn.btn-success:focus,
	.btn.btn-success:hover {
		background: #30ae40;
		border-color: #2da23c;
		color: #fff;
	}
	.btn.btn-success:active,
	.btn.btn-success.active {
		background: #2a9a39;
		border-color: #278e34;
		color: #fff;
	}
	.btn.btn-success.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	.btn.btn-error {
		background: #e85600;
		border-color: #d95000;
		color: #fff;
	}
	.btn.btn-error:focus {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
	}
	.btn.btn-error:focus,
	.btn.btn-error:hover {
		background: #de5200;
		border-color: #cf4d00;
		color: #fff;
	}
	.btn.btn-error:active,
	.btn.btn-error.active {
		background: #c44900;
		border-color: #b54300;
		color: #fff;
	}
	.btn.btn-error.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	.btn.btn-link {
		background: transparent;
		border-color: transparent;
		color: #5755d9;
	}
	.btn.btn-link:focus,
	.btn.btn-link:hover,
	.btn.btn-link:active,
	.btn.btn-link.active {
		color: #302ecd;
	}
	.btn.btn-sm {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 0.3rem;
	}
	.btn.btn-lg {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 0.6rem;
	}
	.btn.btn-block {
		display: block;
		width: 100%;
	}
	.btn.btn-action {
		width: 1.8rem;
		padding-left: 0;
		padding-right: 0;
	}
	.btn.btn-action.btn-sm {
		width: 1.4rem;
	}
	.btn.btn-action.btn-lg {
		width: 2rem;
	}
	.btn.btn-clear {
		background: transparent;
		border: 0;
		color: currentColor;
		height: 1rem;
		line-height: 0.8rem;
		margin-left: 0.2rem;
		margin-right: -2px;
		opacity: 1;
		padding: 0.1rem;
		text-decoration: none;
		width: 1rem;
	}
	.btn.btn-clear:focus,
	.btn.btn-clear:hover {
		background: rgba(247, 248, 249, 0.5);
		opacity: 0.95;
	}
	.btn.btn-clear::before {
		content: '✕';
	}

	.btn-group {
		display: inline-flex;
		flex-wrap: wrap;
	}
	.btn-group .btn {
		flex: 1 0 auto;
	}
	.btn-group .btn:first-child:not(:last-child) {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
	.btn-group .btn:not(:first-child):not(:last-child) {
		border-radius: 0;
		margin-left: -0.05rem;
	}
	.btn-group .btn:last-child:not(:first-child) {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		margin-left: -0.05rem;
	}
	.btn-group .btn:focus,
	.btn-group .btn:hover,
	.btn-group .btn:active,
	.btn-group .btn.active {
		z-index: 1;
	}
	.btn-group.btn-group-block {
		display: flex;
	}
	.btn-group.btn-group-block .btn {
		flex: 1 0 0;
	}

	.icon {
		box-sizing: border-box;
		display: inline-block;
		font-size: inherit;
		font-style: normal;
		height: 1em;
		position: relative;
		text-indent: -9999px;
		vertical-align: middle;
		width: 1em;
	}
	.icon::before,
	.icon::after {
		content: '';
		display: block;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.icon.icon-2x {
		font-size: 1.6rem;
	}
	.icon.icon-3x {
		font-size: 2.4rem;
	}
	.icon.icon-4x {
		font-size: 3.2rem;
	}

	.accordion .icon,
	.btn .icon,
	.toast .icon,
	.menu .icon {
		vertical-align: -10%;
	}

	.btn-lg .icon {
		vertical-align: -15%;
	}

	.icon-arrow-down::before,
	.icon-arrow-left::before,
	.icon-arrow-right::before,
	.icon-arrow-up::before,
	.icon-downward::before,
	.icon-back::before,
	.icon-forward::before,
	.icon-upward::before {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-right: 0;
		height: 0.65em;
		width: 0.65em;
	}

	.icon-arrow-down::before {
		transform: translate(-50%, -75%) rotate(225deg);
	}

	.icon-arrow-left::before {
		transform: translate(-25%, -50%) rotate(-45deg);
	}

	.icon-arrow-right::before {
		transform: translate(-75%, -50%) rotate(135deg);
	}

	.icon-arrow-up::before {
		transform: translate(-50%, -25%) rotate(45deg);
	}

	.icon-back::after,
	.icon-forward::after {
		background: currentColor;
		height: 0.1rem;
		width: 0.8em;
	}

	.icon-downward::after,
	.icon-upward::after {
		background: currentColor;
		height: 0.8em;
		width: 0.1rem;
	}

	.icon-back::after {
		left: 55%;
	}
	.icon-back::before {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	.icon-downward::after {
		top: 45%;
	}
	.icon-downward::before {
		transform: translate(-50%, -50%) rotate(-135deg);
	}

	.icon-forward::after {
		left: 45%;
	}
	.icon-forward::before {
		transform: translate(-50%, -50%) rotate(135deg);
	}

	.icon-upward::after {
		top: 55%;
	}
	.icon-upward::before {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.icon-caret::before {
		border-top: 0.3em solid currentColor;
		border-right: 0.3em solid transparent;
		border-left: 0.3em solid transparent;
		height: 0;
		transform: translate(-50%, -25%);
		width: 0;
	}

	.icon-menu::before {
		background: currentColor;
		box-shadow: 0 -0.35em, 0 0.35em;
		height: 0.1rem;
		width: 100%;
	}

	.icon-apps::before {
		background: currentColor;
		box-shadow: -0.35em -0.35em, -0.35em 0, -0.35em 0.35em, 0 -0.35em, 0 0.35em, 0.35em -0.35em,
			0.35em 0, 0.35em 0.35em;
		height: 3px;
		width: 3px;
	}

	.icon-resize-horiz::before,
	.icon-resize-horiz::after,
	.icon-resize-vert::before,
	.icon-resize-vert::after {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-right: 0;
		height: 0.45em;
		width: 0.45em;
	}
	.icon-resize-horiz::before,
	.icon-resize-vert::before {
		transform: translate(-50%, -90%) rotate(45deg);
	}
	.icon-resize-horiz::after,
	.icon-resize-vert::after {
		transform: translate(-50%, -10%) rotate(225deg);
	}

	.icon-resize-horiz::before {
		transform: translate(-90%, -50%) rotate(-45deg);
	}
	.icon-resize-horiz::after {
		transform: translate(-10%, -50%) rotate(135deg);
	}

	.icon-more-horiz::before,
	.icon-more-vert::before {
		background: currentColor;
		box-shadow: -0.4em 0, 0.4em 0;
		border-radius: 50%;
		height: 3px;
		width: 3px;
	}

	.icon-more-vert::before {
		box-shadow: 0 -0.4em, 0 0.4em;
	}

	.icon-plus::before,
	.icon-minus::before,
	.icon-cross::before {
		background: currentColor;
		height: 0.1rem;
		width: 100%;
	}

	.icon-plus::after,
	.icon-cross::after {
		background: currentColor;
		height: 100%;
		width: 0.1rem;
	}

	.icon-cross::before {
		width: 100%;
	}
	.icon-cross::after {
		height: 100%;
	}
	.icon-cross::before,
	.icon-cross::after {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.icon-check::before {
		border: 0.1rem solid currentColor;
		border-right: 0;
		border-top: 0;
		height: 0.5em;
		width: 0.9em;
		transform: translate(-50%, -75%) rotate(-45deg);
	}

	.icon-stop {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
	}
	.icon-stop::before {
		background: currentColor;
		height: 0.1rem;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 1em;
	}

	.icon-shutdown {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
		border-top-color: transparent;
	}
	.icon-shutdown::before {
		background: currentColor;
		content: '';
		height: 0.5em;
		top: 0.1em;
		width: 0.1rem;
	}

	.icon-refresh::before {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
		border-right-color: transparent;
		height: 1em;
		width: 1em;
	}
	.icon-refresh::after {
		border: 0.2em solid currentColor;
		border-top-color: transparent;
		border-left-color: transparent;
		height: 0;
		left: 80%;
		top: 20%;
		width: 0;
	}

	.icon-search::before {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
		height: 0.75em;
		left: 5%;
		top: 5%;
		transform: translate(0, 0) rotate(45deg);
		width: 0.75em;
	}
	.icon-search::after {
		background: currentColor;
		height: 0.1rem;
		left: 80%;
		top: 80%;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 0.4em;
	}

	.icon-edit::before {
		border: 0.1rem solid currentColor;
		height: 0.4em;
		transform: translate(-40%, -60%) rotate(-45deg);
		width: 0.85em;
	}
	.icon-edit::after {
		border: 0.15em solid currentColor;
		border-top-color: transparent;
		border-right-color: transparent;
		height: 0;
		left: 5%;
		top: 95%;
		transform: translate(0, -100%);
		width: 0;
	}

	.icon-delete::before {
		border: 0.1rem solid currentColor;
		border-bottom-left-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
		border-top: 0;
		height: 0.75em;
		top: 60%;
		width: 0.75em;
	}
	.icon-delete::after {
		background: currentColor;
		box-shadow: -0.25em 0.2em, 0.25em 0.2em;
		height: 0.1rem;
		top: 0.05rem;
		width: 0.5em;
	}

	.icon-share {
		border: 0.1rem solid currentColor;
		border-radius: 0.1rem;
		border-right: 0;
		border-top: 0;
	}
	.icon-share::before {
		border: 0.1rem solid currentColor;
		border-left: 0;
		border-top: 0;
		height: 0.4em;
		left: 100%;
		top: 0.25em;
		transform: translate(-125%, -50%) rotate(-45deg);
		width: 0.4em;
	}
	.icon-share::after {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-right: 0;
		border-radius: 75% 0;
		height: 0.5em;
		width: 0.6em;
	}

	.icon-flag::before {
		background: currentColor;
		height: 1em;
		left: 15%;
		width: 0.1rem;
	}
	.icon-flag::after {
		border: 0.1rem solid currentColor;
		border-bottom-right-radius: 0.1rem;
		border-left: 0;
		border-top-right-radius: 0.1rem;
		height: 0.65em;
		top: 35%;
		left: 60%;
		width: 0.8em;
	}

	.icon-bookmark::before {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-top-left-radius: 0.1rem;
		border-top-right-radius: 0.1rem;
		height: 0.9em;
		width: 0.8em;
	}
	.icon-bookmark::after {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-left: 0;
		border-radius: 0.1rem;
		height: 0.5em;
		transform: translate(-50%, 35%) rotate(-45deg) skew(15deg, 15deg);
		width: 0.5em;
	}

	.icon-download,
	.icon-upload {
		border-bottom: 0.1rem solid currentColor;
	}
	.icon-download::before,
	.icon-upload::before {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-right: 0;
		height: 0.5em;
		width: 0.5em;
		transform: translate(-50%, -60%) rotate(-135deg);
	}
	.icon-download::after,
	.icon-upload::after {
		background: currentColor;
		height: 0.6em;
		top: 40%;
		width: 0.1rem;
	}

	.icon-upload::before {
		transform: translate(-50%, -60%) rotate(45deg);
	}
	.icon-upload::after {
		top: 50%;
	}

	.icon-copy::before {
		border: 0.1rem solid currentColor;
		border-radius: 0.1rem;
		border-right: 0;
		border-bottom: 0;
		height: 0.8em;
		left: 40%;
		top: 35%;
		width: 0.8em;
	}
	.icon-copy::after {
		border: 0.1rem solid currentColor;
		border-radius: 0.1rem;
		height: 0.8em;
		left: 60%;
		top: 60%;
		width: 0.8em;
	}

	.icon-time {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
	}
	.icon-time::before {
		background: currentColor;
		height: 0.4em;
		transform: translate(-50%, -75%);
		width: 0.1rem;
	}
	.icon-time::after {
		background: currentColor;
		height: 0.3em;
		transform: translate(-50%, -75%) rotate(90deg);
		transform-origin: 50% 90%;
		width: 0.1rem;
	}

	.icon-mail::before {
		border: 0.1rem solid currentColor;
		border-radius: 0.1rem;
		height: 0.8em;
		width: 1em;
	}
	.icon-mail::after {
		border: 0.1rem solid currentColor;
		border-right: 0;
		border-top: 0;
		height: 0.5em;
		transform: translate(-50%, -90%) rotate(-45deg) skew(10deg, 10deg);
		width: 0.5em;
	}

	.icon-people::before {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
		height: 0.45em;
		top: 25%;
		width: 0.45em;
	}
	.icon-people::after {
		border: 0.1rem solid currentColor;
		border-radius: 50% 50% 0 0;
		height: 0.4em;
		top: 75%;
		width: 0.9em;
	}

	.icon-message {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-radius: 0.1rem;
		border-right: 0;
	}
	.icon-message::before {
		border: 0.1rem solid currentColor;
		border-bottom-right-radius: 0.1rem;
		border-left: 0;
		border-top: 0;
		height: 0.8em;
		left: 65%;
		top: 40%;
		width: 0.7em;
	}
	.icon-message::after {
		background: currentColor;
		border-radius: 0.1rem;
		height: 0.3em;
		left: 10%;
		top: 100%;
		transform: translate(0, -90%) rotate(45deg);
		width: 0.1rem;
	}

	.icon-photo {
		border: 0.1rem solid currentColor;
		border-radius: 0.1rem;
	}
	.icon-photo::before {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
		height: 0.25em;
		left: 35%;
		top: 35%;
		width: 0.25em;
	}
	.icon-photo::after {
		border: 0.1rem solid currentColor;
		border-bottom: 0;
		border-left: 0;
		height: 0.5em;
		left: 60%;
		transform: translate(-50%, 25%) rotate(-45deg);
		width: 0.5em;
	}

	.icon-link::before,
	.icon-link::after {
		border: 0.1rem solid currentColor;
		border-radius: 5em 0 0 5em;
		border-right: 0;
		height: 0.5em;
		width: 0.75em;
	}
	.icon-link::before {
		transform: translate(-70%, -45%) rotate(-45deg);
	}
	.icon-link::after {
		transform: translate(-30%, -55%) rotate(135deg);
	}

	.icon-location::before {
		border: 0.1rem solid currentColor;
		border-radius: 50% 50% 50% 0;
		height: 0.8em;
		transform: translate(-50%, -60%) rotate(-45deg);
		width: 0.8em;
	}
	.icon-location::after {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
		height: 0.2em;
		transform: translate(-50%, -80%);
		width: 0.2em;
	}

	.icon-emoji {
		border: 0.1rem solid currentColor;
		border-radius: 50%;
	}
	.icon-emoji::before {
		border-radius: 50%;
		box-shadow: -0.17em -0.1em, 0.17em -0.1em;
		height: 0.15em;
		width: 0.15em;
	}
	.icon-emoji::after {
		border: 0.1rem solid currentColor;
		border-bottom-color: transparent;
		border-radius: 50%;
		border-right-color: transparent;
		height: 0.5em;
		transform: translate(-50%, -40%) rotate(-135deg);
		width: 0.5em;
	}

	:global(.spectre) .z-300 {
		z-index: 300;
	}
	:global(.spectre) .off-canvas .off-canvas-content {
		min-width: 12rem;
		max-width: 100%;
		padding: 0;
	}
	:global(.spectre) .off-canvas .off-canvas-sidebar {
		min-width: 12rem;
		max-width: 18rem;
		height: 100vh;
		z-index: 400;
	}
	:global(.spectre) .off-canvas .off-canvas-sidebar:empty {
		display: none;
	}
	:global(.spectre) .off-canvas .off-canvas-sidebar .btn-clear {
		top: 1rem;
		right: 1rem;
	}
	:global(.spectre) .off-canvas .off-canvas-sidebar.off-canvas-sidebar-right {
		left: auto;
		right: 0;
		transform: translateX(100%);
	}
	:global(.spectre) .off-canvas .off-canvas-sidebar.off-canvas-sidebar-right.active {
		transform: translateX(0);
	}
	:global(.spectre) .off-canvas .off-canvas-sidebar.active + .off-canvas-overlay {
		z-index: 300;
	}
	:global(.spectre) .off-canvas .off-canvas-overlay {
		display: block;
	}
	:global(.spectre) .off-canvas.off-canvas-sidebar-show .off-canvas-toggle {
		display: none;
	}
	:global(.spectre) .off-canvas.off-canvas-sidebar-show .off-canvas-sidebar {
		position: -webkit-sticky;
		position: sticky;
		transform: none;
	}
	:global(.spectre) .off-canvas.off-canvas-sidebar-show .off-canvas-overlay {
		display: none !important;
	}
</style>
