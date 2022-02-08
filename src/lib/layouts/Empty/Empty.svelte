<div {...$$restProps} class="empty">
	{#if $$slots.icon}
		<div class="empty-icon">
			<slot name="icon" />
		</div>
	{/if}
	{#if $$slots.title}
		<div class="empty-title">
			<slot name="title" />
		</div>
	{/if}
	{#if $$slots.subtitle}
		<div class="empty-subtitle">
			<slot name="subtitle" />
		</div>
	{/if}
	{#if $$slots.action}
		<div class="empty-action">
			<slot name="action" />
		</div>
	{/if}
</div>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/empty';

		.empty {
			& > :global(:nth-child(n + 2) > *) {
				margin: 0;
			}
			@media (prefers-color-scheme: dark) {
				background: $dark-color;
			}
			[color-scheme='dark'] {
				background: $dark-background;
			}
		}
	}
</style>
