<svelte:head>
	<title>{name + '@' + version}: Getting started</title>
</svelte:head>

<h1>Getting started</h1>

<p>
	Spectre-css is a lightweight, responsive and modern CSS framework for faster and extensible
	development.
</p>

<p>
	Spectre provides basic styles for typography and elements, flexbox based responsive layout
	system, pure CSS components and utilities with best practice coding and consistent design
	language.
</p>

<Grid stack>
	<Col col="6" xs="12">
		<Card expand shadowed flat>
			<h4 slot="title">Installation</h4>
			<p>How to install and use Spectre-css</p>
			<Button
				slot="footer"
				variant="primary"
				href="{base}/docs/01-getting_started/01-installation/">View</Button
			>
		</Card>
	</Col>
	<Col col="6" xs="12">
		<Card expand shadowed flat>
			<h4 slot="title">Customize</h4>
			<p>Customize your version of Spectre-css</p>
			<Button
				slot="footer"
				variant="primary"
				href="{base}/docs/01-getting_started/02-customize/">View</Button
			>
		</Card>
	</Col>
	<Col col="6" xs="12">
		<Card expand shadowed flat>
			<h4 slot="title">Browser support</h4>
			<p>Browser compatibility and support</p>
			<Button
				slot="footer"
				variant="primary"
				href="{base}/docs/01-getting_started/browser-support/">View</Button
			>
		</Card>
	</Col>
	<Col col="6" xs="12">
		<Card expand shadowed flat>
			<h4 slot="title">Changelog</h4>
			<p>Changelog and release notes</p>
			<Button slot="footer" variant="primary" href="{base}/docs/01-getting_started/changelog/"
				>View</Button
			>
		</Card>
	</Col>
</Grid>

<br />

<script>
	import { base } from '$app/paths';
	import { Card, Col, Grid, Button } from '$lib';

	let name = import.meta.env.VITE_APP_NAME;
	let version = import.meta.env.VITE_APP_VERSION;
</script>
