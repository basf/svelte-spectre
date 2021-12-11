<Spectre>
	<Sidebar
		extclose
		both
		bind:openLeft
		bind:openRight
		bind:show
		breakpoint={$page.path.includes('docs') ? 'xl' : Infinity}
	>
		<header class:bg-gray={!$page.path.includes('docs')}>
			<Navbar>
				<nav slot="left">
					{#if !show}
						<div class="ml-2">
							<IconButton icon="menu" on:click={() => (openLeft = !openLeft)} />
						</div>
					{/if}
				</nav>

				<IconButton slot="center" size="xl" iconSize="3x" color="dark" href={`${base}/`}>
					<Xray />
				</IconButton>

				<nav class="d-flex mr-2" slot="right">
					{#if !show && metadata?.api}
						<div class="mr-2">
							<Button on:click={() => (openRight = !openRight)}>Api</Button>
						</div>
					{/if}
					<div class="mr-2">
						{#if $page.path.split('/').filter(Boolean).length > 1}
							<IconButton icon="edit" href={docLink} target="_blank" />
						{:else}
							<IconButton size="sm" iconSize="2x" href={repo} target="_blank">
								<GitHub />
							</IconButton>
						{/if}
					</div>
				</nav>
			</Navbar>
		</header>

		<nav id="sidebar" slot="sidebarLeft" class="m-2">
			<h5><a href={`${base}/`} on:click={() => (openLeft = false)}>Svelte-spectre</a></h5>
			{#if links}
				{#each Object.entries(links) as [key, value], i}
					{#if key === 'root'}
						<Menu nav>
							{#each value as { path, metadata: { title } }, i}
								<li class="menu-item">
									<a
										sveltekit:prefetch
										href={setLink(base, path)}
										class:active={activeLink($page.path, path)}
										on:click={() => (openLeft = false)}>{title}</a
									>
								</li>
							{/each}
						</Menu>
					{:else}
						<Accordion group="nav" toggled opened={openedAccordion($page.path, key, i)}>
							<h5 class="header" slot="header">{key.replace(/_|-|[0-9]/g, ' ')}</h5>
							<Menu nav>
								{#each value as { path, metadata: { title } }, i}
									<li class="menu-item">
										<a
											sveltekit:prefetch
											href={setLink(base, path)}
											class:active={activeLink($page.path, path)}
											on:click={() => (openLeft = false)}>{title}</a
										>
									</li>
								{/each}
							</Menu>
						</Accordion>
					{/if}
				{/each}
			{/if}
			<IconButton size="sm" iconSize="2x" href={repo} target="_blank">
				<GitHub />
			</IconButton>
		</nav>

		<main class:px-2={$page.path.includes('docs')}>
			<slot />
		</main>

		<svelte:fragment slot="sidebarRight">
			{#if metadata?.api}
				<article class="p-2 mx-2">
					<h4>API {metadata.title}</h4>
					<dl>
						{#each metadata.api as api}
							<dt class="text-normal pt-2">
								{#if api.title}
									<code class="text-bold">
										{api.title}
									</code><br />
								{/if}
								{#if api.description}
									<small>{api.description}</small>
								{/if}
							</dt>
							{#if api.variables}
								<dd>
									<pre class="code mt-0"><code class="code">{api.variables}</code
										></pre>
								</dd>
							{/if}
						{:else}
							<dt class="text-normal">
								<blockquote>👨🏻‍💻 in progress</blockquote>
							</dt>
						{/each}
					</dl>
				</article>
			{/if}
		</svelte:fragment>

		<footer class="text-center p-2">&copy; {new Date().getFullYear()} BASF SE</footer>
	</Sidebar>

	<Toaster />
</Spectre>

<svelte:head>
	<title>Svelte-Spectre: {title}</title>
</svelte:head>

<svelte:window bind:innerHeight={windowHeight} />

<script lang="ts" context="module">
	const allMd = import.meta.glob('./**/*.md');
	let body = [];

	for (let path in allMd) {
		body.push(
			allMd[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export async function load({ page, fetch }) {
		const mds = await Promise.all(body);
		const links = mds.reduce((accumulator: Links, current: Link) => {
			const key: string = current.path.split('/')[2];
			if (key.includes('.md')) return { ...accumulator, ['root']: [current] };
			return {
				...accumulator,
				[key]: accumulator[key] ? [...accumulator[key], current] : [current],
			};
		}, {});
		const metadata = getMeta(page.path) || null;
		const title = metadata?.title;

		function getMeta(path: string) {
			const parts = path.split('/').filter(Boolean);
			const category = parts[1];
			const page = parts[2];

			return links[category]?.find((l) => l.path.includes(page)).metadata;
		}
		return {
			props: { links, metadata, title },
		};
	}

	interface Meta {
		file: string;
		title: string;
		config?: any;
		api?: Api[];
	}

	interface Api {
		title?: string;
		variables?: string;
		description?: string;
	}

	interface Link {
		metadata: Meta;
		path: string;
	}
	interface Links {
		[key: string]: Link[];
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { browser } from '$app/env';
	import { Accordion, Button, IconButton, Menu, Navbar, Sidebar, Spectre, Toaster } from '$lib';
	import Xray from '$assets/b-science.svg';
	import GitHub from '$assets/github.svg';

	let openLeft = false,
		openRight = false,
		show = false,
		repo = 'https://github.com/tilde-lab/svelte-spectre/',
		windowHeight = 0;

	$: browser &&
		document?.documentElement.style.setProperty('--window-height', `${windowHeight}px`);
	$: docLink = `${repo}tree/master/src/routes${$page.path.replace(/\/$/, '')}.md`;

	export let links: Links,
		metadata: Meta,
		title: string = 'Svelte-Spectre';

	const openedAccordion = (path: string, key: string, i: number) =>
		path.includes(key.replace(' ', '_'));
	const activeLink = (page: string, path: string) =>
		page.replace(/\/$/, '') === path.replace(/\.|md/g, '');
	const setLink = (base: string, path: string) => base + path.replace(/\.|md/g, '');
</script>

<style lang="scss" global>
	@import 'app';
	nav#sidebar {
		@import 'spectre.css/src/menus';
		h5 {
			text-transform: capitalize;
			&.header {
				padding: 0;
				margin: 0 !important;
			}
		}
		.menu {
			&.menu-nav {
				padding-top: 0;
			}
			.menu-item > a {
				color: $gray-color-dark;
				// font-size: 0.75rem;
				text-decoration: none;
				&.active {
					color: $primary-color;
				}
			}
		}
	}
	html,
	body,
	.spectre {
		height: 100%;
		min-height: 100%;
		// min-height: var(--window-height, 100vh);
		// min-height: calc(100vh - env(safe-area-inset-bottom));
		// padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
		// 	env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
	}
	.off-canvas {
		// height: auto !important;
		// min-height: 100%;
		// min-height: var(--window-height, 100vh);
		// min-height: calc(100vh - env(safe-area-inset-bottom) - env(safe-area-inset-top));
		.off-canvas-sidebar {
			@media screen and (max-width: 450px) {
				max-width: 80vw !important;
			}
		}
		.off-canvas-content {
			// height: auto !important;
			// min-height: 100%;
			display: flex;
			flex-flow: column nowrap;
			header {
				position: sticky;
				top: 0;
				z-index: $zindex-2;
				background: white;
			}
			main {
				flex: 1 0 auto;
				// overflow-x: hidden;
				// h1 {
				// 	text-transform: capitalize;
				// }
			}
			footer {
				flex-shrink: 0;
				// top: calc(100vh - env(safe-area-inset-bottom) + env(safe-area-inset-top));
				// padding: 1em 1em calc(1em + env(safe-area-inset-bottom)) !important;
				// bottom: 0;
				// position: sticky;
			}
		}
		.off-canvas-sidebar-right {
			background: $light-color !important;
			border-left: 1px dashed $gray-color;
		}
	}
</style>
