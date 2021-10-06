<figure {...$$restProps} class="card">
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
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/cards';
	}
	.card {
		margin: 0;
	}
	.card-title,
	.card-subtitle {
		word-break: break-all;
	}
</style>
