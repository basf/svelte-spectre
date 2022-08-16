---
file: tabs.md
title: Tabs
api:
    [
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
                }',
        },
        {
            title: 'Item.title: string',
            description: 'Tab item title',
            variables: 'any string',
        },
        {
            title: 'Item.path: string',
            description: 'Tab item path',
            variables: 'URI string',
        },
        {
            title: 'Item.icon: Icons',
            description: 'Tab item icon',
            variables: 'icons',
        },
        {
            title: 'Item.badge: string',
            description: 'Tab item badge',
            variables: 'any string',
        },
        {
            title: 'Item.clear: boolean',
            description: 'Tab item close button',
            variables: 'true | false',
        },
        {
            title: 'block: boolean',
            description: 'Tabs block',
            variables: 'true | false',
        },
        {
            title: '<slot name="action">',
            description: 'Tab item action',
            variables: 'true | false',
        },
    ]
config:
    {
        title: { size: 10 },
        path: { size: 10 },
        icon: { options: [null, 'emoji', 'home', 'location'] },
        badge: { size: 10 },
        clear: { type: checkbox },
        block: { type: checkbox },
    }
---

<script>
    import {onMount} from 'svelte'
    import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
    import { browser } from '$app/env';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { Col, Grid, Tabs } from '$lib'
    import Knobs from '../../_knobs.svelte'

    let items = [
            { title: 'Tab1', path: '?tab=1', clear: true },
            { title: 'Tab2', path: '?tab=2' },
            { title: 'Tab3', path: '?tab=3' },
        ],
        items2 = [
            { title: 'Tab4', path: '?tab=4', clear: true },
            { title: 'Tab5', path: '?tab=5', badge: '0' },
            { title: 'Tab6', path: '?tab=6' },
        ],
        state = {
            title: 'Tab1',
            path: '?tab=1',
            pos: 0,
            icon: 'emoji',
            badge: '0',
            clear: true,
            block: false
        }, active

    $: items[0] = state

    onMount(() => goto(`${base + $page.url.pathname}${state.path}`, {keepfocus: true}))
</script>

# {title}

Tabs enable quick switch between different views.

Add a container element with the tab class. And add child elements with the
tab-item class. You can add the tab-block class for a full-width tab. The
tab-item or its child with the active class will be highlighted.

<p>
    <Grid stack>
        <Col xs="12">
            {#if browser}
                <Tabs active={$page.url.searchParams} {items} block={state.block}/>
                <span>active: {$page.url.searchParams}</span>
            {/if}
        </Col>
        <Col xs="12">
            {#if browser}
                <Tabs items={items2} block/>
            {/if}
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
    <Grid stack>
        <Col xs="12">
            {#if browser}
                <Tabs items={items2}/>
            {/if}
        </Col>
        <Col xs="12">
            {#if browser}
                <Tabs items={items2} block/>
            {/if}
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
    {#if browser}
        <Tabs items={items2} block>
            <div slot="action" class="input-group input-inline">
                <input class="form-input input-sm" type="text">
                <button class="btn btn-primary btn-sm input-group-btn">Search</button>
            </div>
        </Tabs>
    {/if}
</p>

```sv
<Tabs {items}>
    <div slot="action" class="input-group input-inline">
        <input class="form-input input-sm" type="text">
        <button class="btn btn-primary btn-sm input-group-btn">Search</button>
    </div>
</Tabs>
```
