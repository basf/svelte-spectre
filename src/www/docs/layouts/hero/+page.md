---
file: hero.md
title: Hero
api: [
	{title: 'size: Size', description: 'component size', variables: 'xs | sm | md | lg | xl | xxl'},
	{title: 'bg: Color', description: 'background color', variables: 'initial | primary | secondary | dark | darked | gray | light | success | warning | error'},
	{title: 'center: Boolean', description: 'text center', variables: 'true | false'},
]
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
