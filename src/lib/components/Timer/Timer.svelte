<span>{minutes}:{seconds}</span>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let duration: number;
	export let startTimestamp: number;

	let remaining = 0;
	let minutes = '00';
	let seconds = '00';
	let interval: ReturnType<typeof setInterval>;
	let mounted = false;

	function updateRemaining() {
		const now = Math.floor(Date.now() / 1000);
		const endTime = Number(startTimestamp) + Number(duration);
		remaining = Math.max(0, endTime - now);

		minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
		seconds = String(remaining % 60).padStart(2, '0');
	}

	$: if (mounted && (duration || startTimestamp)) {
		updateRemaining();
	}

	onMount(() => {
		mounted = true;
		updateRemaining();
		interval = setInterval(updateRemaining, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>
