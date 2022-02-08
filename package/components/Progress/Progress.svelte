<progress
	{...$$restProps}
	class="progress {color && `text-${color}`}"
	class:progress-invert={invert}
	{value}
	{max}
/>

<script context="module"></script>

<script>
	export let color = 'light';
	export let invert = false;
	export let value;
	export let max = 0;
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

	:global(.spectre) .progress {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #eef0f3;
		border: 0;
		border-radius: 0.1rem;
		color: #5755d9;
		height: 0.2rem;
		position: relative;
		width: 100%;
	}
	:global(.spectre) .progress::-webkit-progress-bar {
		background: transparent;
		border-radius: 0.1rem;
	}
	:global(.spectre) .progress::-webkit-progress-value {
		background: #5755d9;
		border-radius: 0.1rem;
	}
	:global(.spectre) .progress::-moz-progress-bar {
		background: #5755d9;
		border-radius: 0.1rem;
	}
	:global(.spectre) .progress:indeterminate {
		-webkit-animation: progress-indeterminate 1.5s linear infinite;
		animation: progress-indeterminate 1.5s linear infinite;
		background: #eef0f3 linear-gradient(to right, #5755d9 30%, #eef0f3 30%) top left/150% 150%
			no-repeat;
	}
	:global(.spectre) .progress:indeterminate::-moz-progress-bar {
		background: transparent;
	}
	@-webkit-keyframes progress-indeterminate {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
	@keyframes progress-indeterminate {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
	:global(.spectre) .progress {
		--progress-color: currentColor;
	}
	:global(.spectre) .progress::-webkit-progress-bar {
		background: transparent;
	}
	:global(.spectre) .progress::-webkit-progress-value {
		background: var(--progress-color, #5755d9);
	}
	:global(.spectre) .progress::-moz-progress-bar {
		background: var(--progress-color, #5755d9);
	}
	:global(.spectre) .progress.progress-invert {
		transform: scaleX(-1);
	}
	:global(.spectre) .progress:indeterminate {
		background: #eef0f3
			linear-gradient(to right, var(--progress-color, #5755d9) 30%, #eef0f3 30%) top left/150%
			150% no-repeat;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .progress {
			background: #303742;
		}
		:global(.spectre) .progress:indeterminate {
			background: #303742
				linear-gradient(to right, var(--progress-color, #5755d9) 30%, #303742 30%) top
				left/150% 150% no-repeat;
		}
	}
	:global(.spectre) .progress [color-scheme='dark'] {
		background: #303742;
	}
	:global(.spectre) .progress [color-scheme='dark']:indeterminate {
		background: #303742
			linear-gradient(to right, var(--progress-color, #5755d9) 30%, #303742 30%) top left/150%
			150% no-repeat;
	}
</style>
