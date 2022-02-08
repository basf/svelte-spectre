<div {...$$restProps} class="tile " class:tile-centered={centered}>
	{#if $$slots.icon}
		<div class="tile-icon">
			<slot name="icon" />
		</div>
	{/if}
	<div class="tile-content">
		{#if $$slots.title}
			<div class="tile-title">
				<slot name="title" />
			</div>
		{/if}
		{#if $$slots.subtitle}
			<div class="tile-subtitle">
				<slot name="subtitle" />
			</div>
		{/if}
		<slot />
	</div>
	{#if $$slots.action}
		<div class="tile-action">
			<slot name="action" />
		</div>
	{/if}
</div>

<script>
	export let centered = true;
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

	:global(.spectre) .tile {
		align-content: space-between;
		align-items: flex-start;
		display: flex;
	}
	:global(.spectre) .tile .tile-icon,
	:global(.spectre) .tile .tile-action {
		flex: 0 0 auto;
	}
	:global(.spectre) .tile .tile-content {
		flex: 1 1 auto;
	}
	:global(.spectre) .tile .tile-content:not(:first-child) {
		padding-left: 0.4rem;
	}
	:global(.spectre) .tile .tile-content:not(:last-child) {
		padding-right: 0.4rem;
	}
	:global(.spectre) .tile .tile-title,
	:global(.spectre) .tile .tile-subtitle {
		line-height: 1.2rem;
	}
	:global(.spectre) .tile.tile-centered {
		align-items: center;
	}
	:global(.spectre) .tile.tile-centered .tile-content {
		overflow: hidden;
	}
	:global(.spectre) .tile.tile-centered .tile-title,
	:global(.spectre) .tile.tile-centered .tile-subtitle {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 0;
	}
</style>
