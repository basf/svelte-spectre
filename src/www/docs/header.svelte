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

<script lang="ts" context="module">
	import { base } from '$app/paths';
	import { Accordion, Button, IconButton, Menu, Navbar, Sidebar, Spectre, Toaster } from '$lib';
	import Xray from '$assets/Xray.svg';
	import GitHub from '$assets/github.svg';
	import { media } from '../media';

	import type { Data } from '../types';
</script>

<script lang="ts">
	export let data: Data;
	let openLeft = false;
	let openRight = false;
	let show = false;

	const repo = import.meta.env.VITE_APP_GIT;
	const name = import.meta.env.VITE_APP_NAME;
	const version = import.meta.env.VITE_APP_VERSION;
</script>
