---
file: switch.md
title: Switch
api:
    [
        {
            title: 'value: boolean = false',
            description: 'Checkbox value',
            variables: 'true | false',
        },
        {
            title: 'inline: boolean = false',
            description: 'Checkbox inline',
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
        inline: { type: 'checkbox' },
        validity: { options: [null, 'success', 'error'] },
    }
---

<script>
    import {Switch, Form, FormGroup } from '$lib'
    import Knobs from '../../knobs.svelte'

    let state = { inline: false, validity: null }
</script>

# {title}

The form switch element is an important component that is required to get the activation value or on/off value from the user:

<p>
    <Form>
        <FormGroup>
            <Switch
                inline={state.inline}
                validity={state.validity}>Switch</Switch>
            <Switch
                inline={state.inline}
                validity={state.validity}>Switch</Switch>
        </FormGroup>
    </Form>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Switch } from 'svelte-spectre'

    let value = false
</script>

<Switch bind:value inline validity={null}>Switch</Switch>
```
