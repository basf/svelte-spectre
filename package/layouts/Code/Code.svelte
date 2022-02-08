{#if action}
	<pre {...$$restProps} class="code" data-lang={lang}><code use:action={options} on:change
			><slot /></code
		></pre>
{:else}
	<pre {...$$restProps} class="code" data-lang={lang}><code><slot /></code></pre>
{/if}

<script>
	export let lang = '';
	export let action;
	export let options;
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

	:global(.spectre) code {
		border-radius: 0.1rem;
		line-height: 1.25;
		padding: 0.1rem 0.2rem;
		background: #fcf2f2;
		color: #d73e48;
		font-size: 85%;
	}
	:global(.spectre) .code {
		border-radius: 0.1rem;
		color: #3b4351;
		position: relative;
	}
	:global(.spectre) .code::before {
		color: #bcc3ce;
		content: attr(data-lang);
		font-size: 0.7rem;
		position: absolute;
		right: 0.4rem;
		top: 0.1rem;
	}
	:global(.spectre) .code code {
		background: #f7f8f9;
		color: inherit;
		display: block;
		line-height: 1.5;
		overflow-x: auto;
		padding: 1rem;
		width: 100%;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) code code {
			background: #413843;
			color: #d73e48;
		}
		:global(.spectre) .code {
			color: #bcc3ce;
		}
		:global(.spectre) .code::before {
			color: #bcc3ce;
		}
		:global(.spectre) .code code {
			background: #303742;
		}
	}
	:global(.spectre) [color-scheme='dark'] code code {
		background: #413843;
		color: #d73e48;
	}
	:global(.spectre) [color-scheme='dark'] .code {
		color: #bcc3ce;
	}
	:global(.spectre) [color-scheme='dark'] .code::before {
		color: #bcc3ce;
	}
	:global(.spectre) [color-scheme='dark'] .code code {
		background: #303742;
	}
</style>
