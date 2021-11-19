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

				<nav slot="right">
					{#if !show && metadata?.api}
						<div class="mr-2">
							<Button on:click={() => (openRight = !openRight)}>Api</Button>
						</div>
					{/if}
					<!-- <div class="mr-2">
						<IconButton
							size="sm"
							iconSize="2x"
							on:click={(e) =>
								toast.success({ msg: 'msg', timeout: 0, pos: 'bottom_right' })}
							><GitHub /></IconButton
						>
					</div> -->
				</nav>
			</Navbar>
		</header>

		<nav id="sidebar" slot="sidebarLeft" class="m-2">
			<h3><a href={`${base}/`}>SvelteSpectre</a></h3>
			{#each Object.entries(links) as [key, value], i}
				<Accordion toggled opened={openedAccordion($page, key, i)}>
					<strong slot="title">{key.replace(/_|-|[0-9]/g, ' ')}</strong>
					<ul class="menu menu-nav">
						{#each value as { path, metadata: { title } }, i}
							<li class="menu-item">
								<a
									sveltekit:prefetch
									href={setLink(base, path)}
									class:active={activePath($page, path)}
									on:click={() => (openLeft = false)}>{title}</a
								>
							</li>
						{/each}
					</ul>
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
							<dt><code>{api.title}</code></dt>
							<dd>
								<pre class="code"><code class="code">{api.description}</code></pre>
							</dd>
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
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import {
		Accordion,
		Aside,
		Button,
		Container,
		IconButton,
		Navbar,
		Spectre,
		Toaster,
		toast,
	} from '$lib';
	import Xray from '$assets/b-science.svg';
	import GitHub from '$assets/github.svg';
	import '../app.scss';

	let openLeft = false,
		openRight = false,
		show = false;

	export let links, api;

	const openedAccordion = (page, key, i) => page.path.includes(key.replace(' ', '_'));
	const activePath = (page, path) => page.path.replace(/\/$/, '') === path.replace(/\.|md/g, '');
	const setLink = (base, path) => base + path.replace(/\.|md/g, '');
	$: metadata = links[$page.path.split('/')[2]]?.find((l) =>
		l.path.includes($page.path.split('/')[3])
	)?.metadata;
</script>

<style lang="scss">
	:global {
		@import 'docs/_code';
		@import 'spectre.css/src/codes';
		.off-canvas .off-canvas-sidebar {
			min-width: 12rem !important;
			max-width: 18rem !important;
			@media screen and (max-width: 450px) {
				max-width: 80vw !important;
			}
		}
		.docs-demo {
			padding-bottom: 1rem;
			padding-top: 1rem;
			.column {
				padding: 0.4rem;
			}
		}
	}
	@import 'spectre.css/src/menus';
	@import 'spectre.css/src/icons';

	.accordion .menu .menu-item > a {
		color: $gray-color-dark;
		font-size: 0.75rem;
		&.active {
			color: $primary-color;
		}
	}
	header {
		position: sticky;
		top: 0;
		z-index: $zindex-2;
		background: white;
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
	nav#sidebar {
		:global(.menu.menu-nav) {
			padding-top: 0;
			// padding-left: 0;
			// padding-bottom: 0;
		}
	}
	:global(body),
	:global(html) {
		height: 100%;
		:global(.off-canvas) {
			height: auto !important;
			min-height: 100%;
		}
		:global(.off-canvas-content) {
			height: auto !important;
			min-height: 100%;
			display: grid !important;
			grid-template-rows: auto 1fr auto;
		}
		:global(.off-canvas-sidebar-right) {
			background: $light-color !important;
			border-left: 1px dashed $gray-color;
		}
	}
</style>
