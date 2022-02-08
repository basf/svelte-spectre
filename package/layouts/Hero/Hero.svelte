<div {...$$restProps} class="hero {size && `hero-${size}`} {bg && `bg-${bg}`}">
	<div class="hero-body" class:text-center={center}>
		<slot>
			<h1>Hero title</h1>
			<p>This is a hero example</p>
		</slot>
	</div>
</div>

<script context="module"></script>

<script>
	export let size = 'xs';
	export let bg = '';
	export let center = false;
</script>

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

	:global(.spectre) .hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 4rem;
		padding-top: 4rem;
	}
	:global(.spectre) .hero.hero-sm {
		padding-bottom: 2rem;
		padding-top: 2rem;
	}
	:global(.spectre) .hero.hero-lg {
		padding-bottom: 8rem;
		padding-top: 8rem;
	}
	:global(.spectre) .hero .hero-body {
		padding: 0.4rem;
	}
	:global(.spectre) .hero-xs {
		padding-bottom: 1rem;
		padding-top: 1rem;
	}
</style>
