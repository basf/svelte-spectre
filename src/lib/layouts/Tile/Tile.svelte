<div {...$$restProps} class="tile " class:tile-centered={centered}>
	{#if $$slots.icon}
		<div class="tile-icon">
			<slot name="icon" />
		</div>
	{/if}
	<div class="tile-content">
		{#if $$slots.title}
			<div class="tile-title">
				<slot name="title" />
			</div>
		{/if}
		{#if $$slots.subtitle}
			<div class="tile-subtitle">
				<slot name="subtitle" />
			</div>
		{/if}
		<slot />
	</div>
	{#if $$slots.action}
		<div class="tile-action">
			<slot name="action" />
		</div>
	{/if}
</div>

<script lang="ts">
	export let centered: boolean = true;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/tiles';
	}
</style>
