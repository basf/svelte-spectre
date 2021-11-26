---
file: accordion.md
title: Accordion
api: [
	{title: 'group: string', description: 'Accordion group', variables: 'any string'},
	{title: 'toggled: boolean', description: 'Accordion toggled', variables: 'true | false'},
	{title: 'opened: boolean', description: 'Accordion opened', variables: 'true | false'}
]
config: { toggled: { type: 'checkbox' }, group: { size: 10, placeholder: 'global scope' } }
---

<script>
    import {Accordion, Accordioner, Col, Grid, Divider} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { toggled: true, group: 'demo' }
</script>

# {title}

Accordions are used to toggle sections of content.

<p>
    <Grid>
        <Col>
            <Accordion bind:group={state.group} opened bind:toggled={state.toggled}>
                <h5 slot="header"><i class="icon icon-arrow-right mr-2" />Accordion1</h5>
                Accordion content<br />Accordion content<br />Accordion content
            </Accordion>
            <Accordion bind:group={state.group} bind:toggled={state.toggled}>
                <h5 slot="header"><i class="icon icon-arrow-right mr-2" />Accordion2</h5>
                Accordion1<br />Accordion1<br />Accordion1
            </Accordion>
            <Accordion bind:group={state.group} bind:toggled={state.toggled}>
                <h5 slot="header"><i class="icon icon-arrow-right mr-2" />Accordion2</h5>
                Accordion2<br />Accordion2<br />Accordion2
            </Accordion>
        </Col>
        <Col>
            <Accordion toggled>
                <h5 slot="header">Accordion1</h5>
                Accordion content<br />Accordion content<br />Accordion content
            </Accordion>
            <Accordion toggled opened>
                <h5 slot="header">Accordion2</h5>
                Accordion1<br />Accordion1<br />Accordion1
            </Accordion>
            <Accordion toggled>
                <h5 slot="header">Accordion2</h5>
                Accordion2<br />Accordion2<br />Accordion2
            </Accordion>
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

If you remove ☝🏻 `group` name `demo` in input above, all Accordions will be in
global toggle scope.

```sv
<script>
    import { Accordion } from 'svelte-spectre'
</script>

<Accordion group="demo" opened toggled>
    <h5 slot="header">
        <i class="icon icon-{icon} mr-1" />Accordion1
    </h5>
    Accordion<br />Accordion<br />Accordion
</Accordion>
<Accordion group="demo" toggled>
    <h5 slot="header">
        <i class="icon icon-{icon} mr-1" />Accordion2
    </h5>
    Accordion1<br />Accordion1<br />Accordion1
</Accordion>
<Accordion group="demo" toggled>
    <h5 slot="header">
        <i class="icon icon-{icon} mr-1" />Accordion2
    </h5>
    Accordion2<br />Accordion2<br />Accordion2
</Accordion>
```
