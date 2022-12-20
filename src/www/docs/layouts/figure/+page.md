---
file: figure.md
title: Figure
---

<script>
    import { base } from '$app/paths';
    import {Col, Grid, Figure} from '$lib'
</script>

# {title}

You can use the element `<figure>` for an image with a caption. You can also add `contain`, `cover`, `align = true | false`

```sv
<script>
    import { Figure } from 'svelte-spectre';
</script>

<Figure
    src="{base}/img/04696e1a-eb5d-43b9-bb1d-d2ee117f4430.webp"
    alt="Stable Diffusion Neural Art"
    cover
    >img-fit-cover</Figure>
```

<Grid stack>
    <Col col="4" sm="12">
        <Figure src="{base}/img/1b9a004a-db27-45e4-b762-0fa21bc97277.webp" alt="Stable Diffusion Neural Art" contain />
    </Col>
    <Col col="4" sm="12">
        <Figure
            src="{base}/img/4603a846-4daf-4018-aa74-e3ab567a69fc.webp"
            alt="Stable Diffusion Neural Art"
            contain
        >img-fit-contain</Figure>
    </Col>
    <Col col="4" sm="12">
        <Figure
            src="{base}/img/04696e1a-eb5d-43b9-bb1d-d2ee117f4430.webp"
            alt="Stable Diffusion Neural Art"
            cover
            >img-fit-cover</Figure>
    </Col>
</Grid>
