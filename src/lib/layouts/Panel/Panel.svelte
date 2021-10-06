<div class="panel">
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
		@import 'spectre.css/src/panels';
	}
</style>
