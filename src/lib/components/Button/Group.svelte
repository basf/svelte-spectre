<div class:btn-group-block={block} class:inline class="btn-group">
	<slot />
</div>

<script lang="ts">
	export let block: boolean = false;
	export let inline: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/buttons';

		.btn-group {
			display: flex;
			justify-content: space-between;

			&.inline {
				display: inline-flex;
			}
		}
	}
</style>
