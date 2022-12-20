---
file: grid.md
title: Grid
---

<script>
    import {Button, Col, Grid} from '$lib'
    import {media} from '../../../media'
</script>

# {title}

Layout includes flexbox based responsive grid system with 12 columns.<br/>
You can specify the width of each column by adding attribute `col=<1-12>`

```sv
<script>
    import {Button, Col, Grid} from 'svelte-spectre'
</script>

<Grid stack>
    <Col col="5"><div class="bg-secondary p-1">col-5</div></Col>
    <Col col="7"><div class="bg-primary p-1">col-7</div></Col>
    <Col col="8"><div class="bg-secondary p-1">col-8</div></Col>
    <Col col="4"><div class="bg-primary p-1">col-4</div></Col>
</Grid>
```

<Grid stack>
    <Col col="5"><div class="bg-secondary{$media.dark && '-darked'} p-1">col-5</div></Col>
    <Col col="7"><div class="bg-primary p-1">col-7</div></Col>
    <Col col="8"><div class="bg-secondary{$media.dark && '-darked'} p-1">col-8</div></Col>
    <Col col="4"><div class="bg-primary p-1">col-4</div></Col>
    <Col><div class="bg-secondary{$media.dark && '-darked'} p-1">col</div></Col>
</Grid>
