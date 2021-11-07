---
file: avatar.md
title: Avatar
---

<script>
    import { Avatar } from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { size: 'md', status: 'online', name: 'Albert Einstein', badge: true }
</script>

# {title}

Avatars are user profile pictures.

<p>
<Avatar name="AV" size="sm" badge />
<Avatar name={state.name} status={state.status} size={state.size} badge={state.badge} />
<Avatar name="AV" status="busy" size="lg" badge="0">
    <img src="/sveltekit/img/avatar-1.png" alt="Thor Odinson" />
</Avatar>
<Avatar name="AV" size="xl" badge="0">
    <img src="/sveltekit/img/avatar-1.png" alt="Thor Odinson" />
    <img slot="sub" src="/sveltekit/img/avatar-1.png" alt="Thor Odinson" />
</Avatar>
</p>

<p>
<Knobs bind:state={state} config={{ size: { options: ['xs', 'sm', 'md',
'lg', 'xl'] }, status: { options: [undefined, 'online', 'busy', 'away'] },
name: { size: 20 }, badge: { size: 10 } }}/>
</p>

## Code

```sv
<script>
    import { Avatar } from 'svelte-spectre'
</script>

<Avatar name="AV" size="sm" badge />
<Avatar name="AV" status="online" badge />
<Avatar name="AV" status="busy" size="lg" badge="0">
    <img src="/img/avatar-1.png" alt="Thor Odinson" />
</Avatar>
<Avatar name="AV" size="xl" badge="0">
    <img src="/img/avatar-1.png" alt="Thor Odinson" />
    <img slot="sub" src="/img/avatar-1.png" alt="Thor Odinson" />
</Avatar>
```
