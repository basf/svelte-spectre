<form {...$$restProps} class:form-horizontal={horizontal} on:submit|preventDefault>
	<slot />
</form>

<script lang="ts">
	export let horizontal: boolean;
</script>

<style lang="scss">
	@import '@spectre-org/spectre-css/src/forms';

	form {
		padding: $layout-spacing 0;
	}
	:global(.spectre) {
		.form-horizontal {
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
