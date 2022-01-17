<figure
	{...$$restProps}
	class="avatar avatar-{size} text-{weight}"
	data-initial={`${initials || ''}`}
	style="
		{fontSize && `--fontSize: ${fontSize}px`};
        background-color: {color.toHexString()};
        color: {color.isLight() ? '#000' : '#fff'}
    "
	use:addBadge={badge}
>
	<slot />

	{#if status}
		<i class="avatar-presence {status}" />
	{:else if $$slots.sub}
		<span class="avatar-icon">
			<slot name="sub" />
		</span>
	{/if}
	{#if caption || $$slots.caption}
		<figcaption class="text-dark">
			<slot name="caption">{name}</slot>
		</figcaption>
	{/if}
</figure>

<script context="module">
	import { TinyColor } from '@ctrl/tinycolor';
	import { badge as addBadge } from '../../components/Badge';
	import { SIZE } from '../../types/const';
	import { str_to_rgb } from '../../helpers/str_to_rgb';
</script>

<script>
	export let name = '';
	export let bg = '';
	export let len = 0;
	export let caption = false;
	export let custom = false;
	export let size = 'md';
	export let weight = 'normal';
	export let status = null;
	export let badge = '';
	let words;
	let clip;
	let fontSize;
	let initials;
	$: color = new TinyColor(bg ? bg : str_to_rgb(name));
	$: words = name.length && name.replace('.', '/').match(/\b(\w)|([A-Z])|(\/)/g);
	$: clip = len || words.length;
	$: fontSize = SIZE[size] * (1 / clip);
	$: initials = custom ? name : words.length && words.slice(0, clip).join('').toUpperCase();
</script>

<style>
	.text-primary {
		color: #5755d9 !important;
	}

	a.text-primary:focus,
	a.text-primary:hover {
		color: #4240d4;
	}
	a.text-primary:visited {
		color: #6c6ade;
	}

	.text-secondary {
		color: #e5e5f9 !important;
	}

	a.text-secondary:focus,
	a.text-secondary:hover {
		color: #d1d0f4;
	}
	a.text-secondary:visited {
		color: #fafafe;
	}

	.text-gray {
		color: #bcc3ce !important;
	}

	a.text-gray:focus,
	a.text-gray:hover {
		color: #adb6c4;
	}
	a.text-gray:visited {
		color: #cbd0d9;
	}

	.text-light {
		color: #fff !important;
	}

	a.text-light:focus,
	a.text-light:hover {
		color: #f2f2f2;
	}
	a.text-light:visited {
		color: white;
	}

	.text-dark {
		color: #3b4351 !important;
	}

	a.text-dark:focus,
	a.text-dark:hover {
		color: #303742;
	}
	a.text-dark:visited {
		color: #455060;
	}

	.text-success {
		color: #32b643 !important;
	}

	a.text-success:focus,
	a.text-success:hover {
		color: #2da23c;
	}
	a.text-success:visited {
		color: #39c94b;
	}

	.text-warning {
		color: #ffb700 !important;
	}

	a.text-warning:focus,
	a.text-warning:hover {
		color: #e6a500;
	}
	a.text-warning:visited {
		color: #ffbe1a;
	}

	.text-error {
		color: #e85600 !important;
	}

	a.text-error:focus,
	a.text-error:hover {
		color: #cf4d00;
	}
	a.text-error:visited {
		color: #ff6003;
	}

	.bg-primary {
		background: #5755d9 !important;
		color: #fff;
	}

	.bg-secondary {
		background: #f1f1fc !important;
	}

	.bg-dark {
		background: #303742 !important;
		color: #fff;
	}

	.bg-gray {
		background: #f7f8f9 !important;
	}

	.bg-success {
		background: #32b643 !important;
		color: #fff;
	}

	.bg-warning {
		background: #ffb700 !important;
		color: #fff;
	}

	.bg-error {
		background: #e85600 !important;
		color: #fff;
	}

	.c-hand {
		cursor: pointer;
	}

	.c-move {
		cursor: move;
	}

	.c-zoom-in {
		cursor: zoom-in;
	}

	.c-zoom-out {
		cursor: zoom-out;
	}

	.c-not-allowed {
		cursor: not-allowed;
	}

	.c-auto {
		cursor: auto;
	}

	.d-block {
		display: block;
	}

	.d-inline {
		display: inline;
	}

	.d-inline-block {
		display: inline-block;
	}

	.d-flex {
		display: flex;
	}

	.d-inline-flex {
		display: inline-flex;
	}

	.d-none,
	.d-hide {
		display: none !important;
	}

	.d-visible {
		visibility: visible;
	}

	.d-invisible {
		visibility: hidden;
	}

	.text-hide {
		background: transparent;
		border: 0;
		color: transparent;
		font-size: 0;
		line-height: 0;
		text-shadow: none;
	}

	.text-assistive {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}

	.divider,
	.divider-vert {
		display: block;
		position: relative;
	}
	.divider[data-content]::after,
	.divider-vert[data-content]::after {
		background: #fff;
		color: #bcc3ce;
		content: attr(data-content);
		display: inline-block;
		font-size: 0.7rem;
		padding: 0 0.4rem;
		transform: translateY(-0.65rem);
	}

	.divider {
		border-top: 0.05rem solid #f1f3f5;
		height: 0.05rem;
		margin: 0.4rem 0;
	}
	.divider[data-content] {
		margin: 0.8rem 0;
	}

	.divider-vert {
		display: block;
		padding: 0.8rem;
	}
	.divider-vert::before {
		border-left: 0.05rem solid #dadee4;
		bottom: 0.4rem;
		content: '';
		display: block;
		left: 50%;
		position: absolute;
		top: 0.4rem;
		transform: translateX(-50%);
	}
	.divider-vert[data-content]::after {
		left: 50%;
		padding: 0.2rem 0;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.loading {
		color: transparent !important;
		min-height: 0.8rem;
		pointer-events: none;
		position: relative;
	}
	.loading::after {
		-webkit-animation: loading 500ms infinite linear;
		animation: loading 500ms infinite linear;
		background: transparent;
		border: 0.1rem solid #5755d9;
		border-radius: 50%;
		border-right-color: transparent;
		border-top-color: transparent;
		content: '';
		display: block;
		height: 0.8rem;
		left: 50%;
		margin-left: -0.4rem;
		margin-top: -0.4rem;
		opacity: 1;
		padding: 0;
		position: absolute;
		top: 50%;
		width: 0.8rem;
		z-index: 1;
	}
	.loading.loading-lg {
		min-height: 2rem;
	}
	.loading.loading-lg::after {
		height: 1.6rem;
		margin-left: -0.8rem;
		margin-top: -0.8rem;
		width: 1.6rem;
	}

	.clearfix::after {
		clear: both;
		content: '';
		display: table;
	}

	.float-left {
		float: left !important;
	}

	.float-right {
		float: right !important;
	}

	.p-relative {
		position: relative !important;
	}

	.p-absolute {
		position: absolute !important;
	}

	.p-fixed {
		position: fixed !important;
	}

	.p-sticky {
		position: -webkit-sticky !important;
		position: sticky !important;
	}

	.p-centered {
		display: block;
		float: none;
		margin-left: auto;
		margin-right: auto;
	}

	.flex-centered {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.m-0 {
		margin: 0 !important;
	}

	.mb-0 {
		margin-bottom: 0 !important;
	}

	.ml-0 {
		margin-left: 0 !important;
	}

	.mr-0 {
		margin-right: 0 !important;
	}

	.mt-0 {
		margin-top: 0 !important;
	}

	.mx-0 {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}

	.my-0 {
		margin-bottom: 0 !important;
		margin-top: 0 !important;
	}

	.m-1 {
		margin: 0.2rem !important;
	}

	.mb-1 {
		margin-bottom: 0.2rem !important;
	}

	.ml-1 {
		margin-left: 0.2rem !important;
	}

	.mr-1 {
		margin-right: 0.2rem !important;
	}

	.mt-1 {
		margin-top: 0.2rem !important;
	}

	.mx-1 {
		margin-left: 0.2rem !important;
		margin-right: 0.2rem !important;
	}

	.my-1 {
		margin-bottom: 0.2rem !important;
		margin-top: 0.2rem !important;
	}

	.m-2 {
		margin: 0.4rem !important;
	}

	.mb-2 {
		margin-bottom: 0.4rem !important;
	}

	.ml-2 {
		margin-left: 0.4rem !important;
	}

	.mr-2 {
		margin-right: 0.4rem !important;
	}

	.mt-2 {
		margin-top: 0.4rem !important;
	}

	.mx-2 {
		margin-left: 0.4rem !important;
		margin-right: 0.4rem !important;
	}

	.my-2 {
		margin-bottom: 0.4rem !important;
		margin-top: 0.4rem !important;
	}

	.p-0 {
		padding: 0 !important;
	}

	.pb-0 {
		padding-bottom: 0 !important;
	}

	.pl-0 {
		padding-left: 0 !important;
	}

	.pr-0 {
		padding-right: 0 !important;
	}

	.pt-0 {
		padding-top: 0 !important;
	}

	.px-0 {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	.py-0 {
		padding-bottom: 0 !important;
		padding-top: 0 !important;
	}

	.p-1 {
		padding: 0.2rem !important;
	}

	.pb-1 {
		padding-bottom: 0.2rem !important;
	}

	.pl-1 {
		padding-left: 0.2rem !important;
	}

	.pr-1 {
		padding-right: 0.2rem !important;
	}

	.pt-1 {
		padding-top: 0.2rem !important;
	}

	.px-1 {
		padding-left: 0.2rem !important;
		padding-right: 0.2rem !important;
	}

	.py-1 {
		padding-bottom: 0.2rem !important;
		padding-top: 0.2rem !important;
	}

	.p-2 {
		padding: 0.4rem !important;
	}

	.pb-2 {
		padding-bottom: 0.4rem !important;
	}

	.pl-2 {
		padding-left: 0.4rem !important;
	}

	.pr-2 {
		padding-right: 0.4rem !important;
	}

	.pt-2 {
		padding-top: 0.4rem !important;
	}

	.px-2 {
		padding-left: 0.4rem !important;
		padding-right: 0.4rem !important;
	}

	.py-2 {
		padding-bottom: 0.4rem !important;
		padding-top: 0.4rem !important;
	}

	.s-rounded {
		border-radius: 0.1rem;
	}

	.s-circle {
		border-radius: 50%;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}

	.text-center {
		text-align: center;
	}

	.text-justify {
		text-align: justify;
	}

	.text-lowercase {
		text-transform: lowercase;
	}

	.text-uppercase {
		text-transform: uppercase;
	}

	.text-capitalize {
		text-transform: capitalize;
	}

	.text-normal {
		font-weight: normal;
	}

	.text-bold {
		font-weight: bold;
	}

	.text-italic {
		font-style: italic;
	}

	.text-large {
		font-size: 1.2em;
	}

	.text-small {
		font-size: 0.9em;
	}

	.text-tiny {
		font-size: 0.8em;
	}

	.text-muted {
		opacity: 0.8;
	}

	.text-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.text-clip {
		overflow: hidden;
		text-overflow: clip;
		white-space: nowrap;
	}

	.text-break {
		-webkit-hyphens: auto;
		-ms-hyphens: auto;
		hyphens: auto;
		word-break: break-word;
		word-wrap: break-word;
	}

	.avatar {
		font-size: 0.8rem;
		height: 1.6rem;
		width: 1.6rem;
		background: #5755d9;
		border-radius: 50%;
		color: rgba(255, 255, 255, 0.85);
		display: inline-block;
		font-weight: 300;
		line-height: 1.25;
		margin: 0;
		position: relative;
		vertical-align: middle;
	}
	.avatar.avatar-xs {
		font-size: 0.4rem;
		height: 0.8rem;
		width: 0.8rem;
	}
	.avatar.avatar-sm {
		font-size: 0.6rem;
		height: 1.2rem;
		width: 1.2rem;
	}
	.avatar.avatar-lg {
		font-size: 1.2rem;
		height: 2.4rem;
		width: 2.4rem;
	}
	.avatar.avatar-xl {
		font-size: 1.6rem;
		height: 3.2rem;
		width: 3.2rem;
	}
	.avatar img {
		border-radius: 50%;
		height: 100%;
		position: relative;
		width: 100%;
		z-index: 1;
	}
	.avatar .avatar-icon,
	.avatar .avatar-presence {
		background: #fff;
		bottom: 14.64%;
		height: 50%;
		padding: 0.1rem;
		position: absolute;
		right: 14.64%;
		transform: translate(50%, 50%);
		width: 50%;
		z-index: 2;
	}
	.avatar .avatar-presence {
		background: #bcc3ce;
		box-shadow: 0 0 0 0.1rem #fff;
		border-radius: 50%;
		height: 0.5em;
		width: 0.5em;
	}
	.avatar .avatar-presence.online {
		background: #32b643;
	}
	.avatar .avatar-presence.busy {
		background: #e85600;
	}
	.avatar .avatar-presence.away {
		background: #ffb700;
	}
	.avatar[data-initial]::before {
		color: currentColor;
		content: attr(data-initial);
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	:global(.spectre) .avatar :global(img) {
		border-radius: 50%;
		height: 100%;
		position: relative;
		width: 100%;
		z-index: 1;
	}
	:global(.spectre) .avatar :global(.avatar-icon) {
		border-radius: 50%;
		display: flex;
		background: #fff;
		bottom: 14.64%;
		height: 50%;
		padding: 0.1rem;
		position: absolute;
		right: 14.64%;
		transform: translate(50%, 50%);
		width: 50%;
		z-index: 2;
	}
	:global(.spectre) .avatar :global(.avatar-icon):empty {
		display: none;
	}
	:global(.spectre) .avatar::before {
		font-size: var(--fontSize);
	}
	:global(.spectre) figcaption {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, 0);
		font-size: 80%;
		color: black;
		text-align: center;
	}
</style>
