<Hero size="sm" bg="gray" center>
	<Container>
		<h1>SvelteSpectre</h1>
		<p>A Lightweight, Responsive and Modern CSS Framework</p>
		<p>
			<Button href="{base}/docs" variant="primary" size="lg">Docs</Button>&nbsp;
			<Button href="{base}/docs" variant="primary" size="lg">GitHub</Button>
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

<Hero size="sm" bg="gray" center>
	<h2>Features</h2>
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
					Spectre.css is completely free to use. If you enjoy it, please consider donating
					for the further development.
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
	import type { Pos } from '$lib';
</script>

<script lang="ts">
	import Container from '$lib/layouts/Container';

	let questions = [
			{ value: 1, label: `Where did you go to school?` },
			{ value: 2, label: `What is your mother's name?` },
			{
				value: 3,
				label: `What is another personal fact that an attacker could easily find with Google?`,
			},
		],
		selected = 3,
		multi = [1],
		radios = 1,
		loading = false,
		positions: Pos[] = [
			'top_left',
			'top_center',
			'top_right',
			'center_left',
			'center_center',
			'center_right',
			'bottom_left',
			'bottom_center',
			'bottom_right',
		],
		tostVis: boolean = true,
		modalVis: boolean,
		arrows: string[] = ['↖', '↑', '↗', '←', '☩', '→', '↙', '↓', '↘'],
		badge = 'badge',
		radiogroup = '',
		menu = [
			{ divider: `TOP` },
			{ text: `top_left`, active: true },
			{ text: `top_center`, checkbox: true },
			{ text: `top_right`, badge: 2 },
			{ divider: `CENTER` },
			{ text: `center_left`, icon: 'link' },
			{ text: `center_center`, switch: true },
			{ text: `center_right`, badge: 'badge', checkbox: true },
			{ divider: `BOTTOM` },
			{ text: `bottom_left`, radio: true },
			{ text: `bottom_center`, radio: true },
			{ text: `bottom_right`, radio: true },
		],
		CARDS = [
			{
				pos: 'top',
				col: '4',
				img: 'macos-sierra.jpg',
				text: 'Lightweight (~10KB gzipped) starting point for your projects',
			},
			{
				pos: 'middle',
				col: '6',
				img: 'macos-sierra-2.jpg',
				text: 'Flexbox-based, responsive and mobile-friendly layout',
			},
			{
				pos: 'bottom',
				col: '8',
				img: 'osx-el-capitan.jpg',
				text: 'Elegantly designed and developed elements and components',
			},
			{
				pos: 'middle',
				col: '10',
				img: 'osx-yosemite.jpg',
				text: 'Lightweight (~10KB gzipped) starting point for your projects',
			},
			{
				pos: 'top',
				col: '12',
				img: 'osx-yosemite-2.jpg',
				text: 'Flexbox-based, responsive and mobile-friendly layout',
			},
		],
		page,
		autocompleted = [];

	export let name: string = 'Spectre';
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

			// display: grid;
			// grid-template-columns: ;
		}
	}
</style>
