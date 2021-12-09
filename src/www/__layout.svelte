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
					<!-- <img src="/b-science.svg" /> -->
					<!-- <svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 900 900"
						><path
							d="M326.716 149.024C305.401 154.746 156.321 198.737 152.629 200.287C150.248 201.36 147.152 203.386 145.842 204.817C143.818 206.963 73.326 331.663 66.0625 345.85C62.9666 351.93 62.8475 357.533 65.7053 362.541C69.0394 368.74 439.836 748.921 443.884 750.352C449.243 752.259 454.363 751.782 459.126 748.802C463.532 746.179 830.28 370.051 834.209 364.21C835.638 362.183 836.352 358.845 836.352 354.791C836.352 348.473 835.4 346.685 796.344 279.685C774.315 241.774 754.906 209.109 753.358 206.963C751.691 204.817 748.119 201.956 745.499 200.764C742.76 199.452 700.013 187.054 650.597 173.106L560.696 147.712L446.98 147.474C349.459 147.235 332.312 147.474 326.716 149.024ZM611.779 198.975C643.214 207.917 669.173 215.308 669.292 215.547C669.887 216.023 449.957 271.101 447.338 271.101C443.765 271.101 226.693 215.904 227.408 215.189C227.765 214.831 251.699 207.44 280.634 198.856L333.265 183.12L443.884 183L554.504 182.881L611.779 198.975ZM692.63 247.497C691.797 248.927 620.233 342.512 593.203 377.443L581.415 392.702L531.999 345.969L482.703 299.237L587.13 272.771C644.643 258.226 692.154 246.185 692.63 246.185C693.225 246.066 693.225 246.781 692.63 247.497ZM309.212 273.009C364.938 287.196 410.901 299.117 411.258 299.356C411.973 300.071 320.405 391.51 318.976 391.51C318.38 391.391 293.375 360.275 263.606 322.245C200.854 242.251 204.665 247.258 206.332 247.258C207.046 247.258 253.366 258.822 309.212 273.009ZM765.503 296.495C780.269 322.007 792.057 343.227 791.7 343.585C790.747 344.539 631.069 387.934 630.593 387.338C630.354 387.099 654.169 355.745 683.461 317.596C712.754 279.566 737.164 248.808 737.64 249.285C738.116 249.762 750.619 271.101 765.503 296.495ZM223.002 411.539L304.449 433.832L320.405 471.981C341.481 522.052 365.296 578.442 382.919 619.691C390.658 637.931 396.85 653.071 396.731 653.31C396.374 653.667 174.063 425.606 151.915 402.12C145.128 394.967 140.008 389.126 140.603 389.245C141.079 389.245 178.23 399.259 223.002 411.539ZM556.171 438.243C553.075 446.35 451.267 686.809 450.672 687.405C450.314 687.882 442.813 671.55 434.239 651.044C425.547 630.539 402.089 574.984 381.966 527.417C361.961 479.85 345.172 440.031 344.934 438.839C344.339 436.932 349.935 436.812 450.553 436.812C535.095 436.812 556.648 437.17 556.171 438.243Z"
						/></svg
					> -->
				</IconButton>

				<nav class="d-flex mr-2" slot="right">
					{#if !show && metadata?.api}
						<div class="mr-2">
							<Button on:click={() => (openRight = !openRight)}>Api</Button>
						</div>
					{/if}
					<div class="mr-2">
						{#if $page.path.split('/').filter(Boolean).length > 1}
							<IconButton
								icon="edit"
								href="https://github.com/tilde-lab/svelte-spectre/tree/master/src/routes{$page.path.replace(
									/\/$/,
									''
								)}.md"
								target="_blank"
							/>
						{:else}
							<IconButton
								size="sm"
								iconSize="2x"
								href="https://github.com/tilde-lab/svelte-spectre/"
								target="_blank"
							>
								<GitHub />
								<!-- <svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><title>GitHub</title><path
										d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
									/></svg
								> -->
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
			<IconButton
				size="sm"
				iconSize="2x"
				href="https://github.com/tilde-lab/svelte-spectre/"
				target="_blank"
			>
				<!-- <GitHub /> -->
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><title>GitHub</title><path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
					/></svg
				>
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
									<pre
										class="code mt-0"><code class="code">{api.variables}</code></pre>
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

	export async function load({ page }) {
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
	import { Accordion, Button, IconButton, Menu, Navbar, Sidebar, Spectre, Toaster } from '$lib';
	import Xray from '$assets/b-science.svg';
	import GitHub from '$assets/github.svg';

	let openLeft = false,
		openRight = false,
		show = false;

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

	.off-canvas {
		height: auto !important;
		min-height: 100%;
		.off-canvas-sidebar {
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
	html,
	body,
	main,
	.spectre {
		min-height: 100vh;
	}
	main {
		overflow-x: hidden;
	}
	h1 {
		text-transform: capitalize;
	}
</style>
