---
file: badge.md
title: Badge
config: { 
    size: { options: ['xs', 'sm', 'md', 'lg', 'xl'] }, 
    status: { options: [undefined, 'online', 'busy', 'away'] }, 
    badged: { type: 'checkbox' },
    badge: { size: 5 },
    name: { size: 12 }, 
    image: { options: [null, 'avatar-1.png', 'avatar-2.png', 'avatar-3.png', 'avatar-4.png', 'avatar-5.png'] } 
}
---

<script>
    import {badge, Badge, Button, Divider} from '$lib'
    import Knobs from '../_knobs.svelte'

    let bdg = '0'

    let state = { size: 'md', status: 'online', name: 'Albert Einstein', image: null, badge: '0', badged: false }
</script>

# {title}

Badges are often used as unread number indicators.

<div class="docs-demo columns">
    <div class="column col-3 col-xs-6"><span use:badge={state.badged}>Notifications</span></div>
    <div class="column col-3 col-xs-6"><span use:badge={'8'}>Notifications</span></div>
    <div class="column col-3 col-xs-6"><span use:badge={'88'}>Notifications</span></div>
    <div class="column col-3 col-xs-6"><span use:badge={'888'}>Notifications</span></div>
</div>

Add the `badge` class to non self closing elements. And add the `data-badge`
attribute to define the content of a badge. The badge will appear in the
top-right direction of the element.

If there is no `data-badge` or the attribute is not specified, the badge will
appear as a dot.

<div class="docs-demo columns">
    <Badge offset="mr-1">default Badge</Badge>
    <Badge color="primary" offset="mr-1" rounded>primary rounded</Badge>
    <Badge color="secondary" offset="mr-1">secondary Badge</Badge>
    <Badge color="success" offset="mr-1" rounded>success rounded</Badge>
    <Badge color="warning" offset="mr-1">warning Badge</Badge>
    <Badge color="error" rounded>error rounded</Badge>
</div>

Badges support `button` and `avatars` elements as well.

<Button variant="primary" badge>primary</Button>
<Button variant="secondary" badge="0">secondary</Button>
<Button variant="success" badge="1">success</Button> <Button variant="error"
badge={bdg} on:click={(e) => (bdg = 'e.target')}>error</Button>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<span class="badge">
  Notifications
</span>

<span class="badge" data-badge="8">
  Notifications
</span>

<button class="btn badge" data-badge="8">
  Button
</button>

<figure class="avatar badge" data-badge="8" data-initial="YZ">
  <img src="img/avatar-3.png" alt="YZ">
</figure>
```
