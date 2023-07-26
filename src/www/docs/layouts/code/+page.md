---
file: code.md
title: Code
api: [
	{title: 'lang: String', description: 'Set program language', variables: 'js | php | go | rust | python ...'},
]
---

<script>
    import { Code } from '$lib'
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
