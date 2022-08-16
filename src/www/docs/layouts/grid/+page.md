---
file: grid.md
title: Grid
---

<script>
    import {Button, Col, Grid} from '$lib'
    import {media} from '../../../_media'
</script>

# {title}

> 🚧 Under construction

<Grid stack>
    <Col col="5"><div class="bg-secondary{$media.dark && '-darked'} p-1">col-5</div></Col>
    <Col col="7"><div class="bg-primary p-1">col-7</div></Col>
    <Col col="8"><div class="bg-secondary{$media.dark && '-darked'} p-1">col-8</div></Col>
    <Col col="4"><div class="bg-primary p-1">col-4</div></Col>
    <Col><div class="bg-secondary{$media.dark && '-darked'} p-1">col</div></Col>
</Grid>
