---
file: empty.md
title: Empty
---

<script>
    import {Empty, Icon, Button} from '$lib'
</script>

# {title}

Empty states/blank slates are commonly used as placeholders for first time use, empty data and error screens.

```sv
<script>
    import {Empty, Icon, Button} from '$lib'
</script>

<Empty offset="">
    <Icon slot="icon" icon="home" size="3x" color="primary" />
    <h1 slot="title">Title</h1>
    <p slot="subtitle">Subtitle</p>
    <Button slot="action" variant="primary">Action</Button>
</Empty>
```

<Empty offset="">
    <Icon slot="icon" icon="home" size="3x" color="primary" />
    <h1 slot="title">Title</h1>
    <p slot="subtitle">Subtitle</p>
    <Button slot="action" variant="primary">Action</Button>
</Empty>
