---
file: container.md
title: Container
---

<script>
    import {Button, Container} from '$lib'
    import {media} from '../../../media'
</script>

# {title}

Container contains further components or elements.

```sv
<script>
    import {Button, Container} from 'svelte-spectre'
</script>

<Container>
    <div class="bg-secondary p-2 text-center">
        I'm Container :-D
    </div>
</Container>
```

<br/>
<Container>
    <div class="bg-secondary{$media.dark && '-darked'} p-2 text-center">
        I'm Container :-D
    </div>
</Container>

<style>
    /* div { width: 100%} */
</style>
