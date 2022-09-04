<svelte:head>
	<title>{name + '@' + version}: {data.title || ''}</title>
</svelte:head>

<Spectre>
	<Sidebar
		extclose
		both
		bind:openLeft
		bind:openRight
		bind:show
		breakpoint={$page.url.pathname.includes('docs') ? 'xl' : Infinity}
	>
		<header class:bg-light={!$media.dark} class:bg-darked={$media.dark}>
			<Navbar>
				<nav slot="left">
					{#if !show}
						<div class="ml-2">
							<IconButton icon="menu" on:click={() => (openLeft = !openLeft)} />
						</div>
					{/if}
				</nav>

				<IconButton
					slot="center"
					size="xl"
					iconSize="3x"
					color={$media.dark ? 'gray' : 'dark'}
					href={`${base}/`}
				>
					<Xray />
				</IconButton>

				<nav class="d-flex mr-2" slot="right">
					{#if !show && data.meta?.api}
						<div class="mr-2">
							<Button on:click={() => (openRight = !openRight)}>Api</Button>
						</div>
					{/if}
					<div class="mr-2">
						{#if $page.routeId?.includes('/')}
							<IconButton
								icon="edit"
								href={`${repo}/tree/master/src/www/${$page.routeId}.md`}
								target="_blank"
							/>
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
			<h5><a href={`${base}/`} on:click={() => (openLeft = false)}>{name}</a></h5>
			{#if data.links}
				{#each Object.entries(data.links) as [key, value], i}
					{#if key === 'root'}
						<Menu nav>
							{#each value as { path, metadata: { title } }, i}
								<li class="menu-item">
									<a
										sveltekit:prefetch
										href={setLink(base, path)}
										class:active={activeLink(path)}
										on:click={() => (openLeft = false)}>{title}</a
									>
								</li>
							{/each}
						</Menu>
					{:else}
						<Accordion
							group="nav"
							toggled
							opened={openedAccordion($page.url.pathname, key, i)}
						>
							<h5 class="header" slot="header">{key.replace(/_|-|[0-9]/g, ' ')}</h5>
							<Menu nav>
								{#each value as { path, metadata: { title } }, i}
									<li class="menu-item">
										<a
											sveltekit:prefetch
											href={setLink(base, path)}
											class:active={activeLink(path)}
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

		<main class:px-5={$page.url.pathname.includes('docs') && show} class:px-3={!show}>
			<slot />
		</main>

		<svelte:fragment slot="sidebarRight">
			{#if data.meta?.api}
				{#if !show}
					<span style="position: absolute; right: 0.5rem">
						<IconButton icon="cross" on:click={() => (openRight = false)} />
					</span>
				{/if}
				<article class="p-2 mx-2">
					<h4>API {data.meta.title}</h4>
					<dl>
						{#each data.meta.api as api}
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

<script lang="ts" context="module">
	import type { Data } from './types';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { Accordion, Button, IconButton, Menu, Navbar, Sidebar, Spectre, Toaster } from '$lib';

	import Xray from '$assets/Xray.svg';
	import GitHub from '$assets/github.svg';
	import { media } from './media';

	export let data: Data;

	let openLeft = false;
	let openRight = false;
	let show = false;
	let repo = import.meta.env.VITE_APP_GIT;
	let name = import.meta.env.VITE_APP_NAME;
	let version = import.meta.env.VITE_APP_VERSION;

	$: activeLink = (path: string) => {
		return $page.routeId?.includes('/') && path.includes($page.routeId);
	};

	const openedAccordion = (path: string, key: string, i: number) =>
		path.includes(key.replace(' ', '_'));

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
		display: flex;
		width: 100%;
		min-height: calc(100% + env(safe-area-inset-top) + env(safe-area-inset-bottom));
	}
	.off-canvas {
		min-height: calc(100% + env(safe-area-inset-top) + env(safe-area-inset-bottom));
		.off-canvas-sidebar {
			@media screen and (max-width: 450px) {
				max-width: 80vw !important;
			}
		}
		.off-canvas-content {
			min-height: calc(100% + env(safe-area-inset-top) + env(safe-area-inset-bottom));
			display: flex;
			flex-flow: column nowrap;
			header {
				position: sticky;
				top: 0;
				z-index: $zindex-2;
				// background: white;
			}
			main {
				flex: 1 0 auto;
				// &.px-5 {
				// 	padding: 0 $unit-5;
				// }
			}
			footer {
				flex-shrink: 0;
			}
		}
		.off-canvas-sidebar-right {
			min-width: 15rem !important;
			background: $secondary-color !important;
			// border-left: 1px dashed $gray-color;
			.code {
				background: $light-color;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		main code {
			background: $dark-code;
			color: $code-color;
		}
		nav#sidebar {
			.menu {
				background: transparent !important;
				.menu-item > a {
					color: $gray-color;
					&:focus,
					&:hover {
						background: $dark-secondary;
					}
					&:active,
					&.active {
						background: $dark-secondary;
					}
				}
			}
		}
		.spectre {
			.off-canvas {
				.off-canvas-sidebar.p-2.off-canvas-sidebar-right {
					background: $dark-secondary !important;
					code {
						background: $dark-code;
						color: $code-color;
					}
					.code {
						color: $gray-color;
						background: $dark-color !important;
					}
				}
			}
		}
	}
	[color-scheme='dark'] {
		background: transparent !important;
		main code {
			background: $dark-code;
			color: $code-color;
		}
		nav#sidebar {
			.menu {
				.menu-item > a {
					color: $gray-color;
					&:focus,
					&:hover {
						background: $dark-secondary;
					}
					&:active,
					&.active {
						background: $dark-secondary;
					}
				}
			}
		}
		.spectre {
			.off-canvas {
				.off-canvas-sidebar.p-2.off-canvas-sidebar-right {
					background: $dark-secondary !important;
					code {
						background: $dark-code;
						color: $code-color;
					}
					.code {
						color: $gray-color;
						background: $dark-color !important;
					}
				}
			}
		}
	}
</style>
