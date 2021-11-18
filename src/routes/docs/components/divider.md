---
file: divider.md
title: Divider
config: { align: { options: ['left', 'center', 'right'] } }
---

<script>
    import { base } from '$app/paths';
    import {Divider, Col, Figure, Grid} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { align: 'center' }
</script>

# {title}

The Divider is used for separating elements.

<p>
    <Divider/>
</p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
dictum in vehicula sit amet, feugiat tempus tellus.

<Divider text="OR" align={`horizontal ${state.align}`} />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
dictum in vehicula sit amet, feugiat tempus tellus.

<p>
    <Knobs bind:state={state} {config}/>
</p>

<Grid>
    <Col xs="12">
        <Figure src="{base}/img/osx-el-capitan-2.jpg" alt="macOS Yosemite Wallpaper" cover></Figure>
    </Col>
    <Divider text="OR" align="vertical"/>
    <Col xs="12">
        <Figure src="{base}/img/osx-el-capitan.jpg" alt="macOS Yosemite Wallpaper" cover></Figure>
    </Col>
</Grid>

```sv
<script>
    import { base } from '$app/paths';
    import {Divider, Col, Figure, Grid} from '$lib'
</script>

<Divider/>
<Divider text="OR" align="horizontal left"/>
<Divider text="OR" align="horizontal center"/>
<Divider text="OR" align="horizontal right"/>
<Grid>
    <Col xs="12">
        <Figure src="{base}/img/osx-el-capitan-2.jpg" alt="macOS Yosemite Wallpaper" cover></Figure>
    </Col>
    <Divider text="OR" align="vertical"/>
    <Col xs="12">
        <Figure src="{base}/img/osx-el-capitan.jpg" alt="macOS Yosemite Wallpaper" cover></Figure>
    </Col>
</Grid>
```
