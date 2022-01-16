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

<style>
	:global(.spectre) .panel {
		border: 0.05rem solid #dadee4;
		border-radius: 0.1rem;
		display: flex;
		flex-direction: column;
	}
	:global(.spectre) .panel .panel-header,
	:global(.spectre) .panel .panel-footer {
		flex: 0 0 auto;
		padding: 0.8rem;
	}
	:global(.spectre) .panel .panel-nav {
		flex: 0 0 auto;
	}
	:global(.spectre) .panel .panel-body {
		flex: 1 1 auto;
		overflow-y: auto;
		padding: 0 0.8rem;
	}
</style>
