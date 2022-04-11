---
file: meter.md
title: Meter
api:
    [
        {
            title: 'value: number = 0',
            description: 'Current numeric value',
            variables: 'any number',
        },
        {
            title: 'min: number = 0',
            description: 'The lower numeric bound of the measured range.',
            variables: 'any number',
        },
        {
            title: 'max: number = 100',
            description: 'The upper numeric bound of the measured range.',
            variables: 'any number',
        },
        {
            title: 'low: number = 26',
            description: 'The upper numeric bound of the low end of the measured range.',
            variables: 'any number',
        },
        {
            title: 'high: number = 51',
            description: 'The lower numeric bound of the high end of the measured range.',
            variables: 'any number',
        },
        {
            title: 'optimum: number = 90',
            description: 'This attribute indicates the optimal numeric value.',
            variables: 'any number',
        },
        {
            title: 'striped: boolean',
            description: 'Striped indicator.',
            variables: 'true | false',
        },
        {
            title: 'animated: boolean',
            description: 'Striped animated indicator.',
            variables: 'true | false',
        },
    ]
config:
    {
        striped: { type: 'checkbox' },
        animated: { type: 'checkbox' },
        value: { type: 'number', min: 0, max: 100, size: 5 },
        min: { type: 'number', min: 0, max: 100, size: 5 },
        max: { type: 'number', min: 0, max: 100, size: 5 },
        low: { type: 'number', min: 0, max: 100, size: 5 },
        high: { type: 'number', min: 0, max: 100, size: 5 },
        optimum: { type: 'number', min: 0, max: 100, size: 5 },
    }
---

<script>
    import { Meter } from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = {
        value: 25, 
        striped: true, 
        animated: true,
        min: 0,
        max: 100,
        low: 26,
        high: 51,
        optimum: 90
    }
</script>

# {title}

Meters represent the value within the known range.

<p>
    <Meter { ...state } />
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Meter } from 'svelte-spectre'

    let state = {
        value: 30, 
        striped: true, 
        animated: true,
        min: 0,
        max: 100,
        low: 30,
        high: 80,
        optimum: 90
    }
</script>

<Meter { ...state } />
```
