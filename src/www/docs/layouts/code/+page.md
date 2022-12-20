---
file: code.md
title: Code
---

<script>
    import { base } from '$app/paths';
    import {Button, Card, Code, Col, Divider, Grid} from '$lib'

    const CARDS = [
			{
				pos: 'top',
				col: '4',
				img: '1b9a004a-db27-45e4-b762-0fa21bc97277.webp',
				text: 'Lightweight (~10KB gzipped) starting point for your projects',
			},
			{
				pos: 'middle',
				col: '6',
				img: 'c2179403-954f-4f5d-82a4-3dfdeaba9597.webp',
				text: 'Flexbox-based, responsive and mobile-friendly layout',
			},
			{
				pos: 'bottom',
				col: '8',
				img: 'b64f151d-e194-497a-9b70-e15ffdd8730d.webp',
				text: 'Elegantly designed and developed elements and components',
			},
			{
				pos: 'middle',
				col: '10',
				img: '4603a846-4daf-4018-aa74-e3ab567a69fc.webp',
				text: 'Lightweight (~10KB gzipped) starting point for your projects',
			},
			{
				pos: 'top',
				col: '12',
				img: '04696e1a-eb5d-43b9-bb1d-d2ee117f4430.webp',
				text: 'Flexbox-based, responsive and mobile-friendly layout',
			},
		]
</script>

# {title}

Code is a flexible container. It is used for styling inline and multiline code snippets.

```sv
import { Code } from 'svelte-spectre'


<Code lang="js">

let binding = Function.prototype.call.bind(Function.prototype.bind);

</Code>
```

<Code lang="js">

let binding = Function.prototype.call.bind(Function.prototype.bind);

</Code>
