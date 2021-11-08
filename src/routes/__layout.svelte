<Spectre>
	<Aside extclose bind:open bind:show>
		<header>
			<Navbar>
				<nav slot="left">
					{#if !show}
						<div class="ml-2">
							<IconButton icon="menu" on:click={() => (open = !open)} />
						</div>
					{/if}
				</nav>

				<IconButton slot="center" size="xxl" iconSize="4x" color="dark" href={base}>
					<Xray />
				</IconButton>

				<nav slot="right">
					<div class="mr-2">
						<IconButton
							size="sm"
							iconSize="2x"
							on:click={(e) =>
								toast.success({ msg: 'msg', timeout: 0, pos: 'bottom_right' })}
							><GitHub /></IconButton
						>
					</div>
				</nav>
			</Navbar>
		</header>

		<nav slot="sidebar" class="m-2">
			<h3><a href={base}>SvelteSpectre</a></h3>
			{#each Object.entries(links) as [key, value], i}
				<Accordion opened={$page.path.includes(key.replace(' ', '_'))}>
					<strong slot="title">{key.replace(/_|-|[0-9]/g, ' ')}</strong>
					<ul class="menu menu-nav">
						{#each value as { path, metadata: { title } }, i}
							<li class="menu-item">
								<a
									href={base + path.replace(/\.|md/g, '')}
									class:active={$page.path === path.replace(/\.|md/g, '') + '/'}
									on:click={() => ((active = { [key]: i }), (open = false))}
									>{title}</a
								>
							</li>
						{/each}
					</ul>
				</Accordion>
			{/each}
		</nav>

		<main>
			<Container><slot /></Container>
		</main>
	</Aside>

	<Toaster />
</Spectre>

<script lang="ts" context="module">
	const allMd = import.meta.glob('./**/*.md');

	let body = [];

	for (let path in allMd) {
		body.push(
			allMd[path]().then(({ metadata }) => {
				// console.log(path.match('[^/]+(?=/$|$)'));
				// console.log(path.split('/')[1]);
				return { path, metadata };
			})
		);
	}

	export async function load() {
		const posts = await Promise.all(body);
		// console.log('posts', posts);
		const links = posts.reduce((a, c) => {
			const key = c.path.split('/')[1];
			return { ...a, [key]: a[key] ? [...a[key], c] : [c] };
		}, {});
		// console.log('links', links);
		return {
			props: { posts, links },
		};
	}

	// $: console.log(allMd, body);
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import '../app.scss';
	import { Accordion, Aside, Container, IconButton, Navbar, Spectre, Toaster, toast } from '$lib';
	import Xray from '$assets/b-science.svg';
	import GitHub from '$assets/github.svg';
	import XrayUrl from '$assets/b-science.svg?url';
	import XraySrc from '$assets/b-science.svg?src';

	let open = false,
		show = false,
		active = {};

	export let posts, links;
	// $: console.log(posts, links);

	const href = (key: string, link: string) =>
		`/${key.replace(' ', '_').toLowerCase()}/${link.replace(' ', '_').toLowerCase()}`;

	$: console.log(links, $page.path);

	const menu = {
		['getting started']: ['Installation', 'Custom version', 'Browser support'],
		['layouts']: [
			'Aside',
			'Card',
			'Container',
			'Empty',
			'Figure',
			'Form',
			'Grid',
			'Hero',
			'Modal',
			'Navbar',
			'Panel',
			'Tile',
		],
		['components']: [
			'Accordion',
			'Avatar',
			'Badge',
			'Breadcrumbs',
			'Button',
			'Checkbox',
			'Chip',
			'Divider',
			'Icon',
			'Input',
			'Pagination',
			'Progress',
			'Radio',
			'Range',
			'Select',
			'Steps',
			'Switch',
			'Tabs',
			'Toast',
			'Transition',
		],
	};
</script>

<style lang="scss">
	:global {
		@import 'spectre.css/src/codes';
		@import 'code';
		.off-canvas .off-canvas-sidebar {
			min-width: 12rem !important;
			.accordion .menu .menu-item > a {
				color: $gray-color-dark;
				font-size: 0.72rem;
			}
		}
	}

	@import 'spectre.css/src/menus';
	@import 'spectre.css/src/icons';

	header {
		position: sticky;
		top: 0;
		z-index: $zindex-2;
		background: white;
	}
	main {
		padding: 0 0.5rem 2rem;
	}
	h1 {
		text-transform: capitalize;
	}
	strong {
		text-transform: capitalize;
	}
</style>
