<Container>
	<slot />
</Container>

<script lang="ts" context="module">
	import { Container } from '$lib';
</script>

<style lang="scss" global>
	@import 'code';
	@import 'spectre.css/src/codes';
	@import 'spectre.css/src/icons';
	.off-canvas-content {
		h2 {
			padding-top: $unit-4 !important;
			&[id] {
				padding-top: $unit-12 !important;
			}
		}
	}
</style>
