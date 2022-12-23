---
file: panel.md
title: Panel
api: [
    {title: '<slot name="header">: HTMLelement | SvelteComponent', description: 'Header in Panel', variables: 'HTMLelement | SvelteComponent'},
	{title: '<slot name="nav">: HTMLelement | SvelteComponent', description: 'Nav in Panel', variables: 'HTMLelement | SvelteComponent'},
	{title: '<slot name="body">: HTMLelement | SvelteComponent', description: 'Body in Panel', variables: 'HTMLelement | SvelteComponent'},
	{title: '<slot name="footer">: HTMLelement | SvelteComponent', description: 'Footer in Panel', variables: 'HTMLelement | SvelteComponent'}
]
---

<script>
    import {Button, Panel, Icon} from '$lib'
</script>

# {title}

Panel is a flexible view container with an auto-expand content section. Panel is similar to the card component with more flexibility. For example, it can be used to create a conversation layout.

```sv
<script>
    import {Button, Panel, Icon} from '$lib'
</script>

<Panel>
    <div slot="header">
        <Icon icon="emoji" size="1x" color="primary" />
        Svelte-Spectre
    </div>
    <div slot="nav">
        <strong>About</strong>
    </div>
    <div slot="body">
        A Lightweight, Responsive and Modern UI-kit based on spectre.css and powered by Svelte and SvelteKit
    </div>
    <p slot="footer">
        © 2022 — 2023 BASF SE
    </p>
</Panel>

```

<Panel>
    <div slot="header">
        <Icon icon="emoji" size="1x" color="primary" />
        Svelte-Spectre
    </div>
    <div slot="nav">
        <strong>About</strong>
    </div>
    <div slot="body">
        A Lightweight, Responsive and Modern UI-kit based on spectre.css and powered by Svelte and SvelteKit
    </div>
    <p slot="footer">
        © 2022 — 2023 BASF SE
    </p>
</Panel>
