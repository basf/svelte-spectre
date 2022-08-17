---
file: accordion.md
title: Accordion
api: [
	{title: 'group: string = "group"', description: 'Accordion group', variables: 'any string'},
	{title: 'toggled: boolean = false', description: 'Accordion toggled', variables: 'true | false'},
	{title: 'opened: boolean = false', description: 'Accordion opened', variables: 'true | false'}
]
config: { 
    toggled: { type: 'checkbox' }, 
    group1: { size: 10, placeholder: 'group1 scope' }, 
    group2: { size: 10, placeholder: 'group2 scope' }, 
    opened: { type: 'number', size: 5, min: 1, max: 6}, 
    expand: { type: 'checkbox' } 
    }
---

<script>
    import {Accordion, Accordioner, Col, Grid, Divider} from '$lib'
    import Knobs from '../../knobs.svelte'

    let opened = 1, state = { toggled: true, group1: 'demo1', group2: 'demo2', opened, expand: false }
</script>

# {title}

Accordions are used to toggle sections of content.

<p>
    <Grid>
        <Col>
            <h5 class="text-gray">Group: {state.group1}</h5>
            <Accordion
                bind:toggled={state.toggled}
                group={state.group1}
                opened={state.opened === 1 || state.expand}>
                <h5 slot="header">
                    <i class="icon icon-arrow-right mr-2" />Accordion1
                </h5>
                <p>Accordion content<br />Accordion content<br />Accordion content</p>
            </Accordion>
            <Accordion
                bind:toggled={state.toggled}
                group={state.group1}
                opened={state.opened === 2 || state.expand}>
                <h5 slot="header">
                    <i class="icon icon-arrow-right mr-2" />Accordion2
                </h5>
                <p>Accordion1<br />Accordion1<br />Accordion1</p>
            </Accordion>
            <Accordion
                bind:toggled={state.toggled}
                group={state.group1}
                opened={state.opened === 3 || state.expand}>
                <h5 slot="header">
                    <i class="icon icon-arrow-right mr-2" />Accordion3
                </h5>
                <p>Accordion2<br />Accordion2<br />Accordion2</p>
            </Accordion>
        </Col>
        <Col>
            <h5 class="text-gray">Group: {state.group2}</h5>
            <Accordion
                bind:toggled={state.toggled}
                group={state.group2}
                opened={state.opened === 4 || state.expand}>
                <h5 slot="header">Accordion4</h5>
                <p>Accordion content<br />Accordion content<br />Accordion content</p>
            </Accordion>
            <Accordion
                bind:toggled={state.toggled}
                group={state.group2}
                opened={state.opened === 5 || state.expand}>
                <h5 slot="header">Accordion5</h5>
                <p>Accordion1<br />Accordion1<br />Accordion1</p>
            </Accordion>
            <Accordion
                bind:toggled={state.toggled}
                group={state.group2}
                opened={state.opened === 6 || state.expand}>
                <h5 slot="header">Accordion6</h5>
                <p>Accordion2<br />Accordion2<br />Accordion2</p>
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
