---
file: hero.md
title: Hero
---

<script>
    import {Hero} from '$lib'
    import {media} from '../../../media'
</script>

# {title}

The Hero container shows key featured content or important information.

```sv
<script>
    import {Hero} from 'svelte-spectre'
</script>

<Hero bg="'dark' | 'gray'" center/>
```

<Hero bg="{$media.dark ? 'dark' : 'gray'}" center/>
