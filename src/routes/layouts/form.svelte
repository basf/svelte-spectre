<form {...$$restProps} class:form-horizontal={horizontal} on:submit|preventDefault>
	<slot />
</form>

<script lang="ts">
	export let horizontal: boolean;
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';

	:global(.spectre) {
		.form-horizontal {
			padding: $layout-spacing 0;

			:global(.form-group) {
				display: flex;
				flex-wrap: wrap;

				&:not(:last-child) {
					margin-bottom: $layout-spacing;
				}
			}
		}
	}
</style>
