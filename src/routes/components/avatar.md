---
file: avatar.md
title: Avatar
config: { 
    size: { options: ['xs', 'sm', 'md', 'lg', 'xl'] }, 
    status: { options: [undefined, 'online', 'busy', 'away'] }, 
    badge: { size: 5 },
    name: { size: 12 }, 
    image: { options: [null, 'avatar-1.png', 'avatar-2.png', 'avatar-3.png', 'avatar-4.png', 'avatar-5.png'] } 
}
---

<script>
    import { Avatar } from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { size: 'md', status: 'online', name: 'Albert Einstein', image: null, badge: '0' }
</script>

# {title}

Avatars are user profile pictures.

<p>
    <Avatar name="AV" size="sm" badge />
    <Avatar name={state.name} status={state.status} size={state.size} badge={state.badge || true}>
        {#if state.image !== null}
            <img src="/sveltekit/img/{state.image}" alt="Thor Odinson" />
        {/if}
    </Avatar>
    <Avatar name="AV" status="busy" size="lg" badge="0">
        <img src="/sveltekit/img/avatar-1.png" alt="Thor Odinson" />
    </Avatar>
    <Avatar name="AV" size="xl" badge="0">
        <img src="/sveltekit/img/avatar-2.png" alt="Thor Odinson" />
        <img slot="sub" src="/sveltekit/img/avatar-3.png" alt="Thor Odinson" />
    </Avatar>
</p>

<p>
    <Knobs bind:state={state} {config}/>
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
    <img src="/img/avatar-2.png" alt="Thor Odinson" />
    <img slot="sub" src="/img/avatar-4.png" alt="Thor Odinson" />
</Avatar>
```
