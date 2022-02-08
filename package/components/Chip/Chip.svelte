<div {...$$restProps} class="chip" class:active>
	{#if avatar}
		<Avatar size="sm" {name} {status}>
			<slot name="avatar" />
		</Avatar>
	{/if}
	<slot />
	{#if closable}
		<button
			class="btn btn-clear mr--1"
			aria-label="Close"
			on:click={() => dispatch('close', 'chip close')}
		/>
	{/if}
</div>

<script context="module">
	import Avatar from '../Avatar/Avatar.svelte';
</script>

<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let avatar = false;
	export let name = '';
	export let status = null;
	export let active = false;
	export let closable = false;
</script>

<style>
	@charset "UTF-8";
	.bg-darked {
		background: #252b33 !important;
		color: #fff;
	}

	.bg-secondary-darked {
		background: #343a51 !important;
		color: #fff;
	}

	.text-darked {
		color: #f2f2f2 !important;
	}

	a.text-darked:focus,
	a.text-darked:hover {
		color: #e6e6e6;
	}
	a.text-darked:visited {
		color: white;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;
		}

		.form-input,
		.form-select {
			background-color: #252b33 !important;
			border-color: #66758c !important;
			color: #f2f2f2 !important;
		}

		.form-checkbox .form-icon,
		.form-radio .form-icon,
		.form-switch .form-icon {
			border-color: #66758c !important;
			background: #252b33 !important;
		}

		input:active + .form-icon {
			background: #343a51 !important;
		}
		input:checked + .form-icon {
			background: #5755d9 !important;
		}

		.badge[data-badge]::after,
		.badge:not([data-badge])::after {
			box-shadow: 0 0 0 0.1rem #252b33 !important;
			color: #f2f2f2 !important;
		}

		code {
			background: #afa2b1;
			color: #413843;
		}

		.code {
			color: #bcc3ce;
		}
		.code::before {
			color: #bcc3ce;
		}
		.code code {
			background: #303742;
		}
	}
	[color-scheme='dark'] :root {
		color-scheme: dark;
	}
	[color-scheme='dark'] .form-input,
	[color-scheme='dark'] .form-checkbox .form-icon,
	[color-scheme='dark'] .form-select {
		background-color: #252b33 !important;
		border-color: #66758c !important;
		color: #f2f2f2 !important;
	}

	:global(.spectre) .chip {
		align-items: center;
		background: #eef0f3;
		border-radius: 5rem;
		display: inline-flex;
		font-size: 90%;
		height: 1.2rem;
		line-height: 0.8rem;
		margin: 0.1rem;
		max-width: 320px;
		overflow: hidden;
		padding: 0.2rem 0.4rem;
		text-decoration: none;
		text-overflow: ellipsis;
		vertical-align: middle;
		white-space: nowrap;
	}
	:global(.spectre) .chip.active {
		background: #5755d9;
		color: #fff;
	}
	:global(.spectre) .chip .avatar {
		margin-left: -0.4rem;
		margin-right: 0.2rem;
	}
	:global(.spectre) .chip .btn-clear {
		border-radius: 50%;
		transform: scale(0.75);
	}
	:global(.spectre) .chip :global(.avatar) {
		margin-left: -0.4rem;
		margin-right: 0.4rem;
	}
	:global(.spectre) .chip .btn-clear {
		background: transparent;
		border: 0;
		color: currentColor;
		height: 1rem;
		line-height: 0.8rem;
		margin-left: 0.2rem;
		margin-right: -2px;
		opacity: 1;
		padding: 0.1rem;
		text-decoration: none;
		width: 1rem;
		cursor: pointer;
	}
	:global(.spectre) .chip .btn-clear:focus,
	:global(.spectre) .chip .btn-clear:hover {
		background: rgba(247, 248, 249, 0.5);
		opacity: 0.95;
	}
	:global(.spectre) .chip .btn-clear::before {
		content: '✕';
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .chip {
			background-color: #303742;
			color: #f2f2f2;
		}
	}
</style>
