---
file: tile.md
title: Tile
api: [
	{title: 'centered: Boolean', description: 'set component in center', variables: 'true | false'},
	{title: '<slot name="icon">: HTMLelement | SvelteComponent', description: 'image or icon in tile', variables: 'HTMLelement | SvelteComponent'},
	{title: '<slot name="title">: HTMLelement | SvelteComponent', description: 'title text in tile', variables: 'HTMLelement | SvelteComponent'},
	{title: '<slot name="subtitle">: HTMLelement | SvelteComponent', description: 'subtitle text in tile', variables: 'HTMLelement | SvelteComponent'},
	{title: '<slot name="action">: HTMLelement | SvelteComponent', description: 'action component in tile', variables: 'HTMLelement | SvelteComponent'},
]
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
