<div {...$$restProps} class:btn-group-block={block} class="btn-group">
	<slot />
</div>

<script lang="ts">
	export let block: boolean = false;
	export let inline: boolean = false;
	export let spaced: boolean = false;
</script>

<style lang="scss" global>
	:global(.spectre) {
		@import 'spectre.css/src/buttons';
	}
</style>
