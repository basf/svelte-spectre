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
