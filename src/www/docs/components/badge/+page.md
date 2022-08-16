---
file: badge.md
title: Badge
api: [
	{title: 'color: Color = "initial"', description: 'Badge color', variables: 'default | primary | secondary | success | warning | error'},
	{title: 'rounded: boolean = false', description: 'Badge rounded', variables: 'true | false'},
]
config:
    {
        color: { options: [
                                'default',
                                'primary',
                                'secondary',
                                'success',
                                'warning',
                                'error',
                            ] },
        rounded: { type: 'checkbox' }
    }
---

<script>
    import { base } from '$app/paths';
    import {Avatar, badge, Badge, Button, Col, Divider, Grid} from '$lib'
    import Knobs from '../../_knobs.svelte'

    let bdg = '0'

    let state = { color: 'default', rounded: false }
</script>

# {title}

Badges are often used as unread number indicators.

## Badged elements

Add the `badge` class to non self closing elements. And add the `data-badge`
attribute to define the content of a badge. The badge will appear in the
top-right direction of the element.

If there is no `data-badge` or the attribute is not specified, the badge will
appear as a dot.

<p>
    <Grid>
        <Col col="3" xs="6"><span use:badge={state.badged}>Notifications</span></Col>
        <Col col="3" xs="6"><span use:badge={'8'}>Notifications</span></Col>
        <Col col="3" xs="6"><span use:badge={'88'}>Notifications</span></Col>
        <Col col="3" xs="6"><span use:badge={'888'}>Notifications</span></Col>
    </Grid>
</p>

```sv
<script>
    import { badge } from 'svelte-spectre'
</script>

<span use:badge={'8'}>Notifications</span>
```

## Avatar & Button

Badges support `Button` and `Avatars` components as well.

<p>
    <Grid align="center">
        <Col sm="12">
            <Button badge>Button</Button>
            <Button badge="8">Button</Button>
        </Col>
        <Col sm="12">
            <Button variant="primary" badge>Button</Button>
            <Button variant="primary" badge="8">Button</Button>
        </Col>
        <Col sm="12">
            <Avatar size="xl" badge="8" name="YZ"><img src="{base}/img/avatar-1.png" alt="YZ"></Avatar>
            <Avatar size="lg" badge="8" name="YZ"><img src="{base}/img/avatar-2.png" alt="YZ"></Avatar>
            <Avatar badge="8" name="YZ"><img src="{base}/img/avatar-3.png" alt="YZ"></Avatar>
        </Col>
    </Grid>
</p>

```sv
<script>
    import { Avatar, Button } from 'svelte-spectre'
</script>

<Avatar badge="8">
    <img src="/img/avatar-1.png" alt="YZ">
</Avatar>

<Button badge="8">Button</Button>
```

## Component

<p>
    <Badge color={state.color} rounded={state.rounded}>default Badge</Badge> &nbsp;
    <Badge color="primary" rounded>primary rounded</Badge> &nbsp;
    <Badge color="secondary">secondary Badge</Badge> &nbsp;
    <Badge color="success" rounded>success rounded</Badge> &nbsp;
    <Badge color="warning">warning Badge</Badge> &nbsp;
    <Badge color="error" rounded>error rounded</Badge>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Badge } from 'svelte-spectre'
</script>

<Badge>default Badge</Badge>
<Badge color="primary" rounded>primary rounded</Badge>
<Badge color="secondary">secondary Badge</Badge>
<Badge color="success" rounded>success rounded</Badge>
<Badge color="warning">warning Badge</Badge>
<Badge color="error" rounded>error rounded</Badge>
```
