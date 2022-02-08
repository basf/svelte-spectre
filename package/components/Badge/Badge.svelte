<span {...$$restProps} class="label label-{color}" class:label-rounded={rounded}>
	<slot />
</span>

<script context="module"></script>

<script>
	export let color = 'initial';
	export let rounded = false;
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

	.label {
		border-radius: 0.1rem;
		line-height: 1.25;
		padding: 0.1rem 0.2rem;
		background: #eef0f3;
		color: #455060;
		display: inline-block;
	}
	.label.label-rounded {
		border-radius: 5rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
	}
	.label.label-primary {
		background: #5755d9;
		color: #fff;
	}
	.label.label-secondary {
		background: #f1f1fc;
		color: #5755d9;
	}
	.label.label-success {
		background: #32b643;
		color: #fff;
	}
	.label.label-warning {
		background: #ffb700;
		color: #fff;
	}
	.label.label-error {
		background: #e85600;
		color: #fff;
	}

	:global(.spectre) .label {
		font-size: 0.7rem;
		line-height: inherit;
		padding: 0.05rem 0.4rem 0.1rem;
	}
	:global(.spectre) .label.label-rounded {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .label.label-default,
		:global(.spectre) .label.label-initial {
			background: #303742;
			color: #f2f2f2;
		}
		:global(.spectre) .label.label-secondary {
			background: #343a51;
			color: #5755d9;
		}
	}
	:global(.spectre) .label [color-scheme='dark'].label-default,
	:global(.spectre) .label [color-scheme='dark'].label-initial {
		background: #303742;
		color: #f2f2f2;
	}
	:global(.spectre) .label [color-scheme='dark'].label-secondary {
		background: #343a51;
		color: #5755d9;
	}
</style>
