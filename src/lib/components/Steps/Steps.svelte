<ul class="step">
	{#each steps as { href, label }}
		<li class="step-item">
			<a {href} class="tooltip" data-tooltip={label}>{label}</a>
		</li>
	{/each}
</ul>

<script lang="ts" context="module">
	export type Step = {
		label: string;
		href?: string;
	};
</script>

<script lang="ts">
	export let steps: Step[] = [];
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/steps';
	}
</style>
