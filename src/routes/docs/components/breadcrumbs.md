---
file: breadcrumbs.md
title: Breadcrumbs
---

<script>
    import {Breadcrumbs} from '$lib'

    let links = [
        {title:'Home', href: '#', tooltip: 'Home'},
        {title:'Settings', href: '#', tooltip: 'Settings'},
        {title:'SvelteSpectre', href: '#', tooltip: 'SvelteSpectre'}
        ]
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
    import {Breadcrumbs} from 'svelte-spectre'

    let links = [
        {title:'Home', href: '#', tooltip: 'Home'},
        {title:'Settings', href: '#', tooltip: 'Settings'},
        {title:'Search result: SvelteSpectre', href: '#', tooltip: 'SvelteSpectre'}
        ]
</script>

<Breadcrumbs {links}/>
```
