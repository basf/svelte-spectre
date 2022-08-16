---
file: empty.md
title: Empty
---

<script>
    import {Empty, Icon, Button} from '$lib'
</script>

# {title}

> 🚧 Under construction

<Empty offset="">
    <Icon slot="icon" icon="home" size="3x" color="primary" />
    <h1 slot="title">Title</h1>
    <p slot="subtitle">Subtitle</p>
    <Button slot="action" variant="primary">Action</Button>
</Empty>
