---
file: breadcrumbs.md
title: Breadcrumbs
api:
    [
        {
            title: 'interface Link',
            description: 'interface Link',
            variables: 'interface Link {
                href: string;
                title: string;
                tooltip: string;
                }',
        },
        {
            title: 'href: string',
            description: 'Item link',
            variables: 'any URL string',
        },
        {
            title: 'title: string',
            description: 'Item title',
            variables: 'any string',
        },
        {
            title: 'title: tooltip',
            description: 'Item tooltip',
            variables: 'any string',
        },
    ]
---

<script>
    import {Breadcrumbs} from '$lib';

    let links = [
        {title:'Home', href: '#', tooltip: 'Home'},
        {title:'Settings', href: '#', tooltip: 'Settings'},
        {title:'Svelte-Spectre', href: '#', tooltip: 'Svelte-Spectre'}
        ];
</script>

# {title}

Breadcrumbs are used as navigational hierarchies to indicate current location.

<p>
    <Breadcrumbs {links}/>
</p>

Add a container element with the `breadcrumb` class. And add child elements with
the `breadcrumb-item` class.

```sv
<script>
    import {Breadcrumbs} from 'svelte-spectre';

    let links = [
        {title:'Home', href: '#', tooltip: 'Home'},
        {title:'Settings', href: '#', tooltip: 'Settings'},
        {title:'Svelte-Spectre', href: '#', tooltip: 'Svelte-Spectre'}
        ];
</script>

<Breadcrumbs {links}/>
```
