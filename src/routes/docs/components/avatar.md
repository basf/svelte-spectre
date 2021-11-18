---
file: avatar.md
title: Avatar
config: {
        name: { size: 12 },
        size: { options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        status: { options: [null, 'online', 'busy', 'away', 'offline'] },
        image:
            {
                options:
                    [
                        null,
                        'avatar-1.png',
                        'avatar-2.png',
                        'avatar-3.png',
                        'avatar-4.png',
                        'avatar-5.png',
                    ],
            },
        sub:
            {
                options:
                    [
                        null,
                        'avatar-1.png',
                        'avatar-2.png',
                        'avatar-3.png',
                        'avatar-4.png',
                        'avatar-5.png',
                    ],
            },
        # badged: { type: 'checkbox' },
        badge: { size: 5 },
    }
---

<script>
    import { Avatar } from '$lib'
    import { base } from '$app/paths';
    import Knobs from '../_knobs.svelte'

    let state = { size: 'xl', status: 'online', name: 'Albert Einstein', image: null, sub: null, badge: '0', badged: true }, subImg = null, img

    function createSubImg(state) {
        subImg = new Image(1,1)
        subImg.title = 'Thor Odinson'
        subImg.slot = 'sub'
        subImg.src = `${base}/img/${state.sub}`
    }

    $: state.sub && (img?.setAttribute('slot', 'sub'), createSubImg(state))

    $: console.log(subImg)
</script>

# {title}

Avatars are user profile pictures or similar elements presenting their status
(e.g. online or offline).

<p>
    <Avatar name={state.name} status={state.status} size={state.size} badge={state.badge}>
        {#if state.image}
            <img src="{base}/img/{state.image}" alt="Thor Odinson" />
        {/if}
        <svelte:fragment slot="sub" let:subclass>
            {#if state.sub}
                <img class={subclass} src="{state.sub && `${base}/img/${state.sub}`}" alt="Thor Odinson" />
            {/if}
        </svelte:fragment>
    </Avatar> &nbsp;
    <Avatar name="AV" status="busy" size="lg" badge="0">
        <img src="{base}/img/avatar-1.png" alt="Thor Odinson" />
    </Avatar> &nbsp;
    <Avatar name="AV" size="md" badge="0">
        <img src="{base}/img/avatar-2.png" alt="Thor Odinson" />
        <img slot="sub" let:subclass class={subclass} src="{base}/img/avatar-3.png" alt="Thor Odinson" />
    </Avatar> &nbsp;
    <Avatar name="AV" size="xs" badge /> &nbsp;
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

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
