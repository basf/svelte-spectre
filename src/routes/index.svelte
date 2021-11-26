<svelte:head>
	<title>Svelte-spectre</title>
</svelte:head>

<Hero size="md" bg="gray" center>
	<Container>
		<h1>Svelte-spectre</h1>
		<p>
			A Lightweight, Responsive and Modern UI-kit based on spectre.css and powered by SvelteJS
		</p>
		<p>
			<Button href="{base}/docs" variant="primary" size="lg" sveltekit:prefetch>Docs</Button
			>&nbsp;
			<Button
				href="https://github.com/tilde-lab/svelte-spectre"
				target="_blank"
				variant="primary"
				size="lg">GitHub</Button
			>
		</p>
		<p class="text-gray">Latest version: 0.1.0</p>
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
			Spectre.css is a lightweight, responsive and modern CSS framework for faster and
			extensible development.
		</p>
		<p>
			Spectre provides basic styles for typography and elements, flexbox based responsive
			layout system, pure CSS components and utilities with best practice coding and
			consistent design language.
		</p>
	</Container>
</Hero>

<script context="module" lang="ts">
	import { base } from '$app/paths';
	import {
		Accordion,
		Avatar,
		Autocomplete,
		Badge,
		Button,
		ButtonGroup,
		Card,
		Col,
		Container,
		Checkbox,
		Chip,
		Divider,
		Empty,
		Form,
		FormGroup,
		Hero,
		Grid,
		Icon,
		IconButton,
		Input,
		InputGroup,
		Figure,
		Menu,
		Modal,
		Pagination,
		Radio,
		Range,
		Select,
		Switch,
		Tile,
		Toast,
		toast,
	} from '$lib';
</script>

<script lang="ts">
	export let name: string = 'SvelteSpectre';
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
</style>
