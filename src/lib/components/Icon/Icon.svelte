<i
	{...$$restProps}
	class="icon icon-{size} {icon && `icon-${icon}`} {color && `text-${color}`} {offset}"
>
	<slot />
</i>

<script lang="ts" context="module">
	import type { Zoom } from '../../types/size';
	import type { Icons } from '../../types/icons';
	import type { Offset } from '../../types/position';
	import type { Color } from '../../types/text';

	export type { Zoom, Icons };
</script>

<script lang="ts">
	export let icon: Icons = '';
	export let size: Zoom = '1x';
	export let offset: Offset = '';
	export let color: Color = '';
</script>

<style lang="scss">
	@import 'spectre.css/src/icons';
	:global {
		@import 'spectre.css/src/icons/icons-core';
	}

	.icon {
		text-indent: 0;
		& > :global(svg) {
			fill: currentColor;
			width: 100%;
			height: 100%;
		}
		&[svg='true'] {
			display: flex;
		}
	}

	// icon-dimond - DRAFT!!!
	.icon-diamond {
		border-style: solid;
		border-color: transparent transparent red transparent;
		border-width: 0 25px 25px 25px;
		height: 0;
		width: 50px;
		box-sizing: content-box;
		position: relative;
		margin: 20px 0 50px 0;
		&:after {
			content: '';
			position: absolute;
			top: 25px;
			left: -25px;
			width: 0;
			height: 0;
			border-style: solid;
			border-color: red transparent transparent transparent;
			border-width: 70px 50px 0 50px;
		}
	}

	// icon-home
	.icon-home {
		&::before {
			border: $icon-border-width solid currentColor;
			border-bottom: 0;
			border-right: 0;
			transform: translate(-50%, -40%) rotate(45deg);
			width: 0.8em;
			height: 0.8em;
		}

		&::after {
			transform: translate(-50%, -10%);
			border-bottom: $icon-border-width solid currentColor;
			border-right: $icon-border-width solid currentColor;
			border-left: $icon-border-width solid currentColor;
			height: 0.6em;
			width: 0.8em;
		}
	}

	// icon-check-circle
	.icon-circle-check {
		&::before {
			width: 0.5em;
			height: 0.25em;
			border: 0.125rem solid currentColor;
			border-top: 0;
			border-right: 0;
			top: 0.3125em;
			left: 0.25em;
			background: transparent;
			transform: rotate(-45deg);
		}

		&::after {
			background-color: transparent;
			border: 0.125rem solid currentColor;
			border-radius: 100%;
			width: 1.05em;
			height: 1.05em;
		}
	}

	// icon-wifi
	.icon-wifi {
		&::before {
			width: 0.75em;
			background: transparent;
			height: 0.75em;
			left: 0.125em;
			top: -0.0625em;
			border-style: double;
			border-color: currentColor;
			border-width: 0.375em 0.375em 0 0;
			border-radius: 0 1em 0 0;
			transform: rotate(-45deg);
		}

		&::after {
			border-radius: 0 1em 0 0;
			background-color: currentColor;
			width: 0.25em;
			height: 0.25em;
			transform: rotate(-45deg);
			bottom: 0.1875em;
			left: 0.375em;
		}
	}

	// icon-audio
	.icon-audio {
		border: 0.1rem solid currentColor;
		border-radius: 0.4em;
		height: 0.6em;
		margin: -0.4em 0.3em 0 0.3em;
		width: 0.4em;
		&::after {
			border: 0.1rem solid currentColor;
			border-right-color: currentcolor;
			border-bottom-color: currentcolor;
			border-bottom-color: transparent;
			border-radius: 50%;
			border-right-color: transparent;
			height: 0.7em;
			transform: translate(-50%, -35%) rotate(-135deg);
			width: 0.7em;
		}
		&::before {
			background: currentColor;
			height: 0.15em;
			transform: translate(-50%, 0.45em);
			width: 0.1rem;
		}
	}
</style>
