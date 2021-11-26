---
file: steps.md
title: Steps
---

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

# {title}

Steps are progress indicators of a sequence of task steps.

<Steps {steps} />

> 🚧 Under construction
