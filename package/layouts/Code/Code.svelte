<pre {...$$restProps} class="code" data-lang={lang}>
    <code>
        <slot />
    </code>
</pre>

<script>
	export let lang = '';
</script>

<style>
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
</style>
