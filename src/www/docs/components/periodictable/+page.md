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

The Periodic Table component allows to select chemical elements conveniently. Currently up to 3 distinct chemical elements or up to 3 named groups can be selected. A named group is either a column or row in the periodic table, such as `alkali`, `alkalines`, `pnictogens`, `chalcogens`, `period 2`, `period 6`, `lanthanides`, `actinides`, etc.

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

<PeriodicTable bind:selected />
```
