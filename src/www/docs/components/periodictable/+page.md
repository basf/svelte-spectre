---
file: periodictable.md
title: Periodic Table
api: []
config: {
        page: { type: 'number', size: 10, min: 1, max: 150 },
        total: { type: 'number', size: 10, min: 10, max: 1500 },
        limit: { type: 'number', size: 10, min: 10, max: 100, step: 10 },
        rest: { type: 'number', size: 10, min: 0, max: 10 },
		perpage: { type: 'checkbox' }
    }
---

<script>
    import { PeriodicTable } from '$lib'
    
	let state = {
        }
</script>

# {title}

> 🚧 Under construction

<p>
    <PeriodicTable />
</p>

```sv
<script>
    import { PeriodicTable } from '$lib'
</script>

    <PeriodicTable />
```
