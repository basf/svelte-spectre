---
file: accordion.md
title: Accordion
config: { toggled: { type: 'checkbox' } }
---

<script>
    import {Accordion, Col, Grid, Divider} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { toggled: true }
</script>

# {title}

Accordions are used to toggle sections of content.

<p>
    <Accordion opened bind:toggled={state.toggled} icon="arrow-right">
        <strong slot="title">Accordion1</strong>
        Accordion content<br />Accordion content<br />Accordion content
    </Accordion>
    <Accordion bind:toggled={state.toggled} icon="arrow-right">
        <strong slot="title">Accordion2</strong>
        Accordion1<br />Accordion1<br />Accordion1
    </Accordion>
    <Accordion bind:toggled={state.toggled} icon="arrow-right">
        <strong slot="title">Accordion2</strong>
        Accordion2<br />Accordion2<br />Accordion2
    </Accordion>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Accordion } from 'svelte-spectre'
</script>

<Accordion opened icon="arrow-right">
    <strong slot="title">Accordion1</strong>
    Accordion<br />Accordion<br />Accordion
</Accordion>
<Accordion>
    <strong slot="title">Accordion2</strong>
    Accordion1<br />Accordion1<br />Accordion1
</Accordion>
<Accordion>
    <strong slot="title">Accordion2</strong>
    Accordion2<br />Accordion2<br />Accordion2
</Accordion>
```
