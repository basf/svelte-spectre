<i {...$$restProps} class="icon icon-{size} {icon && `icon-${icon}`} {color && `text-${color}`}">
	<slot />
</i>

<script lang="ts" context="module">
	import type { Zoom } from '../../types/size';
	import type { Icons } from '../../types/icons';
	import type { Color } from '../../types/text';

	export type { Zoom, Icons };
</script>

<script lang="ts">
	export let icon: Icons = '';
	export let size: Zoom = '1x';
	export let color: Color = '';
</script>

<style lang="scss">
	@import '@spectre-org/spectre-css/src/icons';
	:global {
		@import '@spectre-org/spectre-css/src/icons/icons-core';
	}

	.icon {
		text-indent: 0;
		line-height: normal;
		& > :global(svg),
		& > :global(img) {
			fill: currentColor;
			width: 100%;
			height: 100%;
		}
		&[svg='true'] {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		// fix
		&.icon-edit::after {
			left: 9%;
			top: 96%;
		}
	}

	// icon-diamond - TODO
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

	// icon-sun
	.icon-sun {
		box-sizing: border-box;
		position: relative;
		display: block;
		transform: scale(var(--ggs, 1));
		width: 24px;
		height: 24px;
		background: linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px -6px/2px
				6px,
			linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px 14px/2px 6px,
			linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px 2px,
			linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px 5px/6px 2px;
		border-radius: 100px;
		box-shadow: inset 0 0 0 2px;
		border: 6px solid transparent;

		&::after,
		&::before {
			content: '';
			display: block;
			box-sizing: border-box;
			position: absolute;
			width: 24px;
			height: 2px;
			border-right: 4px solid;
			border-left: 4px solid;
			left: -6px;
			top: 5px;
		}

		&::before {
			transform: rotate(-45deg);
		}

		&::after {
			transform: rotate(45deg);
		}
	}

	// icon-moon
	.icon-moon {
		overflow: hidden;
		position: relative;
		transform: rotate(-135deg) scale(var(--ggs, 1));
		width: 20px;
		height: 20px;
		border: 2px solid;
		border-bottom-color: transparent;
		display: block;
		box-sizing: border-box;
		border-radius: 50%;

		&::after {
			display: block;
			box-sizing: border-box;
			border-radius: 50%;
			content: '';
			position: absolute;
			width: 12px;
			height: 18px;
			border: 2px solid transparent;
			box-shadow: 0 0 0 2px;
			top: 8px;
			left: 2px;
		}
	}

	// icon-tag
	.icon-tag {
		border: 2px solid;
		border-right: 0;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		box-sizing: border-box;
		transform: scale(var(--ggs, 0.8)) rotate(-45deg);
		position: relative;
		width: 19px !important;
		height: 14px !important;

		&::before {
			content: '';
			display: block;
			border: 2px solid;
			position: absolute;
			width: 2px;
			height: 2px;
			box-sizing: content-box !important;
			border-radius: 100px;
			left: 85% !important;
		}
		&::after {
			content: '';
			display: block;
			box-sizing: border-box;
			position: absolute;
			width: 10px;
			height: 10px;
			border-bottom: 2px solid;
			border-right: 2px solid;
			border-bottom-right-radius: 4px;
			transform: rotate(-45deg) !important;
			top: 0 !important;
			left: 70% !important;
		}
	}
</style>
