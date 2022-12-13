<Hero size="md" bg={$media.dark ? 'darked' : 'light'} center>
	<Container>
		<h1>{name}</h1>
		<p>
			A Lightweight, Responsive and Modern UI-kit based on <a
				href="https://picturepan2.github.io/spectre">spectre.css</a
			>
			and powered by <a href="https://svelte.dev">Svelte</a> and
			<a href="https://kit.svelte.dev" target="_blank" rel="noreferrer" alt="SvelteKit"
				>SvelteKit</a
			>
		</p>
		<p>
			<Button href="{base}/docs" variant="primary" size="md" data-sveltekit-prefetch
				>Docs</Button
			>
			&nbsp;
			<Button
				href="https://github.com/basf/svelte-spectre"
				target="_blank"
				rel="noreferrer"
				variant="primary"
				size="md">GitHub</Button
			>
		</p>
		<p class="text-italic">Latest version: {version}</p>
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
		<p class="basic_button_group">
			<Button
				href="{base}/docs/01-getting_started/01-installation"
				variant="primary"
				size="xl">Get Started</Button
			>
			&nbsp;
			<Button href="{base}/docs/components/accordion" variant="success" size="xl"
				>Components</Button
			>
			&nbsp;
			<Button href="{base}/docs/layouts/card" size="xl">Layouts</Button>
		</p>
	</Container>
</Hero>

<script context="module" lang="ts">
	import { base } from '$app/paths';
	import { Button, Card, Col, Container, Hero, Grid } from '$lib';
	import { media } from './media';
</script>

<script lang="ts">
	let name = import.meta.env.VITE_APP_NAME;
	let version = import.meta.env.VITE_APP_VERSION;
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
