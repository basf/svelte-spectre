{#if href}
	<a
		{...$$restProps}
		{href}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:s-circle={shape === 'circle'}
		class:input-group-btn={input}
		class:loading
		class:active
		on:click
		on:dblclick
		use:addBadge={badge}
	>
		<slot />
	</a>
{:else}
	<button
		{...$$restProps}
		class="btn btn-{variant} btn-{size}"
		class:btn-block={block}
		class:btn-action={!!shape}
		class:s-circle={shape === 'circle'}
		class:input-group-btn={input}
		class:loading
		class:active
		on:click
		on:dblclick
		use:addBadge={badge}
	>
		<slot />
	</button>
{/if}

<script context="module">
	import { badge as addBadge } from '../../components/Badge';
</script>

<script>
	export let variant = 'default';
	export let size = 'md';
	export let shape = false;
	export let active = false;
	export let loading = false;
	export let block = false;
	export let input = false;
	export let href = '';
	export let badge;
</script>

<style>
	@charset "UTF-8";
	:global(.spectre) .btn {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #fff;
		border: 0.05rem solid #5755d9;
		border-radius: 0.1rem;
		color: #5755d9;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		height: 1.8rem;
		line-height: 1.2rem;
		outline: none;
		padding: 0.25rem 0.4rem;
		text-align: center;
		text-decoration: none;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		vertical-align: middle;
		white-space: nowrap;
	}
	:global(.spectre) .btn:focus {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
	}
	:global(.spectre) .btn:focus,
	:global(.spectre) .btn:hover {
		background: #f1f1fc;
		border-color: #4b48d6;
		text-decoration: none;
	}
	:global(.spectre) .btn:active,
	:global(.spectre) .btn.active {
		background: #4b48d6;
		border-color: #3634d2;
		color: #fff;
		text-decoration: none;
	}
	:global(.spectre) .btn:active.loading::after,
	:global(.spectre) .btn.active.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) .btn[disabled],
	:global(.spectre) .btn:disabled,
	:global(.spectre) .btn.disabled {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
	}
	:global(.spectre) .btn.btn-primary {
		background: #5755d9;
		border-color: #4b48d6;
		color: #fff;
	}
	:global(.spectre) .btn.btn-primary:focus,
	:global(.spectre) .btn.btn-primary:hover {
		background: #4240d4;
		border-color: #3634d2;
		color: #fff;
	}
	:global(.spectre) .btn.btn-primary:active,
	:global(.spectre) .btn.btn-primary.active {
		background: #3a38d2;
		border-color: #302ecd;
		color: #fff;
	}
	:global(.spectre) .btn.btn-primary.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) .btn.btn-success {
		background: #32b643;
		border-color: #2faa3f;
		color: #fff;
	}
	:global(.spectre) .btn.btn-success:focus {
		box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);
	}
	:global(.spectre) .btn.btn-success:focus,
	:global(.spectre) .btn.btn-success:hover {
		background: #30ae40;
		border-color: #2da23c;
		color: #fff;
	}
	:global(.spectre) .btn.btn-success:active,
	:global(.spectre) .btn.btn-success.active {
		background: #2a9a39;
		border-color: #278e34;
		color: #fff;
	}
	:global(.spectre) .btn.btn-success.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) .btn.btn-error {
		background: #e85600;
		border-color: #d95000;
		color: #fff;
	}
	:global(.spectre) .btn.btn-error:focus {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
	}
	:global(.spectre) .btn.btn-error:focus,
	:global(.spectre) .btn.btn-error:hover {
		background: #de5200;
		border-color: #cf4d00;
		color: #fff;
	}
	:global(.spectre) .btn.btn-error:active,
	:global(.spectre) .btn.btn-error.active {
		background: #c44900;
		border-color: #b54300;
		color: #fff;
	}
	:global(.spectre) .btn.btn-error.loading::after {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) .btn.btn-link {
		background: transparent;
		border-color: transparent;
		color: #5755d9;
	}
	:global(.spectre) .btn.btn-link:focus,
	:global(.spectre) .btn.btn-link:hover,
	:global(.spectre) .btn.btn-link:active,
	:global(.spectre) .btn.btn-link.active {
		color: #302ecd;
	}
	:global(.spectre) .btn.btn-sm,
	:global(.spectre) .btn.btn-xs {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 0.3rem;
	}
	:global(.spectre) .btn.btn-lg,
	:global(.spectre) .btn.btn-xxl,
	:global(.spectre) .btn.btn-xl {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 0.6rem;
	}
	:global(.spectre) .btn.btn-block {
		display: block;
		width: 100%;
	}
	:global(.spectre) .btn.btn-action {
		width: 1.8rem;
		padding-left: 0;
		padding-right: 0;
	}
	:global(.spectre) .btn.btn-action.btn-sm,
	:global(.spectre) .btn.btn-action.btn-xs {
		width: 1.4rem;
	}
	:global(.spectre) .btn.btn-action.btn-lg,
	:global(.spectre) .btn.btn-action.btn-xxl,
	:global(.spectre) .btn.btn-action.btn-xl {
		width: 2rem;
	}
	:global(.spectre) .btn.btn-clear {
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
	}
	:global(.spectre) .btn.btn-clear:focus,
	:global(.spectre) .btn.btn-clear:hover {
		background: rgba(247, 248, 249, 0.5);
		opacity: 0.95;
	}
	:global(.spectre) .btn.btn-clear::before {
		content: '✕';
	}
	:global(.spectre) .btn-group {
		display: inline-flex;
		flex-wrap: wrap;
	}
	:global(.spectre) .btn-group .btn {
		flex: 1 0 auto;
	}
	:global(.spectre) .btn-group .btn:first-child:not(:last-child) {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
	:global(.spectre) .btn-group .btn:not(:first-child):not(:last-child) {
		border-radius: 0;
		margin-left: -0.05rem;
	}
	:global(.spectre) .btn-group .btn:last-child:not(:first-child) {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		margin-left: -0.05rem;
	}
	:global(.spectre) .btn-group .btn:focus,
	:global(.spectre) .btn-group .btn:hover,
	:global(.spectre) .btn-group .btn:active,
	:global(.spectre) .btn-group .btn.active {
		z-index: 1;
	}
	:global(.spectre) .btn-group.btn-group-block {
		display: flex;
	}
	:global(.spectre) .btn-group.btn-group-block .btn {
		flex: 1 0 0;
	}

	.btn,
	.btn.btn-xs,
	.btn.btn-xxl,
	.btn.btn-xl {
		position: relative !important;
		display: inline-flex !important;
		align-items: center !important;
		justify-content: center !important;
	}

	.btn.btn-xl {
		height: 2.4rem !important;
	}

	.btn.btn-action.btn-xl {
		width: 2.4rem !important;
	}

	.btn.btn-xxl {
		height: 3.2rem !important;
	}

	.btn.btn-action.btn-xxl {
		width: 3.2rem !important;
	}

	.btn.btn-xs {
		height: 1.2rem !important;
	}

	.btn.btn-action.btn-xs {
		width: 1.2rem !important;
	}
</style>
