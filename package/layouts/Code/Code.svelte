{#if action}
	<pre {...$$restProps} class="code" data-lang={lang}><code use:action={options} on:change
			><slot /></code
		></pre>
{:else}
	<pre {...$$restProps} class="code" data-lang={lang}><code><slot /></code></pre>
{/if}

<script>
	export let lang = '';
	export let action;
	export let options;
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

	:global(.spectre) code {
		border-radius: 0.1rem;
		line-height: 1.25;
		padding: 0.1rem 0.2rem;
		background: #fcf2f2;
		color: #d73e48;
		font-size: 85%;
	}
	:global(.spectre) .code {
		border-radius: 0.1rem;
		color: #3b4351;
		position: relative;
	}
	:global(.spectre) .code::before {
		color: #bcc3ce;
		content: attr(data-lang);
		font-size: 0.7rem;
		position: absolute;
		right: 0.4rem;
		top: 0.1rem;
	}
	:global(.spectre) .code code {
		background: #f7f8f9;
		color: inherit;
		display: block;
		line-height: 1.5;
		overflow-x: auto;
		padding: 1rem;
		width: 100%;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) code code {
			background: #413843;
			color: #d73e48;
		}
		:global(.spectre) .code {
			color: #bcc3ce;
		}
		:global(.spectre) .code::before {
			color: #bcc3ce;
		}
		:global(.spectre) .code code {
			background: #303742;
		}
	}
	:global(.spectre) [color-scheme='dark'] code code {
		background: #413843;
		color: #d73e48;
	}
	:global(.spectre) [color-scheme='dark'] .code {
		color: #bcc3ce;
	}
	:global(.spectre) [color-scheme='dark'] .code::before {
		color: #bcc3ce;
	}
	:global(.spectre) [color-scheme='dark'] .code code {
		background: #303742;
	}
</style>
