{#if inline}
	<code><slot /></code>
{:else}
	<pre class="code" data-lang="HTML">
		<code class="language-html"><slot/></code>
	</pre>
{/if}

<script context="module" lang="ts">
	import Prism from 'prismjs';
	import type { Size } from '../../types/size';
	import type { Offset } from '../../types/position';

	export type { Size, Offset };
</script>

<script lang="ts">
	export let inline: boolean = false;
	export let size: Size = 'md';
	export let offset: Offset = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/codes';
		.code {
			.token.tag {
				color: lighten($body-font-color, 10%);
			}

			.token.comment {
				color: $gray-color;
			}

			.token.title,
			.token.class,
			.token.string,
			.token.number {
				color: $primary-color;
			}

			.token.name,
			.token.attribute,
			.token.variable,
			.token.keyword,
			.token.built_in {
				color: $code-color;
			}

			.token.value,
			.token.hexcolor {
				color: lighten($body-font-color, 10%);
			}
		}
	}
	// code[class*='language-'],
	// pre[class*='language-'] {
	// 	color: lighten($body-font-color, 10%);
	// 	// background: $background-color;
	// 	/* text-shadow: 0 1px white; */
	// 	font-family: $mono-font-family;
	// 	/* font-size: 1em; */
	// 	text-align: left;
	// 	white-space: pre;
	// 	word-spacing: normal;
	// 	word-break: normal;
	// 	word-wrap: normal;
	// 	line-height: 1.5;

	// 	-moz-tab-size: 4;
	// 	-o-tab-size: 4;
	// 	tab-size: 4;

	// 	-webkit-hyphens: none;
	// 	-moz-hyphens: none;
	// 	-ms-hyphens: none;
	// 	hyphens: none;
	// }

	// pre[class*='language-']::-moz-selection,
	// pre[class*='language-'] ::-moz-selection,
	// code[class*='language-']::-moz-selection,
	// code[class*='language-'] ::-moz-selection {
	// 	text-shadow: none;
	// 	background: $highlight-color;
	// }

	// pre[class*='language-']::selection,
	// pre[class*='language-'] ::selection,
	// code[class*='language-']::selection,
	// code[class*='language-'] ::selection {
	// 	text-shadow: none;
	// 	background: $highlight-color;
	// }

	// @media print {
	// 	code[class*='language-'],
	// 	pre[class*='language-'] {
	// 		text-shadow: none;
	// 	}
	// }

	// /* Code blocks */
	// pre[class*='language-'] {
	// 	display: flex;
	// 	/* padding: 1em;
	// margin: 0.5em 0;
	// overflow: auto; */
	// }

	// :not(pre) > code[class*='language-'],
	// pre[class*='language-'] {
	// 	/* background: #f5f2f0; */
	// }

	// /* Inline code */
	// :not(pre) > code[class*='language-'] {
	// 	/* padding: 0.1em;
	// border-radius: 0.3em;
	// white-space: normal; */
	// }

	// .token.comment,
	// .token.prolog,
	// .token.doctype,
	// .token.cdata {
	// 	color: $gray-color;
	// 	font-style: italic;
	// }

	// .token.punctuation {
	// 	color: $gray-color;
	// }

	// .token.namespace {
	// 	opacity: 0.7;
	// }

	// .token.property,
	// .token.tag,
	// .token.boolean,
	// .token.number,
	// .token.constant,
	// .token.symbol,
	// .token.deleted {
	// 	color: $code-color;
	// }

	// .token.selector,
	// .token.attr-name,
	// .token.string,
	// .token.char,
	// .token.builtin,
	// .token.inserted {
	// 	color: $gray-color;
	// }

	// .token.operator,
	// .token.entity,
	// .token.url,
	// .language-css .token.string,
	// .style .token.string {
	// 	color: $code-color;
	// 	/* This background color was intended by the author of this theme. */
	// 	/* background: hsla(0, 0%, 100%, 0.5; */
	// }

	// .token.atrule,
	// .token.attr-value,
	// .token.keyword {
	// 	color: $primary-color;
	// }

	// .token.function,
	// .token.class-name {
	// 	color: $code-color;
	// }

	// .token.regex,
	// .token.important,
	// .token.variable {
	// 	color: $code-color;
	// }

	// .token.important,
	// .token.bold {
	// 	/* font-weight: bold; */
	// }
	// .token.italic {
	// 	font-style: italic;
	// }

	// .token.entity {
	// 	cursor: help;
	// }

	// #editor {
	// 	/* position: relative; */
	// 	/* caret-color: $code-color; */
	// }
	// #editor-content {
	// 	position: absolute;
	// 	inset: 0;
	// 	background: transparent;
	// 	color: transparent;
	// 	width: 100%;
	// 	height: 100%;
	// 	-webkit-box-sizing: border-box;
	// 	-moz-box-sizing: border-box;
	// 	box-sizing: border-box;
	// 	caret-color: $code-color;
	// 	line-height: 1.5;
	// 	padding: 1rem;
	// 	font-family: $mono-font-family;
	// 	font-size: 85%;
	// 	resize: none;
	// }
</style>
