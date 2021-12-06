---
file: toast.md
title: Toast
api:
    [
        {
            title: 'type: Colors = "initial"',
            description: 'Toast type',
            variables: 'initial | primary | success | warning | error',
        },
        {
            title: 'icon: Icons = ""',
            description: 'Toast icon',
            variables: 'any icon',
        },
        {
            title: 'closable: boolean = true',
            description: 'Toast closable',
            variables: 'true | false',
        },
        {
            title: 'timeout: number = 0',
            description: 'Toast timeout in ms',
            variables: 'any number',
        },
        {
            title: 'visible: boolean = true',
            description: 'Toast visible',
            variables: 'true | false',
        },
        {
            title: 'invert: boolean = false',
            description: 'Toast invert',
            variables: 'true | false',
        },
        {
            title: 'reverse: boolean = false',
            description: 'Toast reverse',
            variables: 'true | false',
        },
    ]
config:
    {
        type:
            { options: ['initial', 'primary', 'success', 'warning', 'error'] },
        icon:
            {
                options:
                    [
                        '',
                        'arrow-up',
                        'arrow-right',
                        'arrow-down',
                        'arrow-left',
                        'upward',
                        'forward',
                        'downward',
                        'back',
                        'caret',
                    ],
            },
        closable: { type: 'checkbox' },
        timeout: { type: 'number', min: 0, max: 10000, step: 1000, size: 10 },
        visible: { type: 'checkbox' },
        invert: { type: 'checkbox' },
        reverse: { type: 'checkbox' },
        clearall: { type: 'button', label: '', value: 'clearAll' },
    }
---

<script>
    import {Button, ButtonGroup, Col, Divider, Grid,IconButton, Toast, toast} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { type: 'initial', icon: 'arrow-right', closable: true, timeout: 0, visible: true, invert: false, reverse: false, clearall: toast.clear }

    let positions = [
			'top_left',
			'top_center',
			'top_right',
			'center_left',
			'center_center',
			'center_right',
			'bottom_left',
			'bottom_center',
			'bottom_right',
		],
		arrows = ['↖', '↑', '↗', '←', '☩', '→', '↙', '↓', '↘']
</script>

# {title}

Toasts are used to show alert or information to users.

Add a container element with the toast class. You can add any text within the
container, and even icons. You may also add a close button with the btn-clear
class if you need.

<p>
    <Grid stack>
        <Col>
            <h5>Single</h5>
            <Grid>
                <Col xs="12">
                {#if state.visible}
                    <Toast
                        bind:visible={state.visible}
                        type={state.type}
                        icon={state.icon}
                        closable={state.closable}
                        timeout={state.timeout}
                        invert={state.invert}
                        reverse={state.reverse}>
                        <h5>header</h5>
                        I'm pure static Toast
                    </Toast>
                    {/if}
                </Col>
            </Grid>
        </Col>
        <Divider align="vertical" />
        <Col xs="12">
            <h5>Toaster</h5>
            <div class="toaster-grid">
                <ButtonGroup>
                    {#each positions as pos, i}
                        <IconButton
                            variant="default"
                            on:click={(e) => toast.send({
                                msg: pos, pos: pos,
                                timeout: state.timeout,
                                type: state.type,
                                icon: state.icon,
                                closable: state.closable,
                                invert: state.invert,
                                reverse: state.reverse
                            })}
                            >{arrows[i]}</IconButton
                        >
                    {/each}
                </ButtonGroup>
            </div>
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Toast, Toaster, toast } from 'svelte-spectre'

    let visible = true

    function sendToast() {
        toast.send({
            msg: 'msg', pos: 'pos',
            timeout: 'timeout',
            type: 'type',
            icon: 'icon',
            closable: true,
            invert: false,
            reverse: false
        })
    }
</script>

{#if visible}
    <Toast
        bind:visible
        type="initial"
        icon="arrow-right"
        timeout={3000}
        closable={true} />
{/if}

<button on:click={sendToast}>sendToast</button>
<Toaster />
```

<style lang="scss">
.toaster-grid {
    :global(.btn-group) {
        gap: 0.25rem;
    }
    :global(.btn-group > button) {
        flex: 1 0 30%;
    }
}
</style>
