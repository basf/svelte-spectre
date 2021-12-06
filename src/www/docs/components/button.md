---
file: button.md
title: Button
api:
    [
        {
            title: 'variant: Variant = "default"',
            description: 'Button variant',
            variables: 'default | link | primary | secondary | success | error',
        },
        {
            title: 'size: Size = "md"',
            description: 'Button size',
            variables: 'xs | sm | md | lg | xl | xxl',
        },
        {
            title: 'icon: Icons',
            description: 'Button icon',
            variables: 'arrow-up | arrow-right | arrow-down | arrow-left | upward | forward | downward | back | caret | menu | apps | more-horiz | more-vert | resize-horiz | resize-vert | plus | minus | cross | check | stop | shutdown | refresh | search | flag | bookmark | edit | delete | share | download | upload | copy | mail | people | message | photo | time | location | link | emoji | xray | home | circle-check | wifi | audio',
        },
        {
            title: 'shape: Shape = false',
            description: 'Button shape',
            variables: 'square | circle',
        },
        {
            title: 'state: State',
            description: 'Button state',
            variables: 'active | disabled | loading',
        },
        {
            title: 'block: boolean = false',
            description: 'Button block',
            variables: 'true | false',
        },
    ]
config:
    {
        Variants:
            {
                variant:
                    {
                        options:
                            [
                                'default',
                                'link',
                                'primary',
                                'secondary',
                                'success',
                                'error',
                            ],
                    },
            },
        Sizes: { size: { options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] } },
        Icons:
            {
                icon:
                    {
                        options:
                            [
                                'arrow-up',
                                'arrow-right',
                                'arrow-down',
                                'arrow-left',
                                'upward',
                                'forward',
                                'downward',
                                'back',
                                'caret',
                                'menu',
                                'apps',
                                'more-horiz',
                                'more-vert',
                                'resize-horiz',
                                'resize-vert',
                                'plus',
                                'minus',
                                'cross',
                                'check',
                                'stop',
                                'shutdown',
                                'refresh',
                                'search',
                                'flag',
                                'bookmark',
                                'edit',
                                'delete',
                                'share',
                                'download',
                                'upload',
                                'copy',
                                'mail',
                                'people',
                                'message',
                                'photo',
                                'time',
                                'location',
                                'link',
                                'emoji',
                                'xray',
                                'home',
                                'circle-check',
                                'wifi',
                                'audio',
                            ],
                    },
                shape: { options: ['square', 'circle'] },
            },
        States: { state: { options: [null, 'active', 'disabled', 'loading'] } },
        Groups: { block: { type: 'checkbox' } },
    }
---

<script>
    import {Button, ButtonGroup, Col, Divider, Grid, Icon, IconButton} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = {
        Variants: { variant: 'default' },
        Sizes: { size: 'xxl' },
        Icons: { icon: 'menu', shape: 'square' },
        States: { state: 'active' },
        Groups: { block: false },
    }
</script>

# {title}

Buttons include simple button styles for actions in different types and sizes.

<p>
    <Button>default button</Button> &nbsp;
    <Button variant="primary">primary button</Button> &nbsp;
    <Button variant="link">link button</Button> &nbsp;
</p>

Add the `btn` class to `<a>`, `<input>` or `<button>` elements for a default
button. There are classes `btn-primary` and `btn-link` for predefined primary
and link buttons.

```sv
<script>
    import {Button} from 'svelte-spectre'
</script>

<Button>default button</Button>
<Button variant="primary">primary button</Button>
<Button variant="link">link button</Button>
```

## Button variants

Add the `btn-success` or `btn-error` class for success (green) or error (red)
button color. If you need more button colors, please use button mixins to create
your own button color variants.

<p>
    <Button variant={state.Variants.variant}>{state.Variants.variant} button</Button> &nbsp;
    <Button variant="link">link button</Button> &nbsp;
    <Button variant="primary">primary button</Button> &nbsp;
    <!-- <Button variant="secondary">secondary button</Button> &nbsp; -->
    <Button variant="success">success button</Button> &nbsp;
    <Button variant="error">error button</Button> &nbsp;
</p>

<p>
    <Knobs bind:state={state.Variants} config={config.Variants}/>
</p>

```sv
<Button variant="success">default button</Button>
<Button variant="error">link button</Button>
```

## Button sizes

Add the `btn-sm` or `btn-lg` class for small or large button size. Also, you can
add the `btn-block` class for a full-width button.

