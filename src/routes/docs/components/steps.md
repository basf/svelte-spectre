---
file: steps.md
title: Steps
api:
    [
        {
            title: 'steps: Step[] = []',
            description: 'interface Step',
            variables: 'interface Step {
                label: string;
                href?: string;
                tooltip?: string;
                }',
        },
        {
            title: 'Step.label: string = ""',
            description: 'Step label',
            variables: 'any string',
        },
        {
            title: 'Step.gref: string = ""',
            description: 'Step href',
            variables: 'any url string',
        },
        {
            title: 'Step.tooltip: string = ""',
            description: 'Step tooltip',
            variables: 'any string',
        },
        {
            title: 'active: number = 1',
            description: 'Active step',
            variables: 'any number',
        },
    ]
config:
    {
        active: { type: 'number', min: 1, max: 10, size: 5 },
        length: { type: 'number', min: 2, max: 10, size: 5 },
    }
---

<script>
    import {Steps} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { active: 3, length: 5 }

    $: steps = Array.from({length: state.length}, (x, i) => x = {label: `Step ${i + 1}`, href: '#', tooltip: 'tooltip'})
</script>

# {title}

Steps are progress indicators of a sequence of task steps.

Add a container element with the step class. And add child elements with the
step-item class. The step-item with the active class will be highlighted and
indicate the current state of progress.

<p>
    <Steps {steps} bind:active={state.active} />
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Steps } from 'svelte-spectre'

    let steps = [
        {label: 'Step 1', href: '#', tooltip: 'tooltip'},
        {label: 'Step 2', href: '#', tooltip: 'tooltip'},
        {label: 'Step 3', href: '#', tooltip: 'tooltip'},
        {label: 'Step 4', href: '#', tooltip: 'tooltip'},
        {label: 'Step 5', href: '#', tooltip: 'tooltip'},
    ], 
    active = 3
</script>

<Steps {steps} bind:active />
```
