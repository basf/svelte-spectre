<div class="input-group">
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

	export type { Size };
</script>

<script lang="ts">
	export let button: string = 'input-group-btn';
	export let size: Size = 'md';
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
</style>
