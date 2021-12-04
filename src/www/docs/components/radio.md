---
file: radio.md
title: Radio
api:
    [
        {
            title: '<slot {radio}>',
            description: 'Radio item from array',
            variables: '<Radio let:radio>{radio.some}</Radio>',
        },
        {
            title: 'radios: any[] = []',
            description: 'Radio items array',
            variables: 'any array',
        },
        {
            title: 'label: string = ""',
            description: 'Radio label',
            variables: 'any string',
        },
        {
            title: 'group: number = 0',
            description: 'Radio selected index',
            variables: 'any number',
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
        label: { size: 12 },
        group: { type: 'number', min: 0, max: 2, size: 5 },
        inline: { type: 'checkbox' },
        validity: { options: [null, 'success', 'error'] },
    }
---

<script>
    import {Form, FormGroup, Radio} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { label: 'Label', group: 1, inline: false, validity: null }

    let radios = 1, questions = [
            { value: 1, label: `Where did you go to school?` },
            { value: 2, label: `What is your mother's name?` },
            {
                value: 3,
                label: `What is another personal fact that an attacker could easily find with Google?`,
            },
        ]
</script>

# {title}

<p>
    <Form>
        <FormGroup>
            <Radio
                label={state.label}
                radios={questions}
                bind:group={state.group}
                let:radio
                inline={state.inline}
                validity={state.validity}>
                {radio.label}
            </Radio>
        </FormGroup>
    </Form>
    <span>Selected: {radios}</span>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Radio } from 'svelte-spectre'

    let group = 1, radios = [ 1, 2, 3 ]
</script>

<Radio
    let:radio
    bind:group
    label=""
    radios={radios}
    inline={false}
    validity={null}>
    {radio.label}
</Radio>
```
