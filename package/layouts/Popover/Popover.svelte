<div
	{...$$restProps}
	class="popover popover-{side}"
	class:popover-transparent={transparent}
	class:popover-shadowed={shadowed}
>
	<slot />
	<div class="popover-container">
		<slot name="content" />
	</div>
</div>

<script context="module"></script>

<script>
	export let side = 'top';
	export let transparent = false;
	export let shadowed = false;
</script>

<style>
	:global(.spectre) .popover {
		display: inline-block;
		position: relative;
	}
	:global(.spectre) .popover .popover-container {
		left: 50%;
		opacity: 0;
		padding: 0.4rem;
		position: absolute;
		top: 0;
		transform: translate(-50%, -50%) scale(0);
		transition: transform 0.2s;
		width: 320px;
		z-index: 300;
	}
	:global(.spectre) .popover *:focus + .popover-container,
	:global(.spectre) .popover:hover .popover-container {
		display: block;
		opacity: 1;
		transform: translate(-50%, -100%) scale(1);
	}
	:global(.spectre) .popover.popover-right .popover-container {
		left: 100%;
		top: 50%;
	}
	:global(.spectre) .popover.popover-right *:focus + .popover-container,
	:global(.spectre) .popover.popover-right:hover .popover-container {
		transform: translate(0, -50%) scale(1);
	}
	:global(.spectre) .popover.popover-bottom .popover-container {
		left: 50%;
		top: 100%;
	}
	:global(.spectre) .popover.popover-bottom *:focus + .popover-container,
	:global(.spectre) .popover.popover-bottom:hover .popover-container {
		transform: translate(-50%, 0) scale(1);
	}
	:global(.spectre) .popover.popover-left .popover-container {
		left: 0;
		top: 50%;
	}
	:global(.spectre) .popover.popover-left *:focus + .popover-container,
	:global(.spectre) .popover.popover-left:hover .popover-container {
		transform: translate(-100%, -50%) scale(1);
	}
	:global(.spectre) .popover .card {
		box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
		border: 0;
	}

	.popover-container {
		z-index: 500 !important;
	}
	:not(.popover-transparent) .popover-container {
		background: #fff;
	}
	.popover-shadowed .popover-container {
		box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
	}
</style>
