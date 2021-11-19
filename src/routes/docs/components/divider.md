---
file: divider.md
title: Divider
config: { 
    align: { options: ['left', 'center', 'right'] },
    text: { size: auto }
}
---

<script>
    import { amp, browser, dev, mode, prerendering } from '$app/env';
    import { base } from '$app/paths';
    import {Divider, Col, Figure, Grid} from '$lib'
    import Knobs from '../_knobs.svelte'
    import {media} from '../_media'

    let state = { align: 'center', text: 'CENTER' }
</script>

# {title}

The Divider is used for separating elements.

<p>
    <Divider/>
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
    <Divider text={state.text} align={`horizontal ${state.align}`} />
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
