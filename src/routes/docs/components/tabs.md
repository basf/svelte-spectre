---
file: tabs.md
title: Tabs
api: [
        {
            title: 'badge.item: interface Item', 
            description: '', 
            variables: 'interface Item {
                title: string;
                path?: string;
                pos?: number;
                icon?: Icons;
                badge?: string;
                clear?: boolean;
            }'
        },
        {title: 'Item.title: string', description: 'Tab item title', variables: 'any string'},
        {title: 'Item.path: string', description: 'Tab item path', variables: 'URI string'},
        {title: 'Item.pos: number', description: 'Tab item position', variables: '[0..9]'},
        {title: 'Item.icon: Icons', description: 'Tab item icon', variables: 'icons'},
        {title: 'Item.badge: string', description: 'Tab item badge', variables: 'any string'},
        {title: 'Item.clear: boolean', description: 'Tab item close button', variables: 'true | false'},
        {title: '<slot name="action">', description: 'Tab item action', variables: 'true | false'},
    ]
config: {
        title: { size: 10 },
        path: { size: 10 },
        pos: { type: 'number', size: 5, min: 0, max: 2 },
        icon: { options: [null, 'emoji', 'home', 'location'] },
        badge: { size: 10 },
        clear: { type: checkbox }
    }

---

<script>
    import { Col, Grid, Tabs } from '$lib'
    import Knobs from '../_knobs.svelte'

    let items = [
            { title: 'Tab1', path: '#0', clear: true },
            { title: 'Tab2', path: '#1' },
            { title: 'Tab3', path: '#2' },
        ],
        items2 = [
            { title: 'Tab3', path: '#0', clear: true },
            { title: 'Tab4', path: '#1', badge: '0' },
            { title: 'Tab5', path: '#2' },
        ],
        state = {
            title: 'Tab1',
            path: '#0',
            pos: 0,
            icon: 'emoji',
            badge: '0',
            clear: true
        }, active

    $: items[0] = state
</script>

# {title}

Tabs enable quick switch between different views.

Add a container element with the tab class. And add child elements with the
tab-item class. You can add the tab-block class for a full-width tab. The
tab-item or its child with the active class will be highlighted.

<p>
    <Grid>
        <Col>
            <Tabs bind:active {items}/>
            active: {active}
        </Col>
        <Col>
            <Tabs items={items2}/>
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Tabs } from 'svelte-spectre'

    let items = [
            { title: 'Tab1', path: '#', clear: true },
            { title: 'Tab2', path: '#1', badge: '0' },
            { title: 'Tab3', path: '#2' },
        ]
</script>

<Tabs {items}>
```

## Badge

<p>
    <Grid>
        <Col>
            <Tabs items={items2}/>
        </Col>
        <Col>
            <Tabs items={items2}/>
        </Col>
    </Grid>
</p>

```sv
<script>
    import { Tabs } from 'svelte-spectre'

    let items = [
            { title: 'Tab1', path: '#', clear: true },
            { title: 'Tab2', path: '#1', badge: '0' },
            { title: 'Tab3', path: '#2' },
        ]
</script>

<Tabs {items}>
```

## Action

You could add a search box or buttons inside a tab. Add the `tab-action` class
to the `tab-item`.

<p>
    <Tabs items={items2}>
        <div slot="action" class="input-group input-inline">
            <input class="form-input input-sm" type="text">
            <button class="btn btn-primary btn-sm input-group-btn">Search</button>
        </div>
    </Tabs>
</p>

```sv
<Tabs {items}>
    <div slot="action" class="input-group input-inline">
        <input class="form-input input-sm" type="text">
        <button class="btn btn-primary btn-sm input-group-btn">Search</button>
    </div>
</Tabs>
```
