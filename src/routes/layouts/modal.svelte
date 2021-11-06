<div class:modal={!custom} class:active={custom || open} class="modal-{size}" id="modal-{mid}">
	{#if !custom}
		<a href="#" on:click={close} class="modal-overlay" aria-label="Close" />
	{/if}
	<div class="modal-container">
		<div class="modal-header">
			<slot name="header" />
			<IconButton icon="cross" on:click={close} />
		</div>
		<div class="modal-body">
			<slot name="body" />
		</div>
		<div class="modal-footer">
			<slot name="footer" />
		</div>
	</div>
</div>

<script lang="ts" context="module">
	import { createEventDispatcher } from 'svelte';
	import { IconButton } from '$lib';
	import uuid from '$lib/helpers/uuid';

	export const SIZE = {
		sm: 320,
		md: 640,
		lg: 960,
		fs: 100,
	} as const;

	export type Size = keyof typeof SIZE;
</script>

<script lang="ts">
	export let custom: boolean = false;
	export let open: boolean = false;
	export let size: Size = 'md';

	const mid: string = uuid();
	const dispatch = createEventDispatcher();

	const close = () => {
		!custom ? (open = false) : dispatch('close', 'detail value');
	};
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/modals';
		@import 'spectre.css/src/animations';
	}
	.modal-header {
		display: flex;
		justify-content: space-between;
	}
	.modal-header,
	.modal-footer {
		& > :global(*) {
			margin-bottom: 0 !important;
		}
	}
	.modal-sm {
		@extend .modal, .modal-sm;
	}
	.modal-lg {
		@extend .modal, .modal-lg;
	}
	.modal-fs {
		@extend .modal, .modal-lg;
		.modal-container {
			max-width: 100vw !important;
			max-height: 100vh;
			width: calc(100vw - $layout-spacing);
			height: calc(100vh - $layout-spacing);
			justify-content: space-between;
		}
	}
</style>
