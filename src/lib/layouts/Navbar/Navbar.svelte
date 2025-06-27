<div {...$$restProps} class="navbar">
	<div class="navbar-section">
		<slot name="left" />
	</div>
	<div class="navbar-center">
		<slot name="center" />
	</div>
	<div class="navbar-section">
		<slot name="right" />
	</div>
</div>

<style lang="scss">
	:global(.spectre) {
		@import '@spectre-org/spectre-css/src/navbar';
	}
</style>
