---
file: figure.md
title: Figure
---

<script>
    import { base } from '$app/paths';
    import {Col, Grid, Figure} from '$lib'
</script>

# {title}

> 🚧 Under construction

<Grid stack>
    <Col col="4" sm="12">
        <Figure src="{base}/img/osx-el-capitan-2.jpg" alt="macOS Yosemite Wallpaper" contain />
    </Col>
    <Col col="4" sm="12">
        <Figure
            src="{base}/img/osx-yosemite.jpg"
            alt="macOS Yosemite Wallpaper"
            contain
        >img-fit-contain</Figure>
    </Col>
    <Col col="4" sm="12">
        <Figure
            src="{base}/img/osx-yosemite-2.jpg"
            alt="macOS Yosemite Wallpaper"
            cover
            >img-fit-cover</Figure>
    </Col>
</Grid>
