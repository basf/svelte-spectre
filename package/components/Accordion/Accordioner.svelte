<slot />

<script>
	import { setContext } from 'svelte';
	setContext('accordioner', new Set());
</script>
