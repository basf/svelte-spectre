<Container>
	<slot />
</Container>

<script lang="ts" context="module">
	import { Container } from '$lib';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	// export let api;
</script>

<style lang="scss" global>
	@import '_code';
	.off-canvas-content {
		h2 {
			margin-top: $unit-9 !important;
		}
	}
</style>
