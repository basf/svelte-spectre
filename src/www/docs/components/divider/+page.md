---
file: divider.md
title: Divider
api:
    [
        {
            title: 'align: Align = "horizontal"',
            description: 'Divider align',
            variables: 'vertical | horizontal | left | center | right',
        },
        {
            title: 'color: Color = "gray"',
            description: 'Divider text color',
            variables: 'primary | secondary | dark | gray | light | success | warning | error',
        },
        {
            title: 'text: string = ""',
            description: 'Divider text',
            variables: 'any string',
        },
        {
            title: 'empty: boolean = false',
            description: 'Divider without separate line',
            variables: 'true | false',
        },
    ]
config:
    {
        align: { options: ['left', 'center', 'right'] },
        color:
            {
                options:
                    [
                        'primary',
                        'secondary',
                        'dark',
                        'gray',
                        'light',
                        'success',
                        'warning',
                        'error',
                    ],
            },
        text: { size: auto },
        empty: { type: checkbox },
    }
---

<script>
    import { base } from '$app/paths';
    import {Divider, Col, Figure, Grid} from '$lib'
    import Knobs from '../../knobs.svelte'
    import {media} from '../../../media'

    let state = { align: 'center', color: 'gray', text: 'CENTER' }
</script>

# {title}

The Divider is used for separating elements.

<p>
    <Divider color={state.color} />
</p>

```sv
<script>
    import { Divider } from 'svelte-spectre'
</script>

<Divider />
```

## Texted

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
dictum in vehicula sit amet, feugiat tempus tellus.

<p>
    <Divider text={state.text} align={`horizontal ${state.align}`} color={state.color} empty={state.empty} />
</p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
dictum in vehicula sit amet, feugiat tempus tellus.

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<Divider text="CENTER" align="horizontal center" />
```

## Vertical

(media wider then 320px)

<Grid>
    <Col xs="12">
        <Figure src="{base}/img/osx-el-capitan-2.jpg" alt="macOS Yosemite Wallpaper" cover></Figure>
    </Col>
    <Divider text="OR" align={$media.xs ? 'horizontal center' : 'vertical'} />
    <Col xs="12">
        <Figure src="{base}/img/osx-el-capitan.jpg" alt="macOS Yosemite Wallpaper" cover></Figure>
    </Col>
</Grid>

```sv
<script>
    import { Col, Divider, Figure, Grid } from 'svelte-spectre'
</script>

<Grid>
    <Col xs="12">
        <Figure src="/img/osx-el-capitan-2.jpg" alt="macOS Yosemite Wallpaper"/>
    </Col>
    <Divider text="OR" align="vertical"/>
    <Col xs="12">
        <Figure src="/img/osx-el-capitan.jpg" alt="macOS Yosemite Wallpaper"/>
    </Col>
</Grid>
```
