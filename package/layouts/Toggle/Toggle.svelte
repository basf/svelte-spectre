<slot name="toggler" />
{#if toggle}
	<slot />
{/if}

<script>
	export let toggle = false;
</script>
