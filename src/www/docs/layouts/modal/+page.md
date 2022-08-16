---
file: modal.md
title: Modal
api:
    [
        {
            title: '<slot>: HTMLelement | SvelteComponent',
            description: 'Modal body',
            variables: 'HTMLelement | SvelteComponent',
        },
        {
            title: '<slot name="header">: HTMLelement | SvelteComponent',
            description: 'Modal header',
            variables: 'HTMLelement | SvelteComponent',
        },
        {
            title: '<slot name="footer">: HTMLelement | SvelteComponent',
            description: 'Modal footer',
            variables: 'HTMLelement | SvelteComponent',
        },
        {
            title: 'size: Size = "md"',
            description: 'Modal size',
            variables: 'sm | md | lg | fs',
        },
        {
            title: 'open: boolean = false',
            description: 'Modal open state',
            variables: 'true | false',
        },
        {
            title: 'custom: boolean = true',
            description: 'Modal custom',
            variables: 'true | false',
        },
        {
            title: 'on:close={() => event}',
            description: 'Modal close event',
            variables: 'true | false',
        },
    ]
config:
    {
        size: { options: ['sm', 'md', 'lg', 'fs'] },
        open: { type: 'checkbox' },
        custom: { type: 'checkbox' },
    }
---

<script>
    import {Button, Modal} from '$lib'
    import Knobs from '../../_knobs.svelte'

    let state = {size: 'md', open: false, custom: false}
</script>

# {title}

Modals are flexible dialog prompts.

<p>
    <Button variant="primary" on:click={() => (state.open = !state.open)}>Open Modal</Button>
    <Modal
        bind:open={state.open}
        size={state.size}
        custom={state.custom}
        on:close={() => state.custom = false}>
        <h3 slot="header">Modal header</h3>
        <div class="content">
            <p>This is the content inside the modal.</p>
            <h4>Lorem ipsum</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
            dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus.
            Etiam euismod ornare consequat.
            </p>
            <p> Climb leg rub face on everything give attitude nap all day for under the
            bed. Chase mice attack feet but rub face on everything hopped up on goofballs.
            </p>
            <h4>Cupcake ipsum</h4>
            <p> Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw
            topping. Chupa chups apple pie carrot cake chocolate cake caramels.
            </p>
            <p> De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor
            fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless
            creaturas optic nerve.
            </p>
            <h4>Candy ipsum</h4>
            <p> Efficiently unleash cross-media information without cross-media value.
            Quickly maximize timely deliverables for real-time schemas. Dramatically
            maintain clicks-and-mortar.
            </p>
            <p> Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and
            cheese danish fontina smelly cheese who moved my cheese cow.
            </p>
        </div>
        <p slot="footer"><Button variant="primary" on:click={() => (state.custom = false, state.open = false)}>Close Modal</Button></p>
    </Modal>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import {Button, Modal} from 'svelte-spectre'

    let open = false
</script>

<Button on:click={() => open = !open}>Open Modal</Button>

<Modal bind:open>
    <h3 slot="header">Modal header</h3>
    <div class="content">Modal content</div>
    <p slot="footer">Modal footer</p>
</Modal>
```
