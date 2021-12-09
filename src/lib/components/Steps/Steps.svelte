<ul {...$$restProps} class="step">
	{#each steps as { href, label, tooltip }, i}
		<li class="step-item" class:active={active === i + 1}>
			<a
				{href}
				class:tooltip
				data-tooltip={tooltip}
				on:click|preventDefault={() => (active = i + 1)}>{label}</a
			>
		</li>
	{/each}
</ul>

<script lang="ts" context="module">
	export interface Step {
		label: string;
		href?: string;
		tooltip?: string;
	}
</script>

<script lang="ts">
	export let steps: Step[] = [];
	export let active: number = 1;
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/steps';
	}
</style>
