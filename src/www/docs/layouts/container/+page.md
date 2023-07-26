---
file: container.md
title: Container
api: [
	{title: 'size: Size = "md"', description: 'Container width', variables: 'lg | md | sm | xs'}
]
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
    import {media} from '../../../media'
</script>

<Container size="sm">
    <div class="bg-secondary{$media.dark && '-darked'} p-2 text-center">
        Computer, show me periodic table!
    </div>
</Container>
```

<br/>
<Container size="sm">
    <div class="bg-secondary{$media.dark && '-darked'} p-2 text-center">
        Computer, show me periodic table!
    </div>
</Container>
