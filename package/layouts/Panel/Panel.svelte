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

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;
		}

		.form-input,
		.form-select {
			background-color: #252b33 !important;
			border-color: #66758c !important;
			color: #f2f2f2 !important;
		}

		.form-checkbox .form-icon,
		.form-radio .form-icon,
		.form-switch .form-icon {
			border-color: #66758c !important;
			background: #252b33 !important;
		}

		input:active + .form-icon {
			background: #343a51 !important;
		}
		input:checked + .form-icon {
			background: #5755d9 !important;
		}

		.badge[data-badge]::after,
		.badge:not([data-badge])::after {
			box-shadow: 0 0 0 0.1rem #252b33 !important;
			color: #f2f2f2 !important;
		}

		code {
			background: #afa2b1;
			color: #413843;
		}

		.code {
			color: #bcc3ce;
		}
		.code::before {
			color: #bcc3ce;
		}
		.code code {
			background: #303742;
		}
	}
	[color-scheme='dark'] :root {
		color-scheme: dark;
	}
	[color-scheme='dark'] .form-input,
	[color-scheme='dark'] .form-checkbox .form-icon,
	[color-scheme='dark'] .form-select {
		background-color: #252b33 !important;
		border-color: #66758c !important;
		color: #f2f2f2 !important;
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
			border-color: #bcc3ce;
		}
	}
	:global(.spectre) .panel [color-scheme='dark'] {
		border-color: #bcc3ce;
	}
</style>
