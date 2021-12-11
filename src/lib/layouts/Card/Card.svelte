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

<script lang="ts" context="module">
	export type Position = 'top' | 'middle' | 'bottom';
</script>

<script lang="ts">
	export let pos: Position = 'top';
	export let clear: boolean = false;
	export let flat: boolean = false;
	export let outlined: boolean = false;
	export let expand: boolean = false;
	export let shadowed: boolean = false;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/cards';
	}
	.card {
		margin: 0;
		.card-title,
		.card-subtitle {
			word-break: break-all;
		}
		&.card-clear {
			background: 0 0;
			border: 0;
		}
		&.card-flat {
			border: 0;
		}
		&.card-outlined {
			background: 0 0;
		}
		&.card-shadowed {
			box-shadow: 0 0.25rem 1rem rgba($dark-color, 0.15);
		}
		&.card-expand {
			height: 100%;
		}
	}
</style>
