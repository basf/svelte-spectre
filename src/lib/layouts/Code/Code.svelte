<pre {...$$restProps} class="code" data-lang={lang}>
    <code>
        <slot />
    </code>
</pre>

<script lang="ts">
	export let lang: string = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/codes';
	}
</style>
