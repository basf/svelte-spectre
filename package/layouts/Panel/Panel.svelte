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
	.bg-darked {
		background: #252b33 !important;
		color: #fff;
	}

	.bg-secondary-darked {
		background: #343a51 !important;
		color: #fff;
	}

	.text-darked {
		color: #f2f2f2 !important;
	}

	a.text-darked:focus,
	a.text-darked:hover {
		color: #e6e6e6;
	}
	a.text-darked:visited {
		color: white;
	}

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
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .panel {
			border-color: #303742;
		}
	}
	:global(.spectre) .panel [color-scheme='dark'] {
		border-color: #303742;
	}
</style>
