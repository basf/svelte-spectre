<svelte:head>
	<title>Svelte-Spectre</title>
</svelte:head>

<Hero size="md" bg="gray" center>
	<Container>
		<h1>Svelte-Spectre</h1>
		<p>
			A Lightweight, Responsive and Modern UI-kit based on spectre.css & powered by SvelteJS
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
		<p class="text-gray">
			Latest version: 0.1.0<br />
			<mark>
				&nbsp; Made on <a href="https://kit.svelte.dev" target="_blank" alt="SvelteKit"
					>SvelteKit</a
				>&nbsp;
			</mark>
		</p>
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
			Svelte-Spectre is a lightweight, responsive and modern UI-kit based on spectre.css &
			powered by SvelteJS for faster and extensible development.
		</p>
		<p>
			Svelte-Spectre provides basic styles for typography and elements, flexbox based
			responsive layout system, pure CSS components and utilities with best practice coding
			and consistent design language.
		</p>
	</Container>
</Hero>

<Hero size="sm" bg="gray" center>
	<h2>Features</h2>
	<Container>
		<Grid stack>
			<Col col="4" mr="auto" sm="12">
				<Card flat>
					<h5 slot="title">Spectre Twitter</h5>
					<p>For the latest announcements and updates, follow on Twitter: @spectrecss.</p>
					<Button slot="footer" variant="primary">Follow</Button>
				</Card>
			</Col>
			<Col col="4" mr="auto" sm="12">
				<Card flat>
					<h5 slot="title">PayPal Donate</h5>
					<p>
						Spectre.css is completely free to use. If you enjoy it, please consider
						donating for the further development.
					</p>
					<Button slot="footer" variant="primary">Donate</Button>
				</Card>
			</Col>
			<Col col="4" mr="auto" sm="12">
				<Card flat>
					<h5 slot="title">Sponsor via Patreon</h5>
					<p>Your name or company logo will be put on Spectre Docs homepage.</p>
					<Button slot="footer" variant="primary">Sponsor</Button>
				</Card>
			</Col>
		</Grid>
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
	export let name: string = 'Svelte-Spectre';
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
