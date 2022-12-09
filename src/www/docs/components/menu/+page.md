---
file: menu.md
title: Menu
api:
    [
        {
            title: 'menu: Array[]',
            description: 'Menu item arry.',
            variables: 'type Menu = {
                text: string;
                active?: boolean;
                checkbox?: boolean;
                icon?: boolean;
                switch?: boolean;
                badge?: boolean;
                divider?: TOP | BOTTOM;
                };',
        },
        {
            title: 'nav: boolean',
            description: 'Shadow box.',
            variables: 'true | false',
        },
    ]
config: { nav: { type: 'checkbox' } }
---

<script>
    import { base } from '$app/paths';
    import {Avatar, Button, Col, Grid, Menu, Tile} from '$lib'
    import Knobs from '../../knobs.svelte'

    let radiogroup = '',
        menu = [
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
        top = [
            { divider: `TOP` },
            { text: `top_left`, active: true },
            { text: `top_center`, checkbox: true },
            { text: `top_right`, badge: 2 }
        ],
        center = [
            { divider: `CENTER` },
            { text: `center_left`, icon: 'link' },
            { text: `center_center`, switch: true },
            { text: `center_right`, badge: 'badge', checkbox: true },
        ],
        bottom = [
            { divider: `BOTTOM` },
            { text: `bottom_left`, radio: true },
            { text: `bottom_center`, radio: true },
            { text: `bottom_right`, radio: true }
        ],
        state = {nav: false}
</script>

# {title}

> 🚧 Under construction

Menus are vertical list of links or buttons for actions and navigation.

Add a container element with the menu class. And add child elements with the
menu-item class. You can separate menu items with a divider. Spectre.css does
not include JavaScript code, you will need to implement your JS to interact with
the menus.

Menus also have Form controls (checkbox, radio and switch) support.

<p>
    <Grid>
        <Col col="4" mr="auto" sm="12">
            <Menu items={top} bind:radiogroup nav={state.nav}>
                <Tile slot="header">
                    <Avatar slot="icon">
                        <img class="avatar" src="{base}/img/avatar-4.png" alt="Avatar" />
                    </Avatar>
                    <div slot="title" class="tile-content">Steve Rogers</div>
                </Tile>
                <Button slot="footer" block variant="primary">Footer</Button>
            </Menu>
        </Col>
        <Col col="4" mr="auto" sm="12">
            <Menu items={center} bind:radiogroup nav>
                <Tile slot="header">
                    <Avatar slot="icon">
                        <img class="avatar" src="{base}/img/avatar-5.png" alt="Avatar" />
                    </Avatar>
                    <div slot="title" class="tile-content">Steve Rogers</div>
                </Tile>
            </Menu><br/>
        </Col>
        <Col col="4" mr="auto" sm="12">
            <Menu items={bottom} bind:radiogroup></Menu>
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Menu } from 'svelte-spectre

    const menu = [
            { divider: `TOP` },
            { text: `top_left`, active: true },
            { text: `top_center`, checkbox: true },
            { text: `top_right`, badge: 2 }
        ]
</script>

<Menu items={menu} bind:radiogroup>
    <Tile slot="header">
        <Avatar slot="icon">
            <img class="avatar" src="{base}/img/avatar-4.png" alt="Avatar" />
        </Avatar>
        <div slot="title" class="tile-content">Steve Rogers</div>
    </Tile>
    <Button slot="footer" block variant="primary">Footer</Button>
</Menu>
```
