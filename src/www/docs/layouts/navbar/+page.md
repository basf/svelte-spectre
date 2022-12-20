---
file: navbar.md
title: Navbar
---

<script>
    import {Button, IconButton, Navbar} from '$lib'
    import {media} from '../../../media'
</script>

# {title}

Navbar is the layout container that normally appears in the header of the apps and websites.

```sv
<script>
    import {Button, IconButton, Navbar} from '$lib'
</script>

<Navbar>
    <IconButton icon="menu" slot="left" />
    <IconButton icon="emoji" slot="center" />
    <IconButton icon="location" slot="right"/>
</Navbar>
```

<section class="bg-{$media.dark ? 'dark' : 'gray'} p-2">
    <Navbar>
        <IconButton icon="menu" slot="left" />
        <IconButton icon="emoji" slot="center" />
        <IconButton icon="location" slot="right"/>
    </Navbar>
</section>
