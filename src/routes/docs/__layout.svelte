<Container>
	<slot />
</Container>

<script lang="ts" context="module">
	import { Container } from '$lib';
</script>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<style lang="scss" global>
	@import '_code';
	@import 'spectre.css/src/codes';
	@import 'spectre.css/src/icons';
	.off-canvas-content {
		h2 {
			margin-top: $unit-9 !important;
		}
	}
</style>
