---
file: pagination.md
title: Pagination
api: [
	{title: 'page: number', description: 'Active page number', variables: 'any number'},
	{title: 'total: number', description: 'Total items', variables: 'any number'},
	{title: 'limit: number', description: 'Limit items per page', variables: 'any number'},
	{title: 'rest: number', description: 'Links to pages to be shown', variables: 'any number'},
	{title: 'perpage: boolean', description: 'Select limit per page', variables: 'true | false'},
]
config:
    {
        page: { type: 'number', size: 10, min: 1, max: 150 },
        total: { type: 'number', size: 10, min: 10, max: 1500 },
        limit: { type: 'number', size: 10, min: 10, max: 100, step: 10 },
        rest: { type: 'number', size: 10, min: 0, max: 10 },
		perpage: { type: 'checkbox' }
    }
---

<script>
    import {Button, Hero, Pagination} from '$lib'
	import Knobs from '../../knobs.svelte'

	let state = {
        page: 75,
        total: 1500,
        limit: 10,
        rest: 10,
        perpage: true
        }
</script>

# {title}

Add a container element with the pagination class. And add child elements with
the page-item class. The page-item with the active class will be highlighted.
You can add the disabled class to the page-item to have unclickable page links.

<p>
	<Pagination
		bind:page={state.page}
		total={state.total}
		limit={state.limit}
		rest={state.rest}
		perpage={state.perpage} />
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Pagination } from 'svelte-spectre'
    let page
</script>

<Pagination total={1500} limit={10} rest={4} perpage={true} bind:page />
```
