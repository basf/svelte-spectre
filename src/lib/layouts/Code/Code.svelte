{#if action}
	<pre {...$$restProps} class="code" data-lang={lang}>
		<code use:action={options} on:change><slot /></code>
	</pre>
{:else}
	<pre {...$$restProps} class="code" data-lang={lang}>
		<code><slot /></code>
	</pre>
{/if}

<script lang="ts">
	export let lang: string = '';
	export let action: Function;
	export let options: any;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/codes';
	}
</style>
