---
file: card.md
title: Card
---

<script>
    import { base } from '$app/paths';
    import {Button, Card, Col, Divider, Grid} from '$lib'

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

Cards are flexible content containers.

<Grid offset="my-2" oneline align="">
    <Divider align="vertical" text="LEFT" />
    {#each CARDS as { col, pos, img, text }}
        <Col {col}>
            <Card {pos}>
                <img class="img-responsive" src="{base}/img/{img}" alt="img" slot="img" />
                <div slot="title" class="h5">Title</div>
                <div slot="subtitle" class="text-gray">SubTitle</div>
                <p>{text}</p>
                <svelte:fragment slot="footer">
                    <Button variant="primary" href="#cards">Primary</Button>
                    <Button variant="link" href="#cards">Link</Button>
                </svelte:fragment>
            </Card>
        </Col>
    {/each}
    <Divider align="vertical" text="RIGHT" />
</Grid>

> 🚧 Under construction
