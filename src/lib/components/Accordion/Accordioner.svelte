<slot />

<script lang="ts">
	import { setContext } from 'svelte';
	setContext('accordioner', new Set());
</script>
