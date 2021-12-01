<div {...$$restProps} class="dropdown" class:active class:dropdown-right={right}>
	<div class="dropdown-toggle">
		<slot />
	</div>
	<div class="menu">
		<slot name="content" />
	</div>
</div>

<svelte:body on:click|capture={() => (active &&= false)} />

<script lang="ts">
	export let active: boolean = false;
	export let right: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/menus';
		@import 'spectre.css/src/dropdowns';
		@import 'spectre.css/src/animations';
	}
	.dropdown-toggle {
		display: contents;
	}
</style>
