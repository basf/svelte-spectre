---
file: navbar.md
title: Navbar
---

<script>
    import {Button, IconButton, Navbar} from '$lib'
    import {media} from '../../_media'
</script>

# {title}

> 🚧 Under construction

<section class="bg-{$media.dark ? 'dark' : 'gray'} p-2">
    <Navbar>
        <IconButton icon="menu" slot="left" />
        <IconButton icon="emoji" slot="center" />
        <IconButton icon="location" slot="right"/>
    </Navbar>
</section>
