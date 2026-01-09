---
file: timer.md
title: Timer
api:
    [
        {
            title: 'duration: number',
            description: 'Timer duration in seconds, e.g. 300 = 5 minutes',
        },
        {
            title: 'startTimestamp: number',
            description: 'Unix timestamp (seconds) when the timer should start, e.g. 1767225600 = January 1, 2026 00:00',
        },
    ]
---

<script>
	import { Timer, Input } from '$lib';

	let duration = 300;
	let startTimestamp = Math.floor(Date.now() / 1000);
</script>

# Timer

A simple countdown timer without buttons.

It takes:

-   a fixed **duration**
-   a **Unix timestamp** indicating when the timer should start

The remaining time is calculated from the real time, not from the page load.

---

## Demo

#### Start timestamp (Unix time), duration (seconds)

```
<Timer {duration} {startTimestamp}/>
```

Start TimeStamp:
<Input
	type="number"
	bind:value={startTimestamp}
/>

Duration:

<Input
	type="number"
	bind:value={duration}
/>
<br/>

We finish in <Timer {duration} {startTimestamp}/>.
