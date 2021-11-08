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
									on:click={() => (open = false)}>{title}</a
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
				return { path, metadata };
			})
		);
	}

	export async function load() {
		const mds = await Promise.all(body);
		const links = mds.reduce((a, c) => {
			const key = c.path.split('/')[1];
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
	import { Accordion, Aside, Container, IconButton, Navbar, Spectre, Toaster, toast } from '$lib';
	import Xray from '$assets/b-science.svg';
	import GitHub from '$assets/github.svg';
	import '../app.scss';

	let open = false,
		show = false;

	export let links;
</script>

<style lang="scss">
	:global {
		@import 'spectre.css/src/codes';
		@import 'code';
		.off-canvas .off-canvas-sidebar {
			min-width: 12rem !important;
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
		padding: 0 0.5rem 2rem;
	}
	h1 {
		text-transform: capitalize;
	}
	strong {
		text-transform: capitalize;
	}
</style>
