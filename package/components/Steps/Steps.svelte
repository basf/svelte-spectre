<ul {...$$restProps} class="step">
	{#each steps as { href, label, tooltip }, i}
		<li class="step-item" class:active={active === i + 1}>
			<a
				{href}
				class:tooltip
				data-tooltip={tooltip}
				on:click|preventDefault={() => (active = i + 1)}>{label}</a
			>
		</li>
	{/each}
</ul>

<script context="module"></script>

<script>
	export let steps = [];
	export let active = 1;
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

	:global(.spectre) .step {
		display: flex;
		flex-wrap: nowrap;
		list-style: none;
		margin: 0.2rem 0;
		width: 100%;
	}
	:global(.spectre) .step .step-item {
		flex: 1 1 0;
		margin-top: 0;
		min-height: 1rem;
		text-align: center;
		position: relative;
	}
	:global(.spectre) .step .step-item:not(:first-child)::before {
		background: #5755d9;
		content: '';
		height: 2px;
		left: -50%;
		position: absolute;
		top: 9px;
		width: 100%;
	}
	:global(.spectre) .step .step-item a {
		color: #5755d9;
		display: inline-block;
		padding: 20px 10px 0;
		text-decoration: none;
	}
	:global(.spectre) .step .step-item a::before {
		background: #5755d9;
		border: 0.1rem solid #fff;
		border-radius: 50%;
		content: '';
		display: block;
		height: 0.6rem;
		left: 50%;
		position: absolute;
		top: 0.2rem;
		transform: translateX(-50%);
		width: 0.6rem;
		z-index: 1;
	}
	:global(.spectre) .step .step-item.active a::before {
		background: #fff;
		border: 0.1rem solid #5755d9;
	}
	:global(.spectre) .step .step-item.active ~ .step-item::before {
		background: #dadee4;
	}
	:global(.spectre) .step .step-item.active ~ .step-item a {
		color: #bcc3ce;
	}
	:global(.spectre) .step .step-item.active ~ .step-item a::before {
		background: #dadee4;
	}
</style>
