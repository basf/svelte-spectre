---
file: accordion.md
title: Accordion
---

<script>
    import {Accordion, Grid, Col} from '$lib'
</script>

# {title}

Accordions are used to toggle sections of content.

<p>
    <Accordion opened icon="arrow-right">
        <strong slot="title">Accordion1</strong>
        Accordion content<br />Accordion content<br />Accordion content
    </Accordion>
    <Accordion icon="arrow-right">
        <strong slot="title">Accordion2</strong>
        Accordion1<br />Accordion1<br />Accordion1
    </Accordion>
    <Accordion icon="arrow-right">
        <strong slot="title">Accordion2</strong>
        Accordion2<br />Accordion2<br />Accordion2
    </Accordion>
</p>

## Code

```sv
<script>
    import { Accordion } from 'svelte-spectre'
</script>

<Accordion opened icon="arrow-right">
    <strong slot="title">Accordion1</strong>
    Accordion<br />Accordion<br />Accordion
</Accordion>
<Accordion>
    <strong slot="title">Accordion2</strong>
    Accordion1<br />Accordion1<br />Accordion1
</Accordion>
<Accordion>
    <strong slot="title">Accordion2</strong>
    Accordion2<br />Accordion2<br />Accordion2
</Accordion>
```
