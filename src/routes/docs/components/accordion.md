---
file: accordion.md
title: Accordion
api: [
	{title: 'toggled: boolean', description: 'Accordion toggled', variables: 'true | false'},
	{title: 'opened: boolean', description: 'Accordion opened', variables: 'true | false'},
	{title: 'icon: string', description: 'Accordion icon', variables: 'arrow-up | arrow-right | arrow-down | arrow-left | upward | forward | downward | back | caret | menu | apps | more-horiz | more-vert | resize-horiz | resize-vert | plus | minus | cross | check | stop | shutdown | refresh | search | flag | bookmark | edit | delete | share | download | upload | copy | mail | people | message | photo | time | location | link | emoji | xray | home | circle-check | wifi | audio'},
]
config: { toggled: { type: 'checkbox' }, icon: { size: 10 } }
---

<script>
    import {Accordion, Col, Grid, Divider} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { toggled: true, icon: 'arrow-right' }
</script>

# {title}

Accordions are used to toggle sections of content.

<p>
    <Grid>
        <Col>
            <Accordion opened bind:toggled={state.toggled} icon={state.icon}>
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
        </Col>
        <Col>
            <Accordion>
                <strong slot="title">Accordion1</strong>
                Accordion content<br />Accordion content<br />Accordion content
            </Accordion>
            <Accordion opened>
                <strong slot="title">Accordion2</strong>
                Accordion1<br />Accordion1<br />Accordion1
            </Accordion>
            <Accordion>
                <strong slot="title">Accordion2</strong>
                Accordion2<br />Accordion2<br />Accordion2
            </Accordion>
        </Col>
    </Grid>
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
<Accordion icon="arrow-right">
    <strong slot="title">Accordion2</strong>
    Accordion1<br />Accordion1<br />Accordion1
</Accordion>
<Accordion icon="arrow-right">
    <strong slot="title">Accordion2</strong>
    Accordion2<br />Accordion2<br />Accordion2
</Accordion>
```
