<hr
	{...$$restProps}
	class:divider={align.includes('horizontal')}
	class:text-center={align.includes('center')}
	class:text-right={align.includes('right')}
	class:divider-vert={align === 'vertical'}
	class:divider-empty={empty}
	class="text-{color}"
	data-content={text}
/>

<script context="module"></script>

<script>
	export let align = 'horizontal';
	export let text = '';
	export let empty = false;
	export let color = 'gray';
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

	:global(.spectre) .divider,
	:global(.spectre) .divider-vert {
		display: block;
		position: relative;
	}
	:global(.spectre) .divider[data-content]::after,
	:global(.spectre) .divider-vert[data-content]::after {
		background: #fff;
		color: #bcc3ce;
		content: attr(data-content);
		display: inline-block;
		font-size: 0.7rem;
		padding: 0 0.4rem;
		transform: translateY(-0.65rem);
	}
	:global(.spectre) .divider {
		border-top: 0.05rem solid #f1f3f5;
		height: 0.05rem;
		margin: 0.4rem 0;
	}
	:global(.spectre) .divider[data-content] {
		margin: 0.8rem 0;
	}
	:global(.spectre) .divider-vert {
		display: block;
		padding: 0.8rem;
	}
	:global(.spectre) .divider-vert::before {
		border-left: 0.05rem solid #dadee4;
		bottom: 0.4rem;
		content: '';
		display: block;
		left: 50%;
		position: absolute;
		top: 0.4rem;
		transform: translateX(-50%);
	}
	:global(.spectre) .divider-vert[data-content]::after {
		left: 50%;
		padding: 0.2rem 0;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.spectre) hr {
		border: 0;
		color: transparent;
	}
	:global(.spectre) hr.divider[data-content]::after,
	:global(.spectre) hr.divider-vert[data-content]::after {
		color: currentColor;
	}
	:global(.spectre) hr.divider {
		width: 100%;
	}
	:global(.spectre) hr.divider-vert {
		height: auto !important;
	}
	:global(.spectre) hr.divider-empty {
		border: 0;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .divider[data-content]::after,
		:global(.spectre) .divider-vert[data-content]::after {
			background: #252b33 !important;
		}
		:global(.spectre) .divider {
			border-color: #303742 !important;
		}
		:global(.spectre) .divider-vert::before {
			border-color: #303742 !important;
		}
	}
</style>
