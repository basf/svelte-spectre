---
file: grid.md
title: Grid
api:
    [
        {
            title: 'gapless: Boolean',
            description: 'Provide gapless component',
            variables: 'true | false',
        },
        {
            title: 'oneline: Boolean',
            description: 'Provide oneline component',
            variables: 'true | false',
        },
        {
            title: 'stack: Boolean',
            description: 'Provide stacked component',
            variables: ' true | false',
        },
        {
            title: 'align: Align',
            description: 'component position',
            variables: ' start | center | end | stretch | ""',
        },
        {
            title: 'justify: Justify',
            description: 'component position',
            variables: ' start | center | end | stretch | ""',
        },
    ]
---

<script>
    import {Button, Col, Grid} from '$lib'
    import {media} from '../../../media'
</script>

# {title}

Layout includes flexbox-based responsive grid system with 12 columns. You can specify the width of each column by adding attribute `col=<1-12>`

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
