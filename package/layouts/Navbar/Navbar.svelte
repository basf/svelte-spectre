<div {...$$restProps} class="navbar">
	<div class="navbar-section">
		<slot name="left" />
	</div>
	<div class="navbar-center">
		<slot name="center" />
	</div>
	<div class="navbar-section">
		<slot name="right" />
	</div>
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

	:global(.spectre) .navbar {
		align-items: stretch;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	:global(.spectre) .navbar .navbar-section {
		align-items: center;
		display: flex;
		flex: 1 0 0;
	}
	:global(.spectre) .navbar .navbar-section:not(:first-child):last-child {
		justify-content: flex-end;
	}
	:global(.spectre) .navbar .navbar-center {
		align-items: center;
		display: flex;
		flex: 0 0 auto;
	}
	:global(.spectre) .navbar .navbar-brand {
		font-size: 0.9rem;
		text-decoration: none;
	}
</style>
