---
file: installation.md
title: Installation
---

<script>
    import {Button} from '$lib'
</script>

# {title}

There are 5 ways to get started with Spectre CSS framework in your projects. You
can either install manually, from CDN or use package managers.

## Install manually

Download the compiled and minified Spectre CSS file (core ~10KB min+gzip):

<p><Button variant="primary">Download</Button></p>

Include `spectre.css` located in **/dist** in your website or Web app . Also,
you can add `spectre-icons.css` and `spectre-exp.css` accordingly.

```html
<!-- comment -->
<link rel="stylesheet" href="spectre.min.css" />
<link rel="stylesheet" href="spectre-exp.min.css" />
<link rel="stylesheet" href="spectre-icons.min.css" />
```

## Install from CDN

Alternatively, you can use the unpkg or cdnjs CDN to load compiled Spectre.css.

```html
<link
    rel="stylesheet"
    href="https://unpkg.com/spectre.css/dist/spectre.min.css"
/>
<link
    rel="stylesheet"
    href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
/>
<link
    rel="stylesheet"
    href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
/>
```

## Install with NPM

```sh
npm install spectre.css --save
```
