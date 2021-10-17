<div class="input-group {offset} {inset}">
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
	import type { Offset, Inset } from '../../types/position';

	export type { Size };
</script>

<script lang="ts">
	export let button: string = 'input-group-btn';
	export let size: Size = 'md';
	export let offset: Offset;
	export let inset: Inset;
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
</style>
