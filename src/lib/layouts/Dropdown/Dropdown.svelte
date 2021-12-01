<div {...$$restProps} class="dropdown" class:active class:dropdown-right={right}>
	<div class="dropdown-toggle" on:click|stopPropagation>
		<slot />
	</div>
	<div class="menu">
		<slot name="content" />
	</div>
</div>

<svelte:body on:click={() => (active = false)} />

<script lang="ts">
	export let active: boolean = false;
	export let right: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/dropdowns';
	}
	.dropdown-toggle {
		display: contents;
	}
	.menu {
		@include shadow-variant(0.05rem);
		background: $bg-color-light;
		border-radius: $border-radius;
		margin: 0;
		min-width: $control-width-xs;
		padding: $unit-2;
		transform: translateY($layout-spacing-sm);
		z-index: $zindex-3;
	}
	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-$unit-8);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
