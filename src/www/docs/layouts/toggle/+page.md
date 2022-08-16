---
file: toggle.md
title: Toggle
api:
    [
        {
            title: '<slot name="toggler">: HTMLElement | SvelteComponent',
            description: 'Toggle toggler',
            variables: 'HTMLElement | SvelteComponent',
        },
        {
            title: '<slot>: HTMLElement | SvelteComponent',
            description: 'Toggle content',
            variables: 'HTMLElement | SvelteComponent',
        },
        {
            title: 'toggle: boolean = false',
            description: 'Toggle toggle state',
            variables: 'true | false',
        },
    ]
config: { toggle: { type: 'checkbox' } }
---

<script>
    import {fade} from 'svelte/transition'
    import {Button, Toggle} from '$lib'
    import Knobs from '../../_knobs.svelte'

    let state = {toggle: false}
</script>

# {title}

Toggle are flexible toggler wraper provides just slots for content & toggle
control & 1 variable `toggle: boolen`.

<p>
    <Toggle bind:toggle={state.toggle}>
        <p slot="toggler">
            <Button
                variant="primary"
                on:click={() => (state.toggle = !state.toggle)}>
                {state.toggle ? 'Hide content' : 'Show content'}
            </Button>
        </p>
        <article transition:fade>
            <h3>Toggled content</h3>
            <p>This is the toggled content.</p>
            <Button
                on:click={() => (state.toggle = false)}>
                Hide toggled content</Button>
        </article>
    </Toggle>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { fade } from 'svelte/transition'
    import { Button, Toggle } from 'svelte-spectre'

    let toggle = false
</script>

<Toggle bind:toggle>
    <Button slot="toggler" on:click={() => toggle = !toggle}>
        {toggle ? 'Hide' : 'Show'}
    </Button>
    <article transition:fade>
        <h3>Toggled header</h3>
        <p>Toggled content</p>
    <article>
</Toggle>
```
