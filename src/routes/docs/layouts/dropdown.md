---
file: dropdown.md
title: Dropdown
api: [
    {title: '<slot>: HTMLelement | SvelteComponent', description: 'Dropdown toggler. Add on:click event to element inside for handle active state.', variables: 'HTMLelement | SvelteComponent'},
    {title: '<slot name="content">: HTMLelement | SvelteComponent', description: 'Dropdown content', variables: 'HTMLelement | SvelteComponent'},
    {title: 'active: boolean = false', description: 'Dropdown active', variables: 'true | false'},
    {title: 'right: boolean = false', description: 'Dropdown align right', variables: 'true | false'},
]
config: { 
    active: { type: 'checkbox' },
    right: { type: 'checkbox' },
}
---

<script>
    import { base } from '$app/paths';
    import {Avatar, Button, ButtonGroup, Col, Dropdown, Icon, IconButton, Grid, Menu, Tile} from '$lib'
    import Knobs from '../_knobs.svelte'

    let menu = [
            { divider: `TOP` },
            { text: `top_left`, active: true },
            { text: `top_center`, checkbox: true },
            { text: `top_right`, badge: 2 },
            { divider: `CENTER` },
            { text: `center_left`, icon: 'link' },
            { text: `center_center`, switch: true },
            { text: `center_right`, badge: 'badge', checkbox: true },
            { divider: `BOTTOM` },
            { text: `bottom_left`, radio: true },
            { text: `bottom_center`, radio: true },
            { text: `bottom_right`, radio: true },
        ],
        state = {active: false, right: false}
</script>

# {title}

The Dropdown is a toggled by click layout for any toggler element & content.

<p>
    <Grid>
        <Col>
            <Dropdown bind:active={state.active}>
                <Button on:click={() => state.active = !state.active}>
                    Dropdown &nbsp;<Icon icon="caret"/>
                </Button>
                <Menu slot="content" items={menu} nav>
                    <Tile slot="header">
                        <Avatar slot="icon">
                            <img class="avatar" src="{base}/img/avatar-4.png" alt="Avatar" />
                        </Avatar>
                        <div slot="title" class="tile-content">Steve Rogers</div>
                    </Tile>
                    <Button slot="footer" block variant="primary">Footer</Button>
                </Menu>
            </Dropdown>
        </Col>
        <Col>
            <Dropdown active={state.active} right={state.right}>
                <ButtonGroup>
                    <Button variant="primary">Dropdown</Button>
                    <IconButton on:click={() => state.active = !state.active} variant="primary" icon="caret"/>
                </ButtonGroup>
                <Menu slot="content" items={menu} nav>
                    <Tile slot="header">
                        <Avatar slot="icon">
                            <img class="avatar" src="{base}/img/avatar-4.png" alt="Avatar" />
                        </Avatar>
                        <div slot="title" class="tile-content">Steve Rogers</div>
                    </Tile>
                    <Button slot="footer" block variant="primary">Footer</Button>
                </Menu>
            </Dropdown>
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Button, Dropdown, Menu } from 'svelte-spectre'

    let active = false
</script>

<Dropdown bind:active>
    <Button on:click={() => active = !active}>
        Dropdown <Icon icon="caret"/>
    </Button>
    <Menu slot="content" items={menu} nav /> // or any content
</Dropdown>
```
