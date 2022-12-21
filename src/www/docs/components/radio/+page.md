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
    import Knobs from '../../knobs.svelte'

    let state = { label: 'What to show in the periodic table:', group: 1, inline: false, validity: null }

    let radios = 1, questions = [
        { value: 1, label: `Phase diagrams` },
        { value: 2, label: `Crystal structures` },
        { value: 3, label: `Physical properties` },
    ]
</script>

# {title}

<p>
    <Form>
        <p>The form radio element is an important component required to get the multiple choice selection option from the user.</p>
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
    <span>Selected: {state.group}</span>
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
