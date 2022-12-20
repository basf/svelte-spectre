---
file: container.md
title: Container
---

<script>
    import {Button, Container} from '$lib'
    import {media} from '../../../media'
</script>

# {title}

Container is for contain components or elements.

```sv
<script>
    import {Button, Container} from 'svelte-spectre'
</script>

<Container>
    <div class="bg-secondary p-2 text-center">I'm Container</div>
</Container>
```

<br/>
<Container>
    <div class="bg-secondary{$media.dark && '-darked'} p-2 text-center">I'm Container</div>
</Container>

<style>
    /* div { width: 100%} */
</style>
