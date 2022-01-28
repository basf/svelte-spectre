{#if action}
	<pre {...$$restProps} class="code" data-lang={lang} use:action={options}>
		<code><slot {code} /></code>
	</pre>
{:else}
	<pre {...$$restProps} class="code" data-lang={lang}>
		<code><slot {code} /></code>
	</pre>
{/if}

<script lang="ts">
	export let lang: string = '';
	export let code: string = '';
	export let action: Function;
	export let options: any;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/codes';
	}
</style>
