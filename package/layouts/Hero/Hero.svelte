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
