---
file: periodictable.md
title: Periodic Table
api: [
	{title: 'selected: string[] = []', description: 'Selected element array output', variables: '[]'},
]
config: {}
---

<script>
    import { PeriodicTable } from '$lib'
    let selected = [];
</script>

# {title}

> 🚧 Under construction

<p>
    Selected: [ {selected.map(s => s).join(', ')} ]
</p>
<p>
    <PeriodicTable bind:selected/>
</p>

```sv
<script>
    import { PeriodicTable } from 'svelte-spectre'
</script>

<PeriodicTable
    bind:selected
/>
```
