<div
	{...$$restProps}
	class:modal={!custom}
	class:active={custom || open}
	class="modal-{size}"
	id="modal-{mid}"
>
	{#if !custom}
		<a href="#_" on:click={close} class="modal-overlay" aria-label="Close" />
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

<script context="module">
	import { createEventDispatcher } from 'svelte';
	import IconButton from '../../components/Button/IconButton.svelte';
	import uuid from '../../helpers/uuid';
	export const SIZE = {
		sm: 320,
		md: 640,
		lg: 960,
		fs: 100,
	};
</script>

<script>
	export let custom = false;
	export let open = false;
	export let size = 'md';
	const mid = uuid();
	const dispatch = createEventDispatcher();
	const close = () => {
		!custom ? (open = false) : dispatch('close', 'detail value');
	};
</script>

<style>
	:global(.spectre) .modal,
	:global(.spectre) .modal-fs,
	:global(.spectre) .modal-lg,
	:global(.spectre) .modal-sm {
		align-items: center;
		bottom: 0;
		display: none;
		justify-content: center;
		left: 0;
		opacity: 0;
		overflow: hidden;
		padding: 0.4rem;
		position: fixed;
		right: 0;
		top: 0;
	}
	:global(.spectre) .modal:target,
	:global(.spectre) .modal-fs:target,
	:global(.spectre) .modal-lg:target,
	:global(.spectre) .modal-sm:target,
	:global(.spectre) .modal.active,
	:global(.spectre) .active.modal-fs,
	:global(.spectre) .active.modal-lg,
	:global(.spectre) .active.modal-sm {
		display: flex;
		opacity: 1;
		z-index: 400;
	}
	:global(.spectre) .modal:target .modal-overlay,
	:global(.spectre) .modal-fs:target .modal-overlay,
	:global(.spectre) .modal-lg:target .modal-overlay,
	:global(.spectre) .modal-sm:target .modal-overlay,
	:global(.spectre) .modal.active .modal-overlay,
	:global(.spectre) .active.modal-fs .modal-overlay,
	:global(.spectre) .active.modal-lg .modal-overlay,
	:global(.spectre) .active.modal-sm .modal-overlay {
		background: rgba(247, 248, 249, 0.75);
		bottom: 0;
		cursor: default;
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
	:global(.spectre) .modal:target .modal-container,
	:global(.spectre) .modal-fs:target .modal-container,
	:global(.spectre) .modal-lg:target .modal-container,
	:global(.spectre) .modal-sm:target .modal-container,
	:global(.spectre) .modal.active .modal-container,
	:global(.spectre) .active.modal-fs .modal-container,
	:global(.spectre) .active.modal-lg .modal-container,
	:global(.spectre) .active.modal-sm .modal-container {
		-webkit-animation: slide-down 0.2s ease 1;
		animation: slide-down 0.2s ease 1;
		z-index: 1;
	}
	:global(.spectre) .modal.modal-sm .modal-container,
	:global(.spectre) .modal-sm .modal-container {
		max-width: 320px;
		padding: 0 0.4rem;
	}
	:global(.spectre) .modal.modal-lg .modal-overlay,
	:global(.spectre) .modal-lg .modal-overlay,
	:global(.spectre) .modal-fs .modal-overlay {
		background: #fff;
	}
	:global(.spectre) .modal.modal-lg .modal-container,
	:global(.spectre) .modal-lg .modal-container,
	:global(.spectre) .modal-fs .modal-container {
		box-shadow: none;
		max-width: 960px;
	}
	:global(.spectre) .modal-container {
		box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
		background: #fff;
		border-radius: 0.1rem;
		display: flex;
		flex-direction: column;
		max-height: 75vh;
		max-width: 640px;
		padding: 0 0.8rem;
		width: 100%;
	}
	:global(.spectre) .modal-container.modal-fullheight {
		max-height: 100vh;
	}
	:global(.spectre) .modal-container .modal-header {
		color: #303742;
		padding: 0.8rem;
	}
	:global(.spectre) .modal-container .modal-body {
		overflow-y: auto;
		padding: 0.8rem;
		position: relative;
	}
	:global(.spectre) .modal-container .modal-footer {
		padding: 0.8rem;
		text-align: right;
	}
	@-webkit-keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-1.6rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-1.6rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	:global(.spectre) .modal.active,
	:global(.spectre) .active.modal-fs,
	:global(.spectre) .active.modal-lg,
	:global(.spectre) .active.modal-sm {
		z-index: 500;
	}

	.modal-container {
		position: relative;
	}
	.modal-container :global(#close) {
		position: absolute !important;
		right: 0.8rem;
		top: 0.8rem;
		z-index: 1;
	}
	.modal-container .modal-header {
		display: flex;
		justify-content: space-between;
	}
	.modal-container .modal-header > :global(*),
	.modal-container .modal-footer > :global(*) {
		margin-bottom: 0 !important;
	}
	.modal-container .modal-body {
		flex: 1;
	}

	.modal-lg .modal-overlay,
	.modal-fs .modal-overlay {
		background: auto !important;
	}

	.modal-fs {
		padding: 0 !important;
	}
	.modal-fs .modal-container {
		max-width: 100% !important;
		max-height: 100%;
		width: 100%;
		height: 100%;
		justify-content: space-between;
	}
</style>