<p>
    <Button size={state.Sizes.size}>{state.Sizes.size.toUpperCase()} button</Button> &nbsp;
    <Button size="xl">XL button</Button> &nbsp;
    <Button size="lg">LG button</Button> &nbsp;
    <Button size="md">MD button</Button> &nbsp;
    <Button size="sm">SM button</Button> &nbsp;
    <Button size="xs">XS button</Button> &nbsp;
</p>

<p>
    <Knobs bind:state={state.Sizes} config={config.Sizes}/>
</p>

```sv
<Button size="xxl">XXL button</Button>
<Button size="xl">XL button</Button>
<Button size="lg">LG button</Button>
<Button size="md">MD button</Button>
<Button size="sm">SM button</Button>
<Button size="xs">XS button</Button>
```

## Button icon

Please note that you could use the `btn-action` class for a square button, or
add another `s-circle` class for a round button, which is often used as a Float
Action Button (FAB).

<p>
    <IconButton icon={state.Icons.icon} shape={state.Icons.shape} variant="primary" size="lg"/> &nbsp;
    <IconButton icon="emoji" variant="primary"/> &nbsp;
    <IconButton icon="home" variant="primary" size="sm"/> &nbsp;
    <IconButton icon="flag" variant="primary" shape="circle" size="lg"/> &nbsp;
    <IconButton icon="location" variant="primary" shape="circle" /> &nbsp;
    <IconButton icon="shutdown" variant="primary" shape="circle" size="sm"/> &nbsp;
</p>

<p>
    <Knobs bind:state={state.Icons} config={config.Icons}/>
</p>

```sv
<IconButton icon="home" variant="primary" size="sm"/>
<IconButton icon="flag" variant="primary" shape="circle" size="lg"/>
```

<p>
    <Button variant="primary">Button &nbsp;<Icon icon="arrow-down" /></Button> &nbsp;
    <Button variant="primary" size="sm"><Icon icon="arrow-down" />&nbsp; Button</Button> &nbsp;
    <Button variant="primary" size="xs">Button &nbsp;<Icon icon="arrow-down" /></Button> &nbsp;
</p>

```sv
<Button variant="primary" size="sm"><Icon icon="arrow-down" />&nbsp; Button</Button>
<Button variant="primary" size="xs">Button &nbsp;<Icon icon="arrow-down" /></Button>
```

<h2 id="button-states">Button states <a href="#button-states">#</a></h2>

Add the `active` class for active button state style.

<p>
    <Button
        active={state.States.state === 'active'}
        disabled={state.States.state === 'disabled'}
        loading={state.States.state === 'loading'}>Default {state.States.state}</Button> &nbsp;
    <Button variant="primary" active={state.States.state === 'active'}
        disabled={state.States.state === 'disabled'}
        loading={state.States.state === 'loading'}>Primary {state.States.state}</Button> &nbsp;
    <Button variant="link" active={state.States.state === 'active'}
        disabled={state.States.state === 'disabled'}
        loading={state.States.state === 'loading'}>Link {state.States.state}</Button> &nbsp;
</p>

<p>
    <Knobs bind:state={state.States} config={config.States}/>
</p>

```sv
<Button active>default active</Button>
```

Add the `disabled` class or the `disabled` attribute for disabled button state
style.

<p>
    <Button disabled>default disabled</Button> &nbsp;
    <Button variant="primary" disabled>primary disabled</Button> &nbsp;
    <Button variant="link" disabled>link disabled</Button> &nbsp;
</p>

```sv
<Button disabled>default disabled</Button>
```

A button with the `loading` class can show loading indicator.

<p>
    <Button loading>default loading</Button> &nbsp;
    <Button variant="primary" loading>primary loading</Button> &nbsp;
    <Button variant="link" loading>link loading</Button> &nbsp;
</p>

```sv
<Button loading>default loading</Button>
```

## Button groups

If you want to use buttons as a group, add the `btn-group` class to the
container. You can add the `btn-group-block` class for a full-width button
group.

<p>
    <ButtonGroup block={state.Groups.block}>
        <Button>default button</Button>
        <Button variant="primary">primary button</Button>
        <Button variant="secondary">secondary button</Button>
    </ButtonGroup>
</p>

<p>
    <Knobs bind:state={state.Groups} config={config.Groups}/>
</p>

```sv
<ButtonGroup block>
    <Button>default button</Button>
    <Button variant="primary">primary button</Button>
    <Button variant="link">link button</Button>
</ButtonGroup>
```
