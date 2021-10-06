<Button shape="square" variant="link" {...$$restProps} on:click on:dblclick>
	<Icon {icon} {color} size={iconSize} svg={$$slots.default}><slot /></Icon>
</Button>

<script lang="ts" context="module">
	import Button from './Button.svelte';
	import { Icon } from '../Icon';

	import type { Variant } from '../Button';
	import type { Zoom, Icons } from '../Icon';
	import type { Color } from '../../types/text';
	export type { Zoom, Icons, Variant, Color };
</script>

<script lang="ts">
	export let icon: Icons;
	export let iconSize: Zoom = '1x';
	export let color: Color = '';
</script>
