<div {...$$restProps} class="empty">
	{#if $$slots.icon}
		<div class="empty-icon">
			<slot name="icon" />
		</div>
	{/if}
	{#if $$slots.title}
		<div class="empty-title">
			<slot name="title" />
		</div>
	{/if}
	{#if $$slots.subtitle}
		<div class="empty-subtitle">
			<slot name="subtitle" />
		</div>
	{/if}
	{#if $$slots.action}
		<div class="empty-action">
			<slot name="action" />
		</div>
	{/if}
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

	:global(.spectre) .empty {
		background: #f7f8f9;
		border-radius: 0.1rem;
		color: #66758c;
		text-align: center;
		padding: 3.2rem 1.6rem;
	}
	:global(.spectre) .empty .empty-icon {
		margin-bottom: 0.8rem;
	}
	:global(.spectre) .empty .empty-title,
	:global(.spectre) .empty .empty-subtitle {
		margin: 0.4rem auto;
	}
	:global(.spectre) .empty .empty-action {
		margin-top: 0.8rem;
	}
	:global(.spectre) .empty > :global(:nth-child(n + 2) > *) {
		margin: 0;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .empty {
			background: #303742;
		}
	}
	:global(.spectre) .empty [color-scheme='dark'] {
		background: #252b33;
	}
</style>
