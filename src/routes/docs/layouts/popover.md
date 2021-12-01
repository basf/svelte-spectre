---
file: popover.md
title: Popover
api: [
    {title: '<slot>: HTMLelement | SvelteComponent', description: 'Popover toggler', variables: 'HTMLelement | SvelteComponent'},
    {title: '<slot name="content">: HTMLelement | SvelteComponent', description: 'Popover content', variables: 'HTMLelement | SvelteComponent'},
    {title: 'side: Side = "top"', description: 'Popover side', variables: 'top | right | bottom | left'},
    {title: 'transparent: boolean = false', description: 'Dropdown transparent', variables: 'true | false'},
    {title: 'shadowed: boolean = true', description: 'Dropdown shadowed', variables: 'true | false'},
]
config: { 
    side: { options: ['top', 'right', 'bottom', 'left'] },
    transparent: { type: 'checkbox' },
    shadowed: { type: 'checkbox' },
}
---

<script>
    import { base } from '$app/paths';
    import {Avatar, Button, ButtonGroup, Card, Col, Dropdown, Icon, IconButton, Grid, Menu, Popover, Tile} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = {side: 'top', transparent: false, shadowed: true}
</script>

# {title}

The Popover is a toggled on hover layout for any toggler element & content.

Wrap an element by a container with the popover class. And add a container with
the popover-container next to the element. You can use Cards component inside
the popover-container.

Also, you can add the popover-right, popover-bottom or popover-left class to
define the position. By default, the popovers appear above the element.

<p>
    <Grid>
        <Col col="auto" ml="auto">
            <Popover side={state.side} transparent={state.transparent} shadowed={state.shadowed}>
                <Button variant="primary">{state.side} popover</Button>
                <Card slot="content" clear>
                    <h5 slot="title">Apple</h5>
                    <div slot="subtitle" class="text-gray">Software and hardware</div>
                    <p>To make a contribution to the world by making tools for the mind that advance humankind.</p>
                    <div slot="footer">
                        <Button variant="primary">Buy</Button>
                    </div>
                </Card>
            </Popover>
        </Col>
        <Col col="auto">
            <Popover side="right" transparent={state.transparent} shadowed={state.shadowed}>
                <Button variant="primary">right popover</Button>
                <Card slot="content" clear>
                    <h5 slot="title">Apple</h5>
                    <div slot="subtitle" class="text-gray">Software and hardware</div>
                    <p>To make a contribution to the world by making tools for the mind that advance humankind.</p>
                    <div slot="footer">
                        <Button variant="primary">Buy</Button>
                    </div>
                </Card>
            </Popover>
        </Col>
        <Col col="auto">
            <Popover side="bottom" transparent={state.transparent} shadowed={state.shadowed}>
                <Button variant="primary">bottom popover</Button>
                <Card slot="content" clear>
                    <h5 slot="title">Apple</h5>
                    <div slot="subtitle" class="text-gray">Software and hardware</div>
                    <p>To make a contribution to the world by making tools for the mind that advance humankind.</p>
                    <div slot="footer">
                        <Button variant="primary">Buy</Button>
                    </div>
                </Card>
            </Popover>
        </Col>
        <Col col="auto" mr="auto">
            <Popover side="left" transparent={state.transparent} shadowed={state.shadowed}>
                <Button variant="primary">left popover</Button>
                <Card slot="content" clear>
                    <h5 slot="title">Apple</h5>
                    <div slot="subtitle" class="text-gray">Software and hardware</div>
                    <p>To make a contribution to the world by making tools for the mind that advance humankind.</p>
                    <div slot="footer">
                        <Button variant="primary">Buy</Button>
                    </div>
                </Card>
            </Popover>
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Button, Card, Popover } from 'svelte-spectre'
</script>

<Popover side="right">
    <Button variant="primary">right popover</Button>
    <Card slot="content" clear>
        <h5 slot="title">Apple</h5>
        <div slot="subtitle" class="text-gray">Software and hardware</div>
        <p>To make a contribution to the world by making tools for the mind that advance humankind.</p>
        <div slot="footer">
            <Button variant="primary">Buy</Button>
        </div>
    </Card>
</Popover>
```
