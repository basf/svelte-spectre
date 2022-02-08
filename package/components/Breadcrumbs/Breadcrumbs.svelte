<ul {...$$restProps} class="breadcrumb">
	{#each links as link}
		<li class="breadcrumb-item">
			<a href={link.href} class:tooltip={link.tooltip} data-tooltip={link.tooltip}>
				{link.title}
			</a>
		</li>
	{/each}
</ul>

<script context="module"></script>

<script>
	export let links;
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

	.breadcrumb {
		list-style: none;
		margin: 0.2rem 0;
		padding: 0.2rem 0;
	}
	.breadcrumb .breadcrumb-item {
		color: #66758c;
		display: inline-block;
		margin: 0;
		padding: 0.2rem 0;
	}
	.breadcrumb .breadcrumb-item:not(:last-child) {
		margin-right: 0.2rem;
	}
	.breadcrumb .breadcrumb-item:not(:last-child) a {
		color: #66758c;
	}
	.breadcrumb .breadcrumb-item:not(:first-child)::before {
		color: #66758c;
		content: '/';
		padding-right: 0.4rem;
	}
</style>
