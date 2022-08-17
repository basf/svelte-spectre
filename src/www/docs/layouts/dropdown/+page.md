---
file: dropdown.md
title: Dropdown
api:
    [
        {
            title: '<slot>: HTMLelement | SvelteComponent',
            description: 'Dropdown toggler. Add on:click event to element inside for handle active state.',
            variables: 'HTMLelement | SvelteComponent',
        },
        {
            title: '<slot name="content">: HTMLelement | SvelteComponent',
            description: 'Dropdown content',
            variables: 'HTMLelement | SvelteComponent',
        },
        {
            title: 'active: boolean = false',
            description: 'Dropdown active',
            variables: 'true | false',
        },
        {
            title: 'align: Aling = "left"',
            description: 'Dropdown align',
            variables: 'left | center | right',
        },
    ]
config:
    {
        align: { options: ['left', 'center', 'right'] },
        open: { type: 'button' },
    }
---

<script>
    import { base } from '$app/paths';
    import {Avatar, Button, ButtonGroup, Col, Dropdown, Icon, IconButton, Grid, Menu, Tile} from '$lib'
    import Knobs from '../../knobs.svelte'

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
        active = false,
        state = {open: () => active = !active, align: 'left'}
</script>

# {title}

The Dropdown is a toggled by click layout for any toggler element & content.

<p>
    <Grid stack>
        <Col col="auto">
            <Dropdown bind:active={state.active0} align="left">
                <Button on:click={() => state.active0 = !state.active0}>
                    <Icon icon="caret"/>&nbsp; Dropdown left
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
        <Col col="auto" mx="auto">
            <Dropdown bind:active align={state.align}>
               <ButtonGroup>
                    <Button variant="primary" on:click={() => alert('toggler out click')}>Dropdown {state.align}</Button>
                    <IconButton on:click={() => active = !active} variant="primary" icon="caret"/>
                </ButtonGroup>
                <Avatar slot="icon">
                    <img class="avatar" src="{base}/img/avatar-4.png" alt="Avatar" />
                </Avatar>
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
        <Col col="auto">
            <Dropdown active={state.active2} align="right">
                <Button variant="primary" on:click={() => state.active2 = !state.active2}>
                    Dropdown right &nbsp;<Icon icon="caret"/>
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
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

> If you are opening Dropdown outside component you need `|stopPropagation`
> modifier

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

<Button on:click|stopPropagation={() => active = !active}>
    Outside open Dropdown
</Button>
```
