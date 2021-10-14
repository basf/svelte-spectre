<figure class="avatar avatar-{size} text-{weight} {offset}" data-initial={initial}>
	<slot />
	{#if $$slots.sub}
		<span class="avatar-icon">
			<slot name="sub" />
		</span>
	{/if}
	{#if status}<i class="avatar-presence {status}" />{/if}
</figure>

<script lang="ts" context="module">
	import type { Size } from '../../types/size';
	import type { Weight } from '../../types/text';
	import type { Offset } from '../../types/position';

	type Status = 'online' | 'busy' | 'away' | 'offline' | false;

	export type { Offset, Size, Status, Weight };
</script>

<script lang="ts">
	export let size: Size = 'md';
	export let weight: Weight = 'normal';
	export let status: Status = false;
	export let initial: string = '';
	export let offset: Offset = '';
</script>

<style lang="scss">
	@import 'spectre.css/src/avatars';
	// @import 'spectre.css/src/utilities';
	:global(.spectre) {
		.avatar {
			:global(img) {
				border-radius: 50%;
				height: 100%;
				position: relative;
				width: 100%;
				z-index: 1;
			}
			.avatar-icon {
				border-radius: 50%;
				display: flex;
			}
		}
	}
</style>
