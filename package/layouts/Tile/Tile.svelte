<div class="tile tile-centered">
	<div class="tile-icon">
		<slot name="icon" />
	</div>
	<div class="tile-content">
		<div class="tile-title">
			<slot name="title" />
		</div>
		<div class="tile-subtitle">
			<slot name="subtitle" />
		</div>
		<slot />
	</div>
	<div class="tile-action">
		<slot name="action" />
	</div>
</div>

<style >:global(.spectre) .tile {
  align-content: space-between;
  align-items: flex-start;
  display: flex;
}
:global(.spectre) .tile .tile-icon,
:global(.spectre) .tile .tile-action {
  flex: 0 0 auto;
}
:global(.spectre) .tile .tile-content {
  flex: 1 1 auto;
}
:global(.spectre) .tile .tile-content:not(:first-child) {
  padding-left: 0.4rem;
}
:global(.spectre) .tile .tile-content:not(:last-child) {
  padding-right: 0.4rem;
}
:global(.spectre) .tile .tile-title,
:global(.spectre) .tile .tile-subtitle {
  line-height: 1.2rem;
}
:global(.spectre) .tile.tile-centered {
  align-items: center;
}
:global(.spectre) .tile.tile-centered .tile-content {
  overflow: hidden;
}
:global(.spectre) .tile.tile-centered .tile-title,
:global(.spectre) .tile.tile-centered .tile-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}</style>
