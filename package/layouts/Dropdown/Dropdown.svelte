<div
	{...$$restProps}
	class="dropdown"
	class:active
	class:dropdown-center={align === 'center'}
	class:dropdown-right={align === 'right'}
>
	<div class="dropdown-toggle" on:click|stopPropagation tabindex="0">
		<slot />
	</div>
	<div class="menu">
		<slot name="content" />
	</div>
</div>

<svelte:body on:click={() => (active = false)} />

<script context="module"></script>

<script>
	export let active = false;
	export let align = 'left';
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

	:global(.spectre) .dropdown {
		display: inline-block;
		position: relative;
	}
	:global(.spectre) .dropdown .menu {
		-webkit-animation: slide-down 0.15s ease 1;
		animation: slide-down 0.15s ease 1;
		display: none;
		left: 0;
		max-height: 50vh;
		overflow-y: auto;
		position: absolute;
		top: 100%;
	}
	:global(.spectre) .dropdown.dropdown-right .menu {
		left: auto;
		right: 0;
	}
	:global(.spectre) .dropdown.active .menu,
	:global(.spectre) .dropdown .dropdown-toggle:focus + .menu,
	:global(.spectre) .dropdown .menu:hover {
		display: block;
	}
	:global(.spectre) .dropdown .btn-group .dropdown-toggle:nth-last-child(2) {
		border-bottom-right-radius: 0.1rem;
		border-top-right-radius: 0.1rem;
	}

	.dropdown .dropdown-toggle {
		display: contents;
	}
	.dropdown .menu {
		box-shadow: 0 0.05rem 0.2rem rgba(48, 55, 66, 0.3);
		background: #fff;
		border-radius: 0.1rem;
		margin: 0;
		min-width: 180px;
		padding: 0.4rem;
		z-index: 300;
	}
	@media (prefers-color-scheme: dark) {
		.dropdown .menu {
			background: #252b33;
			box-shadow: 0 0.25rem 1rem rgba(16, 18, 22, 0.45);
		}
	}
	.dropdown .menu [color-scheme='dark'] {
		background: #252b33;
		box-shadow: 0 0.25rem 1rem rgba(16, 18, 22, 0.45);
	}
	.dropdown.dropdown-center .menu {
		--x: -50%;
		--left: 50%;
		left: 50%;
		transform: translateX(-50%);
	}
	.dropdown.dropdown-right .menu {
		--right: 0;
	}

	@-webkit-keyframes slide-down {
		0% {
			opacity: 0;
			left: var(--left, auto);
			right: var(--right, auto);
			transform: translate(var(--x, 0), -1.6rem);
		}
		100% {
			opacity: 1;
			left: var(--left, auto);
			right: var(--right, auto);
			transform: translate(var(--x, 0), 0);
		}
	}

	@keyframes slide-down {
		0% {
			opacity: 0;
			left: var(--left, auto);
			right: var(--right, auto);
			transform: translate(var(--x, 0), -1.6rem);
		}
		100% {
			opacity: 1;
			left: var(--left, auto);
			right: var(--right, auto);
			transform: translate(var(--x, 0), 0);
		}
	}
</style>
