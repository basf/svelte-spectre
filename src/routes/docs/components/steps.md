---
file: steps.md
title: Steps
api: []
config: {
    active: { type: 'number', min: 1, max: 5, size: 5 }
}
---

<script>
    import {Steps} from '$lib'
    import Knobs from '../_knobs.svelte'

    let steps = [
        {label: 'Step 1', href: '#', tooltip: 'tooltip'},
        {label: 'Step 2', href: '#', tooltip: 'tooltip'},
        {label: 'Step 3', href: '#', tooltip: 'tooltip', active: true},
        {label: 'Step 4', href: '#', tooltip: 'tooltip'},
        {label: 'Step 5', href: '#', tooltip: 'tooltip'},
    ],
    state = { active: 3 }

    $: steps = steps.map((s, i) => {return {...s, active: i === state.active - 1 ? true : false }})
</script>

# {title}

> 🚧 Under construction

Steps are progress indicators of a sequence of task steps.

Add a container element with the step class. And add child elements with the
step-item class. The step-item with the active class will be highlighted and
indicate the current state of progress.

<p>
    <Steps bind:steps />
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import {Steps} from '$lib'

    let steps = [
        {label: 'Step 1', href: '#', tooltip: 'tooltip'},
        {label: 'Step 2', href: '#', tooltip: 'tooltip'},
        {label: 'Step 3', href: '#', tooltip: 'tooltip', active: true},
        {label: 'Step 4', href: '#', tooltip: 'tooltip'},
        {label: 'Step 5', href: '#', tooltip: 'tooltip'},
    ]
</script>

<Steps {steps} />
```
