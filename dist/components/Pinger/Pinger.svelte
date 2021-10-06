<script >import { onMount } from 'svelte';
import { ping } from './ping';
export let url = 'http://localhost:3000';
export let on;
onMount(async () => {
    on = await ping(url);
    console.log('on:', on);
});
</script>
