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
				img: 'macos-sierra.jpg',
				text: 'Lightweight (~10KB gzipped) starting point for your projects',
			},
			{
				pos: 'middle',
				col: '6',
				img: 'macos-sierra-2.jpg',
				text: 'Flexbox-based, responsive and mobile-friendly layout',
			},
			{
				pos: 'bottom',
				col: '8',
				img: 'osx-el-capitan.jpg',
				text: 'Elegantly designed and developed elements and components',
			},
			{
				pos: 'middle',
				col: '10',
				img: 'osx-yosemite.jpg',
				text: 'Lightweight (~10KB gzipped) starting point for your projects',
			},
			{
				pos: 'top',
				col: '12',
				img: 'osx-yosemite-2.jpg',
				text: 'Flexbox-based, responsive and mobile-friendly layout',
			},
		]
</script>

# {title}

> 🚧 Under construction

Code are flexible code containers.

<Code lang="js">console.log(code)</Code>
