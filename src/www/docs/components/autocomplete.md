---
file: autocomplete.md
title: Autocomplete
api: [
	{title: 'placeholder: string = "type here"', description: 'Autocomplete placeholder', variables: 'any string'},
	{title: 'selected: string[] = []', description: 'Autocomplete selected', variables: '[]'},
	{title: 'predictable: boolean = false', description: 'Autocomplete predictable', variables: 'true | false'}
]
config:
    {
        placeholder: { size: 12 },
        predictable: { type: 'checkbox' },
        creatable: { type: 'checkbox' },
        objects: { type: 'checkbox' },
        groups: { size: 'auto' }
    }
---

<script>
    import { Autocomplete } from '$lib'
    import Knobs from '../_knobs.svelte'

    let objects = [
            {label: '{ top_left }', value: 'top_left', group: 'top'},
            {label: '{ top_center }', value: 'top_center', group: 'top'},
            {label: '{ top_right }', value: 'top_right', group: 'top'},
            {label: '{ center_left }', value: 'center_left', group: 'center'},
            {label: '{ center_center }', value: 'center_center', group: 'center'},
            {label: '{ center_right }', value: 'center_right', group: 'center'},
            {label: '{ bottom_left }', value: 'bottom_left', group: 'bottom'},
            {label: '{ bottom_center }', value: 'bottom_center', group: 'bottom'},
            {label: '{ bottom_right }', value: 'bottom_right', group: 'bottom'},
        ],
        strings = [
            '↖ top_left',
            '↑ top_center',
            '↗ top_right',
            '← center_left',
            '✛ center_center',
            '→ center_right',
            '↙ bottom_left',
            '↓ bottom_center',
            '↘ bottom_right',
        ],
        state = {
            placeholder: 'type here',
            predictable: false,
            creatable: false,
            groups: 'top_, center_, bottom_',
            objects: false
        },
        selected = []
    
    
    const groupsBy = (item) => {
        return state.groups.split(', ').find((g) => item.includes(g))
    }

    $: predefined = state.objects ? objects : strings
</script>

# {title}

Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.

<p>
    <Autocomplete
        bind:predefined
        bind:selected
        bind:placeholder={state.placeholder}
        creatable={state.creatable}
        predictable={state.predictable}
        {groupsBy}
/>
    <small>Selected: [ {selected.map(s => s.label).join(', ')} ]</small>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Autocomplete } from 'svelte-spectre'

    let predefined = [
            'top_left',
            'top_center',
            'top_right',
            'center_left',
            'center_center',
            'center_right',
            'bottom_left',
            'bottom_center',
            'bottom_right',
        ]
</script>

<Autocomplete {predefined} bind:selected />
<small>Selected: [ {selected.join(", ")} ]</small>
```
