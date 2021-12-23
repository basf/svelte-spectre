<slot name="toggler" />
{#if toggle}
	<slot />
{/if}

<script lang="ts">
	export let toggle: boolean = false;
</script>
