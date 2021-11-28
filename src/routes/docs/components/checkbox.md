---
file: checkbox.md
title: Checkbox
api:
    [
        {
            title: 'value: boolean = false',
            description: 'Checkbox value',
            variables: 'true | false'
        },
        {
            title: 'indeterminate: boolean = false',
            description: 'Checkbox indeterminate',
            variables: 'true | false'
        },
        {
            title: 'inline: boolean = false',
            description: 'Checkbox inline',
            variables: 'true | false'
        },
        {
            title: 'validity: Validity = null',
            description: 'Checkbox validity',
            variables: 'null | success | error'
        }
    ]
config:
    {
        inline: { type: 'checkbox' },
        validity: { options: [null, 'success', 'error'] },
        indeterminate: { type: 'checkbox' }
    }
---

<script>
    import {Checkbox, Form, FormGroup } from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { indeterminate: false, inline: false, validity: null }
</script>

# {title}

You can change checkbox to indeterminate state by setting the indeterminate
property of input checkboxes to true.

<p>
    <Form>
        <FormGroup>
            <Checkbox
                indeterminate={state.indeterminate}
                inline={state.inline}
                validity={state.validity}>Checkbox</Checkbox>
            <Checkbox
                indeterminate={state.indeterminate}
                inline={state.inline}
                validity={state.validity}>Checkbox</Checkbox>
        </FormGroup>
    </Form>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Checkbox } from 'svelte-spectre'

    let value = false
</script>

<Checkbox bind:value indeterminate inline validity={null}>Checkbox</Checkbox>
```
