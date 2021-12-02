---
file: autocomplete.md
title: Autocomplete
api: [
	{title: 'placeholder: string = "type here"', description: 'Autocomplete placeholder', variables: 'any string'},
	{title: 'selected: string[] = []', description: 'Autocomplete selected', variables: '[]'}
]
config:
    {
        placeholder: { size: 12 }
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
        state = {placeholder: 'type here'},
        selected = []
</script>

# {title}

Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.

<p>
    <Autocomplete {predefined} bind:selected bind:placeholder={state.placeholder} />
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
<small>Selected: {selected}</small>
```
