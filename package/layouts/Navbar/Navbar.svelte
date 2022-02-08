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

	:global(.spectre) .navbar {
		align-items: stretch;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	:global(.spectre) .navbar .navbar-section {
		align-items: center;
		display: flex;
		flex: 1 0 0;
	}
	:global(.spectre) .navbar .navbar-section:not(:first-child):last-child {
		justify-content: flex-end;
	}
	:global(.spectre) .navbar .navbar-center {
		align-items: center;
		display: flex;
		flex: 0 0 auto;
	}
	:global(.spectre) .navbar .navbar-brand {
		font-size: 0.9rem;
		text-decoration: none;
	}
</style>
