<Spectre>
	<Navbar>
		<nav slot="left">
			<div class="ml-2">
				<IconButton icon="back" />
			</div>
		</nav>

		<svelte:fragment slot="center">
			<img src="./b-science.svg" width="64px" height="64px" alt="Brand-Name" />
		</svelte:fragment>

		<nav slot="right">
			<div class="mr-2">
				<IconButton
					href="#_"
					size="xl"
					icon="people"
					on:click={(e) => toast.success({ msg: 'msg', timeout: 0, pos: 'bottom_right' })}
				/>
			</div>
		</nav>
	</Navbar>

	<main>
		<slot />
	</main>
	<Toaster />
</Spectre>

<script lang="ts">
	import '../app.scss';
	import { Spectre } from '$lib';
	// import '../../package/spectre.css';
	// import '$lib/spectre.scss';
	import { Navbar } from '$lib/layouts/';
	import { IconButton } from '$lib/components/';
	import { Toaster } from '$lib/components/Toast/';
	import { toast } from '$lib/components/Toast/toast';
</script>
