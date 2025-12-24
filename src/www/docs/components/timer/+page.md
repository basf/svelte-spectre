---
file: timer.md
title: Timer
api:
    [
        {
            title: 'duration: number',
            description: 'Timer duration in seconds (e.g. 300 = 5 minutes)',
        },
        {
            title: 'startTimestamp: number',
            description: 'Unix timestamp (seconds) when the timer should start',
        },
    ]
---

<script>
	import { Timer, Input } from '$lib';

	let duration = 300; // 5 minutes
	let startTimestamp = Math.floor(Date.now() / 1000);
</script>

# Timer

A simple countdown timer component with **no buttons**.

It takes:

-   a fixed **duration**
-   a **Unix timestamp** indicating when the timer should start

The remaining time is calculated from real time, not from page load.

---

## Demo

#### Start timestamp (Unix, seconds)

```
<Timer {duration} {startTimestamp}/>
```

<Input
	type="number"
	bind:value={startTimestamp}
/>
<br/>

### Result

Task finishes in <Timer {duration} {startTimestamp}/>.

#### Duration (seconds)

```
<Timer {duration}/>
```

<Input
	type="number"
	bind:value={duration}
/>
<br/>

### Result

Task finishes in <Timer {duration}/>.
