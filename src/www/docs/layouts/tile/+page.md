---
file: tile.md
title: Tile
---

<script>
    import {Button, Tile, Icon, Container} from '$lib'
</script>

# {title}

Tiles are repeatable or embeddable information blocks.

```sv
<script>
    import {Button, Tile, Icon, Container} from 'svelte-spectre'
</script>

<Container>
    <Tile>
        <div slot="icon">
            <Icon icon="emoji" size="2x" color="primary" />
        </div>
        <div slot="title">The Avengers</div>
        <div slot="subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</div>
        <div slot= "action">
            <Button variant="primary">Join</Button>
        </div>
    </Tile>
</Container>
```

<Container>
    <Tile>
        <div slot="icon">
            <Icon icon="emoji" size="2x" color="primary" />
        </div>
        <div slot="title">The Avengers</div>
        <div slot="subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</div>
        <div slot= "action">
            <Button variant="primary">Join</Button>
        </div>
    </Tile>
</Container>
