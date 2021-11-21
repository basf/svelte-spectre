<Spectre>
	<Aside
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
						<IconButton size="sm" iconSize="2x" on:click><GitHub /></IconButton>
					</div>
				</nav>
			</Navbar>
		</header>

		<nav id="sidebar" slot="sidebarLeft" class="m-2">
			<h3><a href={`${base}/`}>SvelteSpectre</a></h3>
			{#each Object.entries(links) as [key, value], i}
				<Accordion toggled opened={openedAccordion($page, key, i)}>
					<strong slot="title">{key.replace(/_|-|[0-9]/g, ' ')}</strong>
					<Menu nav>
						{#each value as { path, metadata: { title } }, i}
							<li class="menu-item">
								<a
									sveltekit:prefetch
									href={setLink(base, path)}
									class:active={activeLink($page, path)}
									on:click={() => (openLeft = false)}>{title}</a
								>
							</li>
						{/each}
					</Menu>
				</Accordion>
			{/each}
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
								<code class="text-bold">
									{api.title}
								</code>
								{`— ${api.description}` || ''}
							</dt>
							{#if api.variables}
								<dd>
									<pre
										class="code mt-0"><code class="code">{api.variables}</code></pre>
								</dd>
							{/if}
						{:else}
							<dt>API in progress</dt>
						{/each}
					</dl>
				</article>
			{/if}
		</svelte:fragment>

		<footer class="text-center p-2">© {new Date().getFullYear()}</footer>
	</Aside>

	<Toaster />
</Spectre>

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

	export async function load() {
		const mds = await Promise.all(body);
		const links = mds.reduce((a, c) => {
			const key = c.path.split('/')[2];
			return { ...a, [key]: a[key] ? [...a[key], c] : [c] };
		}, {});
		return {
			props: { links },
		};
	}

	interface Meta {
		file: string;
		title: string;
		config: any;
		api: Api[];
	}

	interface Api {
		title: string;
		variables: string;
		description: string;
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { Accordion, Aside, Button, IconButton, Menu, Navbar, Spectre, Toaster } from '$lib';
	import Xray from '$assets/b-science.svg';
	import GitHub from '$assets/github.svg';

	let openLeft = false,
		openRight = false,
		show = false,
		metadata: Meta;

	export let links;

	const openedAccordion = (page, key, i) => page.path.includes(key.replace(' ', '_'));
	const activeLink = (page, path) => page.path.replace(/\/$/, '') === path.replace(/\.|md/g, '');
	const setLink = (base, path) => base + path.replace(/\.|md/g, '');

	$: metadata = getMeta($page.path) || null;

	function getMeta(path: string) {
		const parts = path.split('/').filter(Boolean);
		const category = parts[1];
		const page = parts[2];

		return links[category]?.find((l) => l.path.includes(page)).metadata;
	}
</script>

<style lang="scss" global>
	@import '../app';
	:global(.spectre) {
		@import 'spectre.css/src/menus';
		nav#sidebar {
			.accordion .menu {
				&.menu-nav {
					padding-top: 0;
				}
				.menu-item > a {
					color: $gray-color-dark;
					font-size: 0.75rem;
					&.active {
						color: $primary-color;
					}
				}
			}
		}
	}

	.off-canvas {
		height: auto !important;
		min-height: 100%;
		.off-canvas-sidebar {
			min-width: 12rem !important;
			max-width: 18rem !important;
			@media screen and (max-width: 450px) {
				max-width: 80vw !important;
			}
		}
		.off-canvas-content {
			height: auto !important;
		}
		.off-canvas-sidebar-right {
			background: $light-color !important;
			border-left: 1px dashed $gray-color;
		}
	}
	header {
		position: sticky;
		top: 0;
		z-index: $zindex-2;
		background: white;
	}
	footer {
		position: sticky;
		top: 100vh;
	}
	main {
		overflow-x: hidden;
	}
	h1 {
		text-transform: capitalize;
	}
	strong {
		text-transform: capitalize;
	}
</style>
