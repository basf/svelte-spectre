---
file: icon.md
title: Icon
api:
    [
        {
            title: '<slot>: HTMLelement',
            description: '<svg>, <img>',
            variables: '<svg> | <img>',
        },
        {
            title: 'icon: Icons = ""',
            description: 'Icon icons',
            variables: 'arrow-up | arrow-right | arrow-down | arrow-left | upward | forward | downward | back | caret | menu | apps | more-horiz | more-vert | resize-horiz | resize-vert | plus | minus | cross | check | stop | shutdown | refresh | search | flag | bookmark | edit | delete | share | download | upload | copy | mail | people | message | photo | time | location | link | emoji | xray | home | circle-check | wifi | audio',
        },
        {
            title: 'size: Size = "1x"',
            description: 'Icon size',
            variables: '1x | 2x | 3x | 4x',
        },
        {
            title: 'color: Color = ""',
            description: 'Icon color',
            variables: 'initial | primary | secondary | dark | gray | light | success | warning | error ',
        },
    ]
config:
    {
        icons:
            {
                icon:
                    {
                        options:
                            [
                                null,
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
                                'home',
                                'circle-check',
                                'wifi',
                                'audio',
                            ],
                    },
                size: { options: ['1x', '2x', '3x', '4x'] },
                color:
                    {
                        options:
                            [
                                'initial',
                                'primary',
                                'secondary',
                                'dark',
                                'gray',
                                'light',
                                'success',
                                'warning',
                                'error',
                            ],
                    },
            },
        svg:
            {
                svg: { options: [null, 'Basf', 'Xray', 'GitHub'] },
                size: { options: ['1x', '2x', '3x', '4x'] },
                color:
                    {
                        options:
                            [
                                'initial',
                                'primary',
                                'secondary',
                                'dark',
                                'gray',
                                'light',
                                'success',
                                'warning',
                                'error',
                            ],
                    },
            },
    }
---

<script>
    import {Button, Col, Grid, Hero, Icon, IconButton} from '$lib'
    import Knobs from '../../knobs.svelte'
    import Xray from '$assets/Xray.svg';
    import Basf from '$assets/BASF-invert.svg';
	import GitHub from '$assets/github.svg';

    let icons = {
        navigation: ['arrow-up', 'arrow-right', 'arrow-down', 'arrow-left', 'upward', 'forward', 'downward', 'back', 'caret', 'menu', 'apps', 'more-horiz','more-vert'],
        action: [
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
            'copy'
        ],
        object: [
            'mail',
            'people',
            'message',
            'photo',
            'time',
            'location',
            'link',
            'emoji',
            'home',
            'circle-check',
            'wifi',
            'audio'
        ]
    }, state = {
        icons: { icon: 'emoji', size: '2x', color: 'primary'},
        svg: {size: '4x', color: 'primary', svg: 'Basf'}
        },
         component = null

    $: switch (state.svg.svg) {
		case 'Basf':
			component = Basf
            state.icon = null
            break

        case 'Xray':
			component = Xray
            state.icon = null
            break

        case 'GitHub':
			component = GitHub
            state.icon = null
            break

		default:
            component = null
            break
	}
</script>

# {title}

Icons.css are single-element, responsive and pure CSS icons. You can include
spectre-icons.css located in the dist folder to your web `<head>` to have these
CSS icons.

<p>
    {#each Object.values(icons).flat() as icon}
        <span
            class="p-2 m-2 d-inline-block c-hand tooltip"
            data-tooltip={icon}
            on:click={() => state.icons.icon = icon}>
            <Icon
                icon={icon}
                size={icon === state.icons.icon && state.icons.size}
                color={icon === state.icons.icon && state.icons.color}>
            </Icon>
        </span>
    {/each}
</p>

<p>
    <Knobs bind:state={state.icons} config={config.icons}/>
</p>

```sv
<script>
    import { Icon } from 'svelte-spectre'
</script>

<Icon icon="emoji" size="2x" color="primary" />
```

## SVG

<p>
    <Icon icon={state.svg.icon} size={state.svg.size} color={state.svg.color}>
        <svelte:component this={component}/>
    </Icon>
</p>

<p>
    <Knobs bind:state={state.svg} config={config.svg}/>
</p>

```sv
<script>
    import Basf from 'basf.svg'
</script>

<Icon size="4x" color="primary">
    <Basf />
    <!-- or -->
    <svelte:component this={Basf}/>
    <!-- or -->
    <svg name="basf"/>
    <!-- or -->
    <img src="basf.svg" />
</Icon>
```

## Navigation

<Grid stack>
    {#each icons.navigation as icon}
        <Col col="3" sm="4" xs="6">
            <IconButton icon={icon} variant="primary" />&nbsp; {icon}
        </Col>
    {/each}
</Grid>

## Action

<Grid stack>
    {#each icons.action as icon}
        <Col col="3" sm="4" xs="6">
            <IconButton icon={icon} size="lg" variant="primary" />&nbsp; {icon}
        </Col>
    {/each}
</Grid>

## Object

<Grid stack>
    {#each icons.object as icon}
        <Col col="3" sm="4" xs="6">
            <IconButton icon={icon} size="lg" variant="primary" />&nbsp; {icon}
        </Col>
    {/each}
</Grid>
