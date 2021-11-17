---
file: menu.md
title: Menu
---

<script>
    import { base } from '$app/paths';
    import {Avatar, Button, Col, Grid, Menu, Tile} from '$lib'

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
		]
</script>

# {title}

<Grid>
    <Col col="6" mr="auto" sm="12">
        <h5>Default</h5>
        <Menu items={menu} bind:radiogroup>
            <Tile slot="header">
                <Avatar slot="icon">
                    <img class="avatar" src="{base}/img/avatar-4.png" alt="Avatar" />
                </Avatar>
                <div slot="title" class="tile-content">Steve Rogers</div>
            </Tile>
            <Button slot="footer" block variant="primary">Footer</Button>
        </Menu>
    </Col>
    <Col col="6" mr="auto" sm="12">
        <h5>Nav</h5>
        <Menu items={menu} bind:radiogroup nav>
            <Tile slot="header">
                <Avatar slot="icon">
                    <img class="avatar" src="{base}/img/avatar-5.png" alt="Avatar" />
                </Avatar>
                <div slot="title" class="tile-content">Steve Rogers</div>
            </Tile>
            <Button slot="footer" block variant="primary">Footer</Button>
        </Menu>
    </Col>
</Grid>
