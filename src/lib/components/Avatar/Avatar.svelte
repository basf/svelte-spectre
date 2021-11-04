<figure
	class="avatar avatar-{size} text-{weight} {offset}"
	data-initial={initials}
	style="
        background-color: {color.toHexString()};
        font-size: {fontSize}px;
        color: {color.isLight() ? '#000' : '#fff'}
    "
	use:addBadge={badge}
>
	<slot />
	{#if $$slots.sub}
		<span class="avatar-icon">
			<slot name="sub" />
		</span>
	{/if}
	{#if status}<i class="avatar-presence {status}" />{/if}
	{#if caption || $$slots.caption}
		<figcaption class="text-dark">
			<slot name="caption">{name}</slot>
		</figcaption>
	{/if}
</figure>

<script lang="ts" context="module">
	import { TinyColor, random } from '@ctrl/tinycolor';
	import { badge as addBadge } from '../../components/Badge';
	import { SIZE } from '../../types/const';

	import type { Size } from '../../types/size';
	import type { Weight } from '../../types/text';
	import type { Offset } from '../../types/position';
	export type Status = 'online' | 'busy' | 'away' | 'offline' | false;
	export type { Offset, Size, Weight };
</script>

<script lang="ts">
	export let name: string = '';
	export let bg: string = '#f6f6f6';
	export let len: number = 0;
	export let caption: boolean = false;
	export let size: Size = 'md';
	export let weight: Weight = 'normal';
	export let status: Status = false;
	export let offset: Offset = '';
	export let badge: any;
	let words: RegExpMatchArray;
	let clip: number;
	let fontSize: number;
	let initials: string;
	$: color = bg ? new TinyColor(bg) : random();
	$: words = name.length && name.replace('.', '/').match(/\b(\w)|([A-Z])|(\/)/g);
	$: clip = len || words.length;
	$: fontSize = SIZE[size] * (1 / clip);
	$: initials = words && words.slice(0, clip).join('').toUpperCase();
</script>

<style lang="scss">
	@import 'spectre.css/src/avatars';
	@import 'spectre.css/src/utilities';

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
		figcaption {
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translate(-50%, 0);
			font-size: 80%;
			color: black;
			text-align: center;
		}
	}
</style>
