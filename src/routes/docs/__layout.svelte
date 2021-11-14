<Container>
	{#if $page.path.includes('docs')}
		<slot />
	{/if}
</Container>

<!-- <p>
	<Knobs bind:state {config} />
</p> -->
<script lang="ts" context="module">
	import { Accordion, Aside, Container, IconButton, Navbar, Spectre, Toaster, toast } from '$lib';
	// import './_code.scss';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Knobs from './_knobs.svelte';

	export let state, config, component, base;
</script>

<style lang="scss" global>
	@import '_code';
	// main {
	// 	padding: 0 0.5rem 2rem;
	// }
</style>
