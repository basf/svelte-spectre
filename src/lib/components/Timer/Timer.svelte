<span>{minutes}:{seconds}</span>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let duration: number;
	export let startTimestamp: number;

	let remaining = duration;
	let interval: ReturnType<typeof setInterval>;
	let effectiveStart: number;

	function updateRemaining() {
		const now = Math.floor(Date.now() / 1000);
		const endTime = effectiveStart + duration;
		remaining = Math.max(0, endTime - now);
	}

	$: minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
	$: seconds = String(remaining % 60).padStart(2, '0');

	onMount(() => {
		effectiveStart = startTimestamp ?? Math.floor(Date.now() / 1000);

		updateRemaining();
		interval = setInterval(updateRemaining, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>
