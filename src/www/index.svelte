<svelte:head>
	<title>{name}</title>
</svelte:head>

<Hero size="md" bg="gray" center>
	<Container>
		<h1>{name}</h1>
		<p>
			A Lightweight, Responsive and Modern UI-kit based on <a
				href="https://picturepan2.github.io/spectre">spectre.css</a
			>
			and powered by <a href="https://svelte.dev">SvelteJS</a> and
			<a href="https://kit.svelte.dev" target="_blank" alt="SvelteKit">SvelteKit</a>
		</p>
		<p>
			<Button href="{base}/docs" variant="primary" size="lg" sveltekit:prefetch>Docs</Button
			>&nbsp;
			<Button
				href="https://github.com/basf/svelte-spectre"
				target="_blank"
				variant="primary"
				size="lg">GitHub</Button
			>
		</p>
		<p class="text-gray">Latest version: {version}</p>
		<Grid stack>
			<Col col="4" mr="auto" sm="12">
				<Card clear>
					<h4 slot="title" class="text-primary">Lightweight</h4>
					<p>Lightweight (~10KB gzipped) starting point for your projects</p>
				</Card>
			</Col>
			<Col col="4" mr="auto" sm="12">
				<Card clear>
					<h4 slot="title" class="text-primary">Responsive</h4>
					<p>Flexbox-based, responsive and mobile-friendly layout</p>
				</Card>
			</Col>
			<Col col="4" mr="auto" sm="12">
				<Card clear>
					<h4 slot="title" class="text-primary">Modern</h4>
					<p>Elegantly designed and developed elements and components</p>
				</Card>
			</Col>
		</Grid>
	</Container>
</Hero>

<Hero size="sm" bg="primary" center>
	<Container>
		<h2>Introduction</h2>
		<p>
			{name} is a lightweight, responsive and modern UI-kit based on spectre.css & powered by SvelteJS
			for faster and extensible development.
		</p>
		<p>
			{name} provides basic styles for typography and elements, flexbox based responsive layout
			system, pure CSS components and utilities with best practice coding and consistent design
			language.
		</p>
	</Container>
</Hero>

<script context="module" lang="ts">
	import { base } from '$app/paths';
	import { Button, Card, Col, Container, Hero, Grid } from '$lib';
</script>

<script lang="ts">
	let name = import.meta.env.VITE_APP_NAME,
		version = import.meta.env.VITE_APP_VERSION;
</script>

<style lang="scss">
	:global(.loading) {
		pointer-events: auto !important;
	}
	.toaster-grid {
		:global(.btn-group) {
			gap: 0.25rem;
		}
		:global(.btn-group > button) {
			flex: 1 0 30%;
		}
	}
	h1 {
		text-transform: capitalize;
	}
</style>
