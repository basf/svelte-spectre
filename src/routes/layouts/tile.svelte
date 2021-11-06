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

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/tiles';
	}
</style>
