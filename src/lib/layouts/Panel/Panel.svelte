<div {...$$restProps} class="panel">
	<div class="panel-header">
		<slot name="header" />
	</div>
	<div class="panel-nav">
		<slot name="nav" />
	</div>
	<div class="panel-body">
		<slot name="body" />
	</div>
	<div class="panel-footer">
		<slot name="footer" />
	</div>
</div>

<style lang="scss">
	:global(.spectre) {
		@import '@spectre-org/spectre-css/src/panels';
		.panel .panel-body {
			overflow-y: visible;
		}
		.panel .panel-nav {
			margin-left: 10px;
		}
	}
</style>
