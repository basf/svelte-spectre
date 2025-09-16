---
file: cifplayer.md
title: Cifplayer
api: [
{title: 'Cifplayer', description: 'Embeds the NanoShow CIF viewer from nanoshow.mpds.io in your Svelte app.', variables: 'None'},
]
---

<script>
		import {Cifplayer} from '$lib';
</script>

# Cifplayer

The `Cifplayer` component allows you to embed the interactive NanoShow CIF viewer from [nanoshow.mpds.io](http://nanoshow.mpds.io/) directly in your Svelte application. This is useful for visualizing crystal structures and CIF files in scientific and educational projects.

## Usage

```svelte
<Cifplayer />

<script>
    import { Cifplayer } from 'svelte-spectre';
</script>
```

## Features

-   Embeds the NanoShow CIF viewer via an iframe
-   Responsive width and fixed height (customizable)

## Example

<Cifplayer />

---

**Note:** The viewer is loaded from an external website. Ensure your users have internet access to use this feature.

```sv
<script>
	import {Cifplayer} from 'svelte-spectre'
</script>

<Cifplayer></Cifplayer>
```
