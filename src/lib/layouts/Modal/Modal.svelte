<div
	{...$$restProps}
	class:modal={!custom}
	class:active={custom || open}
	class="modal-{size}"
	id="modal-{mid}"
>
	{#if !custom}
		<a href="#" on:click={close} class="modal-overlay" aria-label="Close" />
	{/if}
	<div class="modal-container">
		<IconButton id="close" icon="cross" on:click={close} />
		<div class="modal-header">
			<slot name="header" />
		</div>
		<div class="modal-body">
			<slot />
		</div>
		<div class="modal-footer">
			<slot name="footer" />
		</div>
	</div>
</div>

<script lang="ts" context="module">
	import { createEventDispatcher } from 'svelte';
	import { IconButton } from '../../components/Button';
	import uuid from '../../helpers/uuid';

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
	.modal-container {
		position: relative;
		:global(#close) {
			position: absolute !important;
			right: $unit-4;
			top: $unit-4;
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
		.modal-body {
			flex: 1;
		}
	}

	.modal-sm {
		@extend .modal, .modal-sm;
	}
	.modal-lg {
		@extend .modal, .modal-lg;
		.modal-overlay {
			background: auto !important;
		}
	}
	.modal-fs {
		@extend .modal, .modal-lg;
		padding: 0 !important;
		.modal-container {
			max-width: 100vw !important;
			max-height: 100vh;
			width: calc(100vw);
			height: calc(100vh);
			justify-content: space-between;
		}
	}
</style>
