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
        groups: { size: 12 }
    }
---

<script>
    import { Autocomplete } from '$lib'
    import Knobs from '../_knobs.svelte'

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
            ],
        state = {placeholder: 'type here', predictable: false, groups: ['top', 'center', 'bottom']},
        selected = []
</script>

# {title}

Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.

<p>
    <Autocomplete
        bind:predefined
        bind:selected
        bind:placeholder={state.placeholder}
        creatable
        predictable={state.predictable}
        groups={state.groups} />
    <small>Selected: {selected}</small>
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
<small>Selected: {selected.join(", ")}</small>
```
