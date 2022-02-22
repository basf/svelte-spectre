<Button shape="square" variant="link" {...$$restProps} on:click on:dblclick>
	<Icon {icon} {color} size={iconSize} svg={$$slots.default}><slot /></Icon>
</Button>

<script context="module">
	import Button from './Button.svelte';
	import Icon from '../Icon/Icon.svelte';
</script>

<script>
	export let icon;
	export let iconSize = '1x';
	export let color = '';
</script>
