<div {...$$restProps} class:btn-group-block={block} class="btn-group">
	<slot />
</div>

<script lang="ts">
	export let block: boolean = false;
</script>

<style lang="scss" global>
	:global(.spectre) {
		@import 'spectre.css/src/buttons';
	}
</style>
