---
file: chip.md
title: Chip
config:
    {
        text: { size: 10 },
        active: { type: 'checkbox' },
        closable: { type: 'checkbox' },
        avatar: { type: 'checkbox' },
        name: { size: 10 },
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
    }
---

<script>
    import { base } from '$app/paths';
    import {Chip, Hero} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = {
        text: 'Chip',
        active: false,
        closable: false,
        avatar: false,
        name: 'Albert Einstein',
        status: 'online',
        image: null,
        }

        $: console.log(state.name, $$slots.avatar)
</script>

<Hero size="xs">

# {title}

Chips are complex entities in small blocks. Add a container element with the
chip class. And add child text element, buttons or avatars with the avatar
class.

<p>
    <Chip
        active={state.active}
        closable={state.closable}
        avatar={state.avatar}
        name={state.name}
        status={state.status}>
        <svelte:fragment slot="avatar">
            {#if state.image}
                <img src="{base}/img/{state.image}" alt="Thor Odinson" />
            {/if}
        </svelte:fragment>
        {state.text}
    </Chip>
    <Chip active>Active</Chip>
    <Chip name="CP" avatar>Avatar</Chip>
    <Chip name="CP" status="online" avatar>Online</Chip>
    <Chip name="CP" status="busy" avatar>Busy</Chip>
    <Chip name="CP" status="busy" closable avatar>
    	<img slot="avatar" src="{base}/img/avatar-1.png" alt="Thor Odinson" />Closable
    </Chip>
<p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import {Chip} from 'svelte-spectre'
</script>

<Chip>Chip</Chip>
<Chip active>Active</Chip>
<Chip initial="CP">Avatar</Chip>
<Chip initial="CP" status="online">Online</Chip>
<Chip initial="CP" status="busy">Busy</Chip>
<Chip initial="CP" status="busy" closable>
    <img slot="avatar" src="{base}/img/avatar-1.png" alt="Thor Odinson" />Closable
</Chip>
```

</Hero>
