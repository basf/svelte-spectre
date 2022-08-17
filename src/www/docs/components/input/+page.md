---
file: input.md
title: Input
api:
    [
        {
            title: '<slot>: string',
            description: 'Input label',
            variables: 'any string',
        },
        {
            title: '<slot name="iconLeft">: HTMLelement',
            description: 'Input iconLeft',
            variables: 'any icon',
        },
        {
            title: '<slot name="iconRight">: HTMLelement',
            description: 'Input iconRight',
            variables: 'any icon',
        },
        {
            title: '<slot name="hint">: string',
            description: 'Input hint',
            variables: 'any icon',
        },
        {
            title: 'value: string = ""',
            description: 'Input value',
            variables: 'any string',
        },
        {
            title: 'rows: number = 1',
            description: 'Input rows > 1 === <textarea rows>',
            variables: 'any number',
        },
        {
            title: 'size: Size = "md"',
            description: 'Input size',
            variables: 'xs | md | lg',
        },
        {
            title: 'width: number = 0',
            description: 'Input col width',
            variables: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
        },
        {
            title: 'expand: Size = "xs"',
            description: 'Input expanded media query size',
            variables: 'xs | sm | md | lg | xl | xxl',
        },
        {
            title: 'validity: Validity = null',
            description: 'Checkbox validity',
            variables: 'null | success | error',
        },
        {
            title: 'options: string[] = []',
            description: 'Input options <datalist>',
            variables: 'any Array of strings',
        },
    ]
config:
    {
        label: { size: 'auto' },
        value: { size: 'auto' },
        hint: { size: 'auto' },
        icon: { options: [null, 'left', 'right'] },
        rows: { type: 'number', min: 1, max: 10, size: 5 },
        size: { options: ['sm', 'md', 'lg'] },
        width: { type: 'number', min: 0, max: 12, size: 5 },
        expand: { options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
        validity: { options: [null, 'success', 'error'] },
        FormHorizontal: { type: 'checkbox' },
    }
---

<script>
    import {Button, Checkbox, Form, FormGroup, Icon, IconButton, Input, InputGroup, Select, Switch} from '$lib'
    import Knobs from '../../knobs.svelte'

    let state = { label: 'Input', value: '', hint: 'hint', icon: null, rows: 1, size: 'md', width: 0, expand: 'xs', validity: null, FormHorizontal: false }

    let questions = [
            { value: 1, label: `Where did you go to school?` },
            { value: 2, label: `What is your mother's name?` },
            {
                value: 3,
                label: `What is another personal fact that an attacker could easily find with Google?`,
            },
        ],
        selected = 3,
        options = ['option1', 'option2', 'option3']
</script>

# {title}

Forms provide the most common control styles used in forms, including input,
textarea, select, checkbox, radio and switch.

<p>
    <Form horizontal={state.FormHorizontal}>
        <FormGroup>
            <Input
                bind:value={state.value}
                rows={state.rows}
                size={state.size}
                width={state.FormHorizontal ? 8 : state.width}
                options={options}
                placeholder="try type options"
                validity={state.validity}
                expand={state.expand}>
                {#if state.icon === 'left'}
                    <Icon slot="iconLeft" icon="emoji" />
                {/if}
                {state.rows > 1 ? 'Textarea' : state.label}
                {#if state.icon === 'right'}
                    <Icon slot="iconRight" icon="emoji" />
                {/if}
                <span slot="hint">{state.hint}</span>
            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                validity="success"
                width={state.FormHorizontal ? 8 : state.width}>
                Success <Icon slot="iconRight" icon="emoji" />
            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                validity="error"
                width={state.FormHorizontal ? 8 : state.width}>
                Error <IconButton slot="iconRight" icon="emoji" />
            </Input>
        </FormGroup>
    </Form>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Icon, Input } from 'svelte-spectre'

    let value
</script>

<Input
    bind:value
    rows={1}
    size={'md'}
    width={0}
    options={options}
    placeholder="placeholder"
    validity={null}
    expand={false}>
        <Icon slot="iconLeft" icon="emoji" />
        Label
        <Icon slot="iconRight" icon="emoji" />
        <span slot="hint">hint</span>
    </Input>
```

## Input Group

If you want to attach text and button along with an input, add the input-group
class to the input container. And add the input-group-addon class to the text
element and input-group-btn to the button element.

<p>
    <Form>
        <FormGroup>
            <InputGroup let:button>
                <Switch />
                <Input expand />
                <Button slot="button" variant="primary" let:button input class={button}
                    >{button}</Button
                >
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup let:button>
                <Checkbox />
                <Input expand />
                <Button slot="button" variant="primary" let:button input class={button}
                    >{button}</Button
                >
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup let:button>
                <Checkbox />
                <Input expand />
                <Select options={questions} bind:value={selected} />
            </InputGroup>
        </FormGroup>
    </Form>
</p>

```sv
<script>
    import { Button, Checkbox, Input, InputGroup, Select, Switch } from 'svelte-spectre'

    let value,
        selected,
        questions = [
            { value: 1, label: `Where did you go to school?` },
            { value: 2, label: `What is your mother's name?` },
            {
                value: 3,
                label: `What is another personal fact that an attacker could easily find with Google?`,
            },
        ]
</script>

<InputGroup let:button>
    <Switch />
    <Input expand />
    <Button slot="button" variant="primary" let:button input class={button}
        >{button}</Button
    >
</InputGroup>

<InputGroup let:button>
    <Checkbox />
    <Input expand />
    <Button slot="button" variant="primary" let:button input class={button}
        >{button}</Button
    >
</InputGroup>

<InputGroup let:button>
    <Checkbox />
    <Input expand />
    <Select options={questions} bind:value={selected} />
</InputGroup>
```
