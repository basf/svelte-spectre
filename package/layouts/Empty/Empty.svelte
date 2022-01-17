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

<style>
	:global(.spectre) .empty {
		background: #f7f8f9;
		border-radius: 0.1rem;
		color: #66758c;
		text-align: center;
		padding: 3.2rem 1.6rem;
	}
	:global(.spectre) .empty .empty-icon {
		margin-bottom: 0.8rem;
	}
	:global(.spectre) .empty .empty-title,
	:global(.spectre) .empty .empty-subtitle {
		margin: 0.4rem auto;
	}
	:global(.spectre) .empty .empty-action {
		margin-top: 0.8rem;
	}

	.empty > :global(:nth-child(n + 2) > *) {
		margin: 0;
	}
</style>
