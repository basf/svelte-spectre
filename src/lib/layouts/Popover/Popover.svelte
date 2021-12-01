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

<script lang="ts" context="module">
	type Side = 'top' | 'right' | 'bottom' | 'left';
</script>

<script lang="ts">
	export let side: Side = 'top';
	export let transparent: boolean = false;
	export let shadowed: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/popovers';
	}
	.popover-container {
		:not(.popover-transparent) & {
			background: $light-color;
		}
		.popover-shadowed & {
			@include shadow-variant(0.2rem);
		}
	}
</style>
