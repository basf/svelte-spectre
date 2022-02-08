<figure
	{...$$restProps}
	class="card"
	class:card-clear={clear}
	class:card-outlined={outlined}
	class:card-flat={flat}
	class:card-expand={expand}
	class:card-shadowed={shadowed}
>
	{#if $$slots.img && pos === 'top'}
		<div class="card-image">
			<slot name="img" />
		</div>
	{/if}
	<figcaption class="card-header">
		{#if $$slots.title}
			<div class="card-title">
				<slot name="title" />
			</div>
		{/if}
		{#if $$slots.subtitle}
			<div class="card-subtitle">
				<slot name="subtitle" />
			</div>
		{/if}
	</figcaption>
	{#if $$slots.img && pos === 'middle'}
		<div class="card-image">
			<slot name="img" />
		</div>
	{/if}
	{#if $$slots.default}
		<div class="card-body">
			<slot />
		</div>
	{/if}
	{#if $$slots.img && pos === 'bottom'}
		<div class="card-image">
			<slot name="img" />
		</div>
	{/if}
	{#if $$slots.footer}
		<div class="card-footer">
			<slot name="footer" />
		</div>
	{/if}
</figure>

<script context="module"></script>

<script>
	export let pos = 'top';
	export let clear = false;
	export let flat = false;
	export let outlined = false;
	export let expand = false;
	export let shadowed = false;
</script>

<style>
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

	:global(.spectre) .card {
		background: #fff;
		border: 0.05rem solid #dadee4;
		border-radius: 0.1rem;
		display: flex;
		flex-direction: column;
	}
	:global(.spectre) .card .card-header,
	:global(.spectre) .card .card-body,
	:global(.spectre) .card .card-footer {
		padding: 0.8rem;
		padding-bottom: 0;
	}
	:global(.spectre) .card .card-header:last-child,
	:global(.spectre) .card .card-body:last-child,
	:global(.spectre) .card .card-footer:last-child {
		padding-bottom: 0.8rem;
	}
	:global(.spectre) .card .card-body {
		flex: 1 1 auto;
	}
	:global(.spectre) .card .card-image {
		padding-top: 0.8rem;
	}
	:global(.spectre) .card .card-image:first-child {
		padding-top: 0;
	}
	:global(.spectre) .card .card-image:first-child img {
		border-top-left-radius: 0.1rem;
		border-top-right-radius: 0.1rem;
	}
	:global(.spectre) .card .card-image:last-child img {
		border-bottom-left-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	:global(.spectre) .card {
		margin: 0;
	}
	:global(.spectre) .card .card-title,
	:global(.spectre) .card .card-subtitle {
		word-break: break-all;
	}
	:global(.spectre) .card.card-clear {
		background: 0 0;
		border: 0;
	}
	:global(.spectre) .card.card-flat {
		border: 0;
	}
	:global(.spectre) .card.card-outlined {
		background: 0 0;
	}
	:global(.spectre) .card.card-shadowed {
		box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
	}
	:global(.spectre) .card.card-expand {
		height: 100%;
	}
	@media (prefers-color-scheme: dark) {
		:global(.spectre) .card {
			background: #252b33;
			border-color: #303742;
		}
		:global(.spectre) .card.card-shadowed {
			box-shadow: 0 0.25rem 1rem rgba(16, 18, 22, 0.45);
		}
	}
	:global(.spectre) .card [color-scheme='dark'] {
		background: #252b33;
		border-color: #303742;
	}
	:global(.spectre) .card [color-scheme='dark'].card-shadowed {
		box-shadow: 0 0.25rem 1rem rgba(16, 18, 22, 0.45);
	}
</style>
