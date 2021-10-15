<div class="input-group {margin} {padding}">
	{#if $$slots.addon}
		<span class="input-group-addon addon-{size}"><slot name="addon" /></span>
	{/if}
	{#if $$slots.default}
		<slot />
	{/if}
	{#if $$slots.button}
		<slot name="button" {button} />
	{/if}
</div>

<script lang="ts" context="module">
	import type { Size } from '../../types/size';
	import type { Margin, Padding } from '../../types/position';

	export type { Size };
</script>

<script lang="ts">
	export let button: string = 'input-group-btn';
	export let size: Size = 'md';
	export let margin: Margin;
	export let padding: Padding;
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
</style>
