---
file: range.md
title: Range
api:
    [
        {
            title: 'range: number = 50',
            description: 'Checkbox range',
            variables: 'any number',
        },
        {
            title: 'min: number = 0',
            description: 'Checkbox range',
            variables: 'any number',
        },
        {
            title: 'max: number = 100',
            description: 'Checkbox range',
            variables: 'any number',
        },
        {
            title: 'inline: boolean = false',
            description: 'Checkbox range',
            variables: 'true | false',
        },
        {
            title: 'validity: Validity = null',
            description: 'Checkbox validity',
            variables: 'null | success | error',
        },
    ]
config:
    {
        range: { type: 'number', min: 0, max: 100, size: 10 },
        min: { type: 'number', min: 0, max: 10, size: 10 },
        max: { type: 'number', min: 10, max: 100, size: 10 },
        inline: { type: 'checkbox' },
        validity: { options: [null, 'success', 'error'] },
    }
---

<script>
    import {Form, FormGroup, Range} from '$lib'
    import Knobs from '../../knobs.svelte'

    let state = { range: 45, min: 0, max: 100, inline: false, validity: null }
</script>

# {title}

> 🚧 Under construction

The Range are for selecting values from ranges.

<p>
    <Form>
        <FormGroup>
            <h4>Range</h4>
            <Range
                bind:range={state.range}
                bind:min={state.min}
                bind:max={state.max}
                inline={state.inline}
                validity={state.validity}/>
        </FormGroup>
    </Form>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Range } from 'svelte-spectre'

    let range
</script>

<Range
    bind:range
    min={0}
    max={100}
    inline={false}
    validity={null}/>
```
