<span {...$$restProps} class="label label-{color}" class:label-rounded={rounded}>
	<slot />
</span>

<script context="module"></script>

<script>
	export let color = 'initial';
	export let rounded = false;
</script>

<style>
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
</style>
