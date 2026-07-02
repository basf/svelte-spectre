---
file: range.md
title: Range
api:
    [
        {
            title: 'range: number | null = null',
            description: 'Single-handle value (ignored in dual mode, kept in sync with user_max for compatibility)',
            variables: 'any number',
        },
        {
            title: 'user_min: number | null = null',
            description: 'Low handle value (dual mode only)',
            variables: 'any number',
        },
        {
            title: 'user_max: number | null = null',
            description: 'High handle value (dual mode only)',
            variables: 'any number',
        },
        {
            title: 'ux_min: number = 0',
            description: 'Track absolute minimum',
            variables: 'any number',
        },
        {
            title: 'ux_max: number = 100',
            description: 'Track absolute maximum',
            variables: 'any number',
        },
        {
            title: 'step: number = 1',
            description: 'Value step',
            variables: 'any number',
        },
        {
            title: 'dual: boolean = false',
            description: 'Enable two-handle range selection',
            variables: 'true | false',
        },
        {
            title: 'inline: boolean = false',
            description: 'Inline layout',
            variables: 'true | false',
        },
        {
            title: 'height: "sm" | "md" | "lg" | "xl" | "xxl" = "md"',
            description: 'Track height variant',
            variables: 'sm | md | lg | xl | xxl',
        },
        {
            title: 'validity: Validity = null',
            description: 'Validity state (colors the selection + handles)',
            variables: 'null | success | warning | error | info',
        },
    ]
config:
    {
        Single:
            {
                range: { type: 'number', min: 0, max: 100, size: 10 },
                ux_min: { type: 'number', min: 0, max: 10, size: 10 },
                ux_max: { type: 'number', min: 10, max: 100, size: 10 },
                step: { type: 'number', min: 1, max: 10, size: 5 },
                height: { options: ['sm', 'md', 'lg', 'xl', 'xxl'] },
                inline: { type: 'checkbox' },
                validity:
                    { options: [null, 'success', 'warning', 'error', 'info'] },
            },
        Dual:
            {
                user_min: { type: 'number', min: 0, max: 100, size: 10 },
                user_max: { type: 'number', min: 0, max: 100, size: 10 },
                ux_min: { type: 'number', min: 0, max: 10, size: 10 },
                ux_max: { type: 'number', min: 10, max: 100, size: 10 },
                step: { type: 'number', min: 1, max: 10, size: 5 },
                height: { options: ['sm', 'md', 'lg', 'xl', 'xxl'] },
                inline: { type: 'checkbox' },
                validity:
                    { options: [null, 'success', 'warning', 'error', 'info'] },
            },
    }
---

<script>
    import {Form, FormGroup, Range} from '$lib'
    import Knobs from '../../knobs.svelte'

    let state = {
        Single: { range: 45, ux_min: 0, ux_max: 100, step: 1, height: 'md', inline: false, validity: null },
        Dual: { user_min: 20, user_max: 80, ux_min: 0, ux_max: 100, step: 1, height: 'md', inline: false, validity: null },
    }
</script>

# {title}

The Range component is for selecting values from ranges. It supports a single
handle (default) and a dual-handle mode for selecting a min/max range.

## Single range

Use `bind:range` for a single-handle slider.

<p>
    <Form>
        <FormGroup>
            <h4>Range (single)</h4>
            <Range
                bind:range={state.Single.range}
                bind:ux_min={state.Single.ux_min}
                bind:ux_max={state.Single.ux_max}
                bind:step={state.Single.step}
                height={state.Single.height}
                inline={state.Single.inline}
                validity={state.Single.validity}/>
        </FormGroup>
    </Form>
</p>

<p>
    <Knobs bind:state={state.Single} config={config.Single}/>
</p>

```sv
<script>
    import { Range } from 'svelte-spectre'

    let range
</script>

<Range
    bind:range
    ux_min={0}
    ux_max={100}
    inline={false}
    validity={null}/>
```

## Dual range

Set `dual={true}` (or simply pass `user_min`/`user_max`) to enable two-handle
range selection. Bind `user_min` and `user_max` to track the selected range.

<p>
    <Form>
        <FormGroup>
            <h4>Range (dual)</h4>
            <Range
                dual={true}
                bind:user_min={state.Dual.user_min}
                bind:user_max={state.Dual.user_max}
                bind:ux_min={state.Dual.ux_min}
                bind:ux_max={state.Dual.ux_max}
                bind:step={state.Dual.step}
                height={state.Dual.height}
                inline={state.Dual.inline}
                validity={state.Dual.validity}/>
        </FormGroup>
    </Form>
</p>

<p>
    <Knobs bind:state={state.Dual} config={config.Dual}/>
</p>

```sv
<script>
    import { Range } from 'svelte-spectre'

    let user_min = 20
    let user_max = 80
</script>

<Range
    dual={true}
    bind:user_min
    bind:user_max
    ux_min={0}
    ux_max={100}
    step={1}/>
```
