<div class="navbar {classes}">
	<div class="navbar-section">
		<slot name="left" />
	</div>
	<div class="navbar-center">
		<slot name="center" />
	</div>
	<div class="navbar-section">
		<slot name="right" />
	</div>
</div>

<script lang="ts">
	export let classes: string;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/navbar';
	}
</style>
