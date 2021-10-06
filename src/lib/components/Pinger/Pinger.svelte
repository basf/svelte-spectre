<script lang="ts">
	import { onMount } from 'svelte';
	import { ping } from './ping';

	export let url: string = 'http://localhost:3000';
	export let on: boolean;

	onMount(async () => {
		on = await ping(url);
		console.log('on:', on);
	});
</script>
