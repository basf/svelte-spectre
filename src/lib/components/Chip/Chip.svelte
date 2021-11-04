<div {...$$restProps} class="chip {offset}">
	{#if name || $$slots.avatar}
		<Avatar size="sm" {name} {status} offset="ml--2 mr-2">
			<slot name="avatar" />
		</Avatar>
	{/if}
	<slot />
	{#if closable}
		<IconButton icon="cross" size="xs" shape="circle" />
	{/if}
</div>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';
	import type { Status } from '../Avatar/Avatar.svelte';

	import Avatar from '../Avatar/Avatar.svelte';
	import IconButton from '../Button/IconButton.svelte';
</script>

<script lang="ts">
	export let offset: Offset = '';
	export let name: string = '';
	export let status: Status = false;
	export let closable: boolean = false;
</script>

<style lang="scss">
	@import 'spectre.css/src/chips';
	:global(.spectre .chip .btn-link) {
		color: $dark-color !important;
		margin-left: $unit-1;
		margin-right: -$unit-1;
	}
</style>
