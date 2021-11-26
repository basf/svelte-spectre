<ul {...$$restProps} class="step">
	{#each steps as { href, label, tooltip, active }}
		<li class="step-item" class:active>
			<a {href} class="tooltip" data-tooltip={tooltip}>{label}</a>
		</li>
	{/each}
</ul>

<script lang="ts" context="module">
	export type Step = {
		label: string;
		href?: string;
		tooltip?: string;
		active?: boolean;
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
