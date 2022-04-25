---
file: bars.md
title: Bars
api:
    [
        {
            title: 'items: Item[]',
            description: 'Items array',
            variables: 'type Item = {
                value: number;
                label?: string;
                color: Color;
                striped: boolean;
                animated: boolean;
                invisible?: boolean;
                tooltip?: {
                pos: string;
                label: string;
                };
                };',
        },
        {
            title: 'auto: boolean',
            description: 'Autofilled bars by value. items = [] needed',
            variables: 'true | false',
        },
        {
            title: 'value: number = 0',
            description: 'Current numeric value (auto: true).',
            variables: 'any number',
        },
        {
            title: 'min: number = 0',
            description: 'The lower numeric bound of the measured range (auto: true).',
            variables: 'any number',
        },
        {
            title: 'low: number = 25',
            description: 'The upper numeric bound of the low end of the measured range (auto: true).',
            variables: 'any number',
        },
        {
            title: 'high: number = 50',
            description: 'The lower numeric bound of the high end of the measured range (auto: true).',
            variables: 'any number',
        },
        {
            title: 'max: number = 100',
            description: 'The upper numeric bound of the measured range (auto: true).',
            variables: 'any number',
        },
        {
            title: 'striped: boolean',
            description: 'Striped indicator.',
            variables: 'true | false',
        },
        {
            title: 'animated: boolean',
            description: 'Striped animated indicator.',
            variables: 'true | false',
        },
        {
            title: 'labled: boolean',
            description: 'Labled bars indicator.',
            variables: 'true | false',
        },
        {
            title: 'thin: boolean',
            description: 'Thin bar.',
            variables: 'true | false',
        },
    ]
config:
    {
        striped: { type: 'checkbox' },
        animated: { type: 'checkbox' },
        labled: { type: 'checkbox' },
        thin: { type: 'checkbox' },
        auto: { type: 'checkbox' },
        value: { type: 'number', min: 0, max: 100, size: 5 },
        min: { type: 'number', min: 0, max: 100, size: 5 },
        low: { type: 'number', min: 0, max: 100, size: 5 },
        high: { type: 'number', min: 0, max: 100, size: 5 },
        max: { type: 'number', min: 0, max: 100, size: 5 },
    }
---

<script>
    import { Bars } from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = {
        value: 100, 
        min: 10, 
        low: 25, 
        high: 50, 
        max: 90, 
        striped: false, 
        animated: false,
        labled: true,
        thin: false,
        auto: false
    }

    $: items = state.auto ? [] : [
            {value: 10, striped: true, animated: true, color: 'secondary'},
            {value: 15, striped: true, animated: true, color: 'error'},
            {value: 25, striped: true, animated: true, color: 'warning'},
            {value: 40, striped: true, animated: true, color: 'success'},
            {value: 10, striped: true, animated: true},
        ]
</script>

# {title}

Bars represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 `<progress>`, `<meter>` and input range elements.

<p>
    <Bars { ...state } bind:items />
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```html
<script>
    import { Bars } from 'svelte-spectre';

    let state = {
        value: 100,
        min: 10,
        low: 25,
        high: 50,
        max: 90,
        striped: false,
        animated: false,
        labled: true,
        auto: false,
    };

    $: items = state.auto
        ? []
        : [
              { value: 10, striped: true, animated: true, color: 'secondary' },
              { value: 15, striped: true, animated: true, color: 'error' },
              { value: 25, striped: true, animated: true, color: 'warning' },
              { value: 40, striped: true, animated: true, color: 'success' },
              { value: 10, striped: true, animated: true },
          ];
</script>

<Bars { ...state } bind:items />
```
