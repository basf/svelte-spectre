<div {...$$restProps} class="spectre">
	<slot />
</div>

<style>
	.spectre {
		display: contents;
		box-sizing: border-box;
		overflow-x: hidden;
		font-size: 0.8rem;
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', sans-serif;
		line-height: 1.5;
		text-rendering: optimizeLegibility;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		background: #fff;
		color: #3b4351;
	}
	.spectre {
		/* Manually forked from Normalize.css */
		/* normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
		/**
   * 1. Change the default font family in all browsers (opinionated).
   * 2. Correct the line height in all browsers.
   * 3. Prevent adjustments of font size after orientation changes in
   *    IE on Windows Phone and in iOS.
   */
		/* Document
     ========================================================================== */
		/* Sections
     ========================================================================== */
		/**
   * Remove the margin in all browsers (opinionated).
   */
		/**
   * Add the correct display in IE 9-.
   */
		/**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */
		/* Grouping content
     ========================================================================== */
		/**
   * Add the correct display in IE 9-.
   * 1. Add the correct display in IE.
   */
		/**
   * Add the correct margin in IE 8 (removed).
   */
		/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
		/**
   * 1. Correct the inheritance and scaling of font size in all browsers. (removed)
   * 2. Correct the odd `em` font sizing in all browsers.
   */
		/* Text-level semantics
     ========================================================================== */
		/**
   * 1. Remove the gray background on active links in IE 10.
   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
   */
		/**
   * Remove the outline on focused links when they are also active or hovered
   * in all browsers (opinionated).
   */
		/**
   * Modify default styling of address.
   */
		/**
   * 1. Remove the bottom border in Firefox 39-.
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. (removed)
   */
		/**
   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
   */
		/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
		/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
		/**
   * Add the correct font style in Android 4.3-.
   */
		/**
   * Add the correct background and color in IE 9-. (Removed)
   */
		/**
   * Add the correct font size in all browsers.
   */
		/**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */
		/* Embedded content
     ========================================================================== */
		/**
   * Add the correct display in IE 9-.
   */
		/**
   * Add the correct display in iOS 4-7.
   */
		/**
   * Remove the border on images inside links in IE 10-.
   */
		/**
   * Hide the overflow in IE.
   */
		/* Forms
     ========================================================================== */
		/**
   * 1. Change the font styles in all browsers (opinionated).
   * 2. Remove the margin in Firefox and Safari.
   */
		/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
		/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
		/**
   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
   *    controls in Android 4.
   * 2. Correct the inability to style clickable types in iOS and Safari.
   */
		/**
   * Remove the inner border and padding in Firefox.
   */
		/**
   * Restore the focus styles unset by the previous rule (removed).
   */
		/**
   * Change the border, margin, and padding in all browsers (opinionated) (changed).
   */
		/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from `fieldset` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    `fieldset` elements in all browsers.
   */
		/**
   * 1. Add the correct display in IE 9-.
   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
		/**
   * Remove the default vertical scrollbar in IE.
   */
		/**
   * 1. Add the correct box sizing in IE 10-.
   * 2. Remove the padding in IE 10-.
   */
		/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
		/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
		/**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */
		/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to `inherit` in Safari.
   */
		/* Interactive
     ========================================================================== */
		/*
   * Add the correct display in IE 9-.
   * 1. Add the correct display in Edge, IE, and Firefox.
   */
		/*
   * Add the correct display in all browsers.
   */
		/* Scripting
     ========================================================================== */
		/**
   * Add the correct display in IE 9-.
   */
		/**
   * Add the correct display in IE.
   */
		/* Hidden
     ========================================================================== */
		/**
   * Add the correct display in IE 10-.
   */
	}
	.spectre :global(*),
	.spectre :global(*::before),
	.spectre :global(*::after) {
		box-sizing: inherit;
	}
	.spectre :global(html) {
		box-sizing: border-box;
		font-size: 20px;
		line-height: 1.5;
		-webkit-tap-highlight-color: transparent;
	}
	.spectre :global(body) {
		background: #fff;
		color: #3b4351;
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', sans-serif;
		font-size: 0.8rem;
		overflow-x: hidden;
		text-rendering: optimizeLegibility;
	}
	.spectre :global(a) {
		color: #5755d9;
		outline: none;
		text-decoration: none;
	}
	.spectre :global(a:focus) {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
	}
	.spectre :global(a:focus),
	.spectre :global(a:hover),
	.spectre :global(a:active),
	.spectre :global(a.active) {
		color: #302ecd;
		text-decoration: underline;
	}
	.spectre :global(a:visited) {
		color: #807fe2;
	}
	.spectre :global(html) {
		font-family: sans-serif;
		/* 1 */
		-ms-text-size-adjust: 100%;
		/* 3 */
		-webkit-text-size-adjust: 100%;
		/* 3 */
	}
	.spectre :global(body) {
		margin: 0;
	}
	.spectre :global(article),
	.spectre :global(aside),
	.spectre :global(footer),
	.spectre :global(header),
	.spectre :global(nav),
	.spectre :global(section) {
		display: block;
	}
	.spectre :global(h1) {
		font-size: 2em;
		margin: 0.67em 0;
	}
	.spectre :global(figcaption),
	.spectre :global(figure),
	.spectre :global(main) {
		/* 1 */
		display: block;
	}
	.spectre :global(hr) {
		box-sizing: content-box;
		/* 1 */
		height: 0;
		/* 1 */
		overflow: visible;
		/* 2 */
	}
	.spectre :global(a) {
		background-color: transparent;
		/* 1 */
		-webkit-text-decoration-skip: objects;
		/* 2 */
	}
	.spectre :global(a:active),
	.spectre :global(a:hover) {
		outline-width: 0;
	}
	.spectre :global(address) {
		font-style: normal;
	}
	.spectre :global(b),
	.spectre :global(strong) {
		font-weight: inherit;
	}
	.spectre :global(b),
	.spectre :global(strong) {
		font-weight: bolder;
	}
	.spectre :global(code),
	.spectre :global(kbd),
	.spectre :global(pre),
	.spectre :global(samp) {
		font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;
		/* 1 (changed) */
		font-size: 1em;
		/* 2 */
	}
	.spectre :global(dfn) {
		font-style: italic;
	}
	.spectre :global(small) {
		font-size: 80%;
		font-weight: 400;
		/* (added) */
	}
	.spectre :global(sub),
	.spectre :global(sup) {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	.spectre :global(sub) {
		bottom: -0.25em;
	}
	.spectre :global(sup) {
		top: -0.5em;
	}
	.spectre :global(audio),
	.spectre :global(video) {
		display: inline-block;
	}
	.spectre :global(audio:not([controls])) {
		display: none;
		height: 0;
	}
	.spectre :global(img) {
		border-style: none;
	}
	.spectre :global(svg:not(:root)) {
		overflow: hidden;
	}
	.spectre :global(button),
	.spectre :global(input),
	.spectre :global(optgroup),
	.spectre :global(select),
	.spectre :global(textarea) {
		font-family: inherit;
		/* 1 (changed) */
		font-size: inherit;
		/* 1 (changed) */
		line-height: inherit;
		/* 1 (changed) */
		margin: 0;
		/* 2 */
	}
	.spectre :global(button),
	.spectre :global(input) {
		/* 1 */
		overflow: visible;
	}
	.spectre :global(button),
	.spectre :global(select) {
		/* 1 */
		text-transform: none;
	}
	.spectre :global(button),
	.spectre :global(html) :global([type='button']),
	.spectre :global([type='reset']),
	.spectre :global([type='submit']) {
		-webkit-appearance: button;
		/* 2 */
	}
	.spectre :global(button::-moz-focus-inner),
	.spectre :global([type='button']::-moz-focus-inner),
	.spectre :global([type='reset']::-moz-focus-inner),
	.spectre :global([type='submit']::-moz-focus-inner) {
		border-style: none;
		padding: 0;
	}
	.spectre :global(fieldset) {
		border: 0;
		margin: 0;
		padding: 0;
	}
	.spectre :global(legend) {
		box-sizing: border-box;
		/* 1 */
		color: inherit;
		/* 2 */
		display: table;
		/* 1 */
		max-width: 100%;
		/* 1 */
		padding: 0;
		/* 3 */
		white-space: normal;
		/* 1 */
	}
	.spectre :global(progress) {
		display: inline-block;
		/* 1 */
		vertical-align: baseline;
		/* 2 */
	}
	.spectre :global(textarea) {
		overflow: auto;
	}
	.spectre :global([type='checkbox']),
	.spectre :global([type='radio']) {
		box-sizing: border-box;
		/* 1 */
		padding: 0;
		/* 2 */
	}
	.spectre :global([type='number']::-webkit-inner-spin-button),
	.spectre :global([type='number']::-webkit-outer-spin-button) {
		height: auto;
	}
	.spectre :global([type='search']) {
		-webkit-appearance: textfield;
		/* 1 */
		outline-offset: -2px;
		/* 2 */
	}
	.spectre :global([type='search']::-webkit-search-cancel-button),
	.spectre :global([type='search']::-webkit-search-decoration) {
		-webkit-appearance: none;
	}
	.spectre :global(::-webkit-file-upload-button) {
		-webkit-appearance: button;
		/* 1 */
		font: inherit;
		/* 2 */
	}
	.spectre :global(details),
	.spectre :global(menu) {
		display: block;
	}
	.spectre :global(summary) {
		display: list-item;
		outline: none;
	}
	.spectre :global(canvas) {
		display: inline-block;
	}
	.spectre :global(template) {
		display: none;
	}
	.spectre :global([hidden]) {
		display: none;
	}
	.spectre :global(h1),
	.spectre :global(h2),
	.spectre :global(h3),
	.spectre :global(h4),
	.spectre :global(h5),
	.spectre :global(h6) {
		color: inherit;
		font-weight: 500;
		line-height: 1.2;
		margin-bottom: 0.5em;
		margin-top: 0;
	}
	.spectre :global(.h1),
	.spectre :global(.h2),
	.spectre :global(.h3),
	.spectre :global(.h4),
	.spectre :global(.h5),
	.spectre :global(.h6) {
		font-weight: 500;
	}
	.spectre :global(h1),
	.spectre :global(.h1) {
		font-size: 2rem;
	}
	.spectre :global(h2),
	.spectre :global(.h2) {
		font-size: 1.6rem;
	}
	.spectre :global(h3),
	.spectre :global(.h3) {
		font-size: 1.4rem;
	}
	.spectre :global(h4),
	.spectre :global(.h4) {
		font-size: 1.2rem;
	}
	.spectre :global(h5),
	.spectre :global(.h5) {
		font-size: 1rem;
	}
	.spectre :global(h6),
	.spectre :global(.h6) {
		font-size: 0.8rem;
	}
	.spectre :global(p) {
		margin: 0 0 1.2rem;
	}
	.spectre :global(a),
	.spectre :global(ins),
	.spectre :global(u) {
		-webkit-text-decoration-skip: ink edges;
		text-decoration-skip: ink edges;
	}
	.spectre :global(abbr[title]) {
		border-bottom: 0.05rem dotted;
		cursor: help;
		text-decoration: none;
	}
	.spectre :global(kbd) {
		border-radius: 0.1rem;
		line-height: 1.25;
		padding: 0.1rem 0.2rem;
		background: #303742;
		color: #fff;
		font-size: 0.7rem;
	}
	.spectre :global(mark) {
		background: #ffe9b3;
		color: #3b4351;
		border-bottom: 0.05rem solid #ffd367;
		border-radius: 0.1rem;
		padding: 0.05rem 0.1rem 0;
	}
	.spectre :global(blockquote) {
		border-left: 0.1rem solid #dadee4;
		margin-left: 0;
		padding: 0.4rem 0.8rem;
	}
	.spectre :global(blockquote) :global(p:last-child) {
		margin-bottom: 0;
	}
	.spectre :global(ul),
	.spectre :global(ol) {
		margin: 0.8rem 0 0.8rem 0.8rem;
		padding: 0;
	}
	.spectre :global(ul) :global(ul),
	.spectre :global(ul) :global(ol),
	.spectre :global(ol) :global(ul),
	.spectre :global(ol) :global(ol) {
		margin: 0.8rem 0 0.8rem 0.8rem;
	}
	.spectre :global(ul) :global(li),
	.spectre :global(ol) :global(li) {
		margin-top: 0.4rem;
	}
	.spectre :global(ul) {
		list-style: disc inside;
	}
	.spectre :global(ul) :global(ul) {
		list-style-type: circle;
	}
	.spectre :global(ol) {
		list-style: decimal inside;
	}
	.spectre :global(ol) :global(ol) {
		list-style-type: lower-alpha;
	}
	.spectre :global(dl) :global(dt) {
		font-weight: bold;
	}
	.spectre :global(dl) :global(dd) {
		margin: 0.4rem 0 0.8rem 0;
	}
	.spectre :global(.container) {
		margin-left: auto;
		margin-right: auto;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		width: 100%;
	}
	.spectre :global(.container.grid-xl) {
		max-width: 1296px;
	}
	.spectre :global(.container.grid-lg) {
		max-width: 976px;
	}
	.spectre :global(.container.grid-md) {
		max-width: 856px;
	}
	.spectre :global(.container.grid-sm) {
		max-width: 616px;
	}
	.spectre :global(.container.grid-xs) {
		max-width: 496px;
	}
	.spectre :global(.show-xs),
	.spectre :global(.show-sm),
	.spectre :global(.show-md),
	.spectre :global(.show-lg),
	.spectre :global(.show-xl) {
		display: none !important;
	}
	.spectre :global(.cols),
	.spectre :global(.columns) {
		display: flex;
		flex-wrap: wrap;
		margin-left: -0.4rem;
		margin-right: -0.4rem;
	}
	.spectre :global(.cols.col-gapless),
	.spectre :global(.columns.col-gapless) {
		margin-left: 0;
		margin-right: 0;
	}
	.spectre :global(.cols.col-gapless) > :global(.column),
	.spectre :global(.columns.col-gapless) > :global(.column) {
		padding-left: 0;
		padding-right: 0;
	}
	.spectre :global(.cols.col-oneline),
	.spectre :global(.columns.col-oneline) {
		flex-wrap: nowrap;
		overflow-x: auto;
	}
	.spectre :global([class~='col-']),
	.spectre :global(.column) {
		flex: 1;
		max-width: 100%;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
	}
	.spectre :global([class~='col-'].col-12),
	.spectre :global([class~='col-'].col-11),
	.spectre :global([class~='col-'].col-10),
	.spectre :global([class~='col-'].col-9),
	.spectre :global([class~='col-'].col-8),
	.spectre :global([class~='col-'].col-7),
	.spectre :global([class~='col-'].col-6),
	.spectre :global([class~='col-'].col-5),
	.spectre :global([class~='col-'].col-4),
	.spectre :global([class~='col-'].col-3),
	.spectre :global([class~='col-'].col-2),
	.spectre :global([class~='col-'].col-1),
	.spectre :global([class~='col-'].col-auto),
	.spectre :global(.column.col-12),
	.spectre :global(.column.col-11),
	.spectre :global(.column.col-10),
	.spectre :global(.column.col-9),
	.spectre :global(.column.col-8),
	.spectre :global(.column.col-7),
	.spectre :global(.column.col-6),
	.spectre :global(.column.col-5),
	.spectre :global(.column.col-4),
	.spectre :global(.column.col-3),
	.spectre :global(.column.col-2),
	.spectre :global(.column.col-1),
	.spectre :global(.column.col-auto) {
		flex: none;
	}
	.spectre :global(.col-12) {
		width: 100%;
	}
	.spectre :global(.col-11) {
		width: 91.66666667%;
	}
	.spectre :global(.col-10) {
		width: 83.33333333%;
	}
	.spectre :global(.col-9) {
		width: 75%;
	}
	.spectre :global(.col-8) {
		width: 66.66666667%;
	}
	.spectre :global(.col-7) {
		width: 58.33333333%;
	}
	.spectre :global(.col-6) {
		width: 50%;
	}
	.spectre :global(.col-5) {
		width: 41.66666667%;
	}
	.spectre :global(.col-4) {
		width: 33.33333333%;
	}
	.spectre :global(.col-3) {
		width: 25%;
	}
	.spectre :global(.col-2) {
		width: 16.66666667%;
	}
	.spectre :global(.col-1) {
		width: 8.33333333%;
	}
	.spectre :global(.col-auto) {
		flex: 0 0 auto;
		max-width: none;
		width: auto;
	}
	.spectre :global(.col-mx-auto) {
		margin-left: auto;
		margin-right: auto;
	}
	.spectre :global(.col-ml-auto) {
		margin-left: auto;
	}
	.spectre :global(.col-mr-auto) {
		margin-right: auto;
	}
	@media (max-width: 1280px) {
		.spectre :global(.col-xl-12),
		.spectre :global(.col-xl-11),
		.spectre :global(.col-xl-10),
		.spectre :global(.col-xl-9),
		.spectre :global(.col-xl-8),
		.spectre :global(.col-xl-7),
		.spectre :global(.col-xl-6),
		.spectre :global(.col-xl-5),
		.spectre :global(.col-xl-4),
		.spectre :global(.col-xl-3),
		.spectre :global(.col-xl-2),
		.spectre :global(.col-xl-1),
		.spectre :global(.col-xl-auto) {
			flex: none;
		}
		.spectre :global(.col-xl-12) {
			width: 100%;
		}
		.spectre :global(.col-xl-11) {
			width: 91.66666667%;
		}
		.spectre :global(.col-xl-10) {
			width: 83.33333333%;
		}
		.spectre :global(.col-xl-9) {
			width: 75%;
		}
		.spectre :global(.col-xl-8) {
			width: 66.66666667%;
		}
		.spectre :global(.col-xl-7) {
			width: 58.33333333%;
		}
		.spectre :global(.col-xl-6) {
			width: 50%;
		}
		.spectre :global(.col-xl-5) {
			width: 41.66666667%;
		}
		.spectre :global(.col-xl-4) {
			width: 33.33333333%;
		}
		.spectre :global(.col-xl-3) {
			width: 25%;
		}
		.spectre :global(.col-xl-2) {
			width: 16.66666667%;
		}
		.spectre :global(.col-xl-1) {
			width: 8.33333333%;
		}
		.spectre :global(.col-xl-auto) {
			width: auto;
		}
		.spectre :global(.hide-xl) {
			display: none !important;
		}
		.spectre :global(.show-xl) {
			display: block !important;
		}
	}
	@media (max-width: 960px) {
		.spectre :global(.col-lg-12),
		.spectre :global(.col-lg-11),
		.spectre :global(.col-lg-10),
		.spectre :global(.col-lg-9),
		.spectre :global(.col-lg-8),
		.spectre :global(.col-lg-7),
		.spectre :global(.col-lg-6),
		.spectre :global(.col-lg-5),
		.spectre :global(.col-lg-4),
		.spectre :global(.col-lg-3),
		.spectre :global(.col-lg-2),
		.spectre :global(.col-lg-1),
		.spectre :global(.col-lg-auto) {
			flex: none;
		}
		.spectre :global(.col-lg-12) {
			width: 100%;
		}
		.spectre :global(.col-lg-11) {
			width: 91.66666667%;
		}
		.spectre :global(.col-lg-10) {
			width: 83.33333333%;
		}
		.spectre :global(.col-lg-9) {
			width: 75%;
		}
		.spectre :global(.col-lg-8) {
			width: 66.66666667%;
		}
		.spectre :global(.col-lg-7) {
			width: 58.33333333%;
		}
		.spectre :global(.col-lg-6) {
			width: 50%;
		}
		.spectre :global(.col-lg-5) {
			width: 41.66666667%;
		}
		.spectre :global(.col-lg-4) {
			width: 33.33333333%;
		}
		.spectre :global(.col-lg-3) {
			width: 25%;
		}
		.spectre :global(.col-lg-2) {
			width: 16.66666667%;
		}
		.spectre :global(.col-lg-1) {
			width: 8.33333333%;
		}
		.spectre :global(.col-lg-auto) {
			width: auto;
		}
		.spectre :global(.hide-lg) {
			display: none !important;
		}
		.spectre :global(.show-lg) {
			display: block !important;
		}
	}
	@media (max-width: 840px) {
		.spectre :global(.col-md-12),
		.spectre :global(.col-md-11),
		.spectre :global(.col-md-10),
		.spectre :global(.col-md-9),
		.spectre :global(.col-md-8),
		.spectre :global(.col-md-7),
		.spectre :global(.col-md-6),
		.spectre :global(.col-md-5),
		.spectre :global(.col-md-4),
		.spectre :global(.col-md-3),
		.spectre :global(.col-md-2),
		.spectre :global(.col-md-1),
		.spectre :global(.col-md-auto) {
			flex: none;
		}
		.spectre :global(.col-md-12) {
			width: 100%;
		}
		.spectre :global(.col-md-11) {
			width: 91.66666667%;
		}
		.spectre :global(.col-md-10) {
			width: 83.33333333%;
		}
		.spectre :global(.col-md-9) {
			width: 75%;
		}
		.spectre :global(.col-md-8) {
			width: 66.66666667%;
		}
		.spectre :global(.col-md-7) {
			width: 58.33333333%;
		}
		.spectre :global(.col-md-6) {
			width: 50%;
		}
		.spectre :global(.col-md-5) {
			width: 41.66666667%;
		}
		.spectre :global(.col-md-4) {
			width: 33.33333333%;
		}
		.spectre :global(.col-md-3) {
			width: 25%;
		}
		.spectre :global(.col-md-2) {
			width: 16.66666667%;
		}
		.spectre :global(.col-md-1) {
			width: 8.33333333%;
		}
		.spectre :global(.col-md-auto) {
			width: auto;
		}
		.spectre :global(.hide-md) {
			display: none !important;
		}
		.spectre :global(.show-md) {
			display: block !important;
		}
	}
	@media (max-width: 600px) {
		.spectre :global(.col-sm-12),
		.spectre :global(.col-sm-11),
		.spectre :global(.col-sm-10),
		.spectre :global(.col-sm-9),
		.spectre :global(.col-sm-8),
		.spectre :global(.col-sm-7),
		.spectre :global(.col-sm-6),
		.spectre :global(.col-sm-5),
		.spectre :global(.col-sm-4),
		.spectre :global(.col-sm-3),
		.spectre :global(.col-sm-2),
		.spectre :global(.col-sm-1),
		.spectre :global(.col-sm-auto) {
			flex: none;
		}
		.spectre :global(.col-sm-12) {
			width: 100%;
		}
		.spectre :global(.col-sm-11) {
			width: 91.66666667%;
		}
		.spectre :global(.col-sm-10) {
			width: 83.33333333%;
		}
		.spectre :global(.col-sm-9) {
			width: 75%;
		}
		.spectre :global(.col-sm-8) {
			width: 66.66666667%;
		}
		.spectre :global(.col-sm-7) {
			width: 58.33333333%;
		}
		.spectre :global(.col-sm-6) {
			width: 50%;
		}
		.spectre :global(.col-sm-5) {
			width: 41.66666667%;
		}
		.spectre :global(.col-sm-4) {
			width: 33.33333333%;
		}
		.spectre :global(.col-sm-3) {
			width: 25%;
		}
		.spectre :global(.col-sm-2) {
			width: 16.66666667%;
		}
		.spectre :global(.col-sm-1) {
			width: 8.33333333%;
		}
		.spectre :global(.col-sm-auto) {
			width: auto;
		}
		.spectre :global(.hide-sm) {
			display: none !important;
		}
		.spectre :global(.show-sm) {
			display: block !important;
		}
	}
	@media (max-width: 480px) {
		.spectre :global(.col-xs-12),
		.spectre :global(.col-xs-11),
		.spectre :global(.col-xs-10),
		.spectre :global(.col-xs-9),
		.spectre :global(.col-xs-8),
		.spectre :global(.col-xs-7),
		.spectre :global(.col-xs-6),
		.spectre :global(.col-xs-5),
		.spectre :global(.col-xs-4),
		.spectre :global(.col-xs-3),
		.spectre :global(.col-xs-2),
		.spectre :global(.col-xs-1),
		.spectre :global(.col-xs-auto) {
			flex: none;
		}
		.spectre :global(.col-xs-12) {
			width: 100%;
		}
		.spectre :global(.col-xs-11) {
			width: 91.66666667%;
		}
		.spectre :global(.col-xs-10) {
			width: 83.33333333%;
		}
		.spectre :global(.col-xs-9) {
			width: 75%;
		}
		.spectre :global(.col-xs-8) {
			width: 66.66666667%;
		}
		.spectre :global(.col-xs-7) {
			width: 58.33333333%;
		}
		.spectre :global(.col-xs-6) {
			width: 50%;
		}
		.spectre :global(.col-xs-5) {
			width: 41.66666667%;
		}
		.spectre :global(.col-xs-4) {
			width: 33.33333333%;
		}
		.spectre :global(.col-xs-3) {
			width: 25%;
		}
		.spectre :global(.col-xs-2) {
			width: 16.66666667%;
		}
		.spectre :global(.col-xs-1) {
			width: 8.33333333%;
		}
		.spectre :global(.col-xs-auto) {
			width: auto;
		}
		.spectre :global(.hide-xs) {
			display: none !important;
		}
		.spectre :global(.show-xs) {
			display: block !important;
		}
	}
	@-webkit-keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-1.6rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-1.6rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.spectre :global(.text-primary) {
		color: #5755d9 !important;
	}
	.spectre :global(a.text-primary:focus),
	.spectre :global(a.text-primary:hover) {
		color: #4240d4;
	}
	.spectre :global(a.text-primary:visited) {
		color: #6c6ade;
	}
	.spectre :global(.text-secondary) {
		color: #e5e5f9 !important;
	}
	.spectre :global(a.text-secondary:focus),
	.spectre :global(a.text-secondary:hover) {
		color: #d1d0f4;
	}
	.spectre :global(a.text-secondary:visited) {
		color: #fafafe;
	}
	.spectre :global(.text-gray) {
		color: #bcc3ce !important;
	}
	.spectre :global(a.text-gray:focus),
	.spectre :global(a.text-gray:hover) {
		color: #adb6c4;
	}
	.spectre :global(a.text-gray:visited) {
		color: #cbd0d9;
	}
	.spectre :global(.text-light) {
		color: #fff !important;
	}
	.spectre :global(a.text-light:focus),
	.spectre :global(a.text-light:hover) {
		color: #f2f2f2;
	}
	.spectre :global(a.text-light:visited) {
		color: white;
	}
	.spectre :global(.text-dark) {
		color: #3b4351 !important;
	}
	.spectre :global(a.text-dark:focus),
	.spectre :global(a.text-dark:hover) {
		color: #303742;
	}
	.spectre :global(a.text-dark:visited) {
		color: #455060;
	}
	.spectre :global(.text-success) {
		color: #32b643 !important;
	}
	.spectre :global(a.text-success:focus),
	.spectre :global(a.text-success:hover) {
		color: #2da23c;
	}
	.spectre :global(a.text-success:visited) {
		color: #39c94b;
	}
	.spectre :global(.text-warning) {
		color: #ffb700 !important;
	}
	.spectre :global(a.text-warning:focus),
	.spectre :global(a.text-warning:hover) {
		color: #e6a500;
	}
	.spectre :global(a.text-warning:visited) {
		color: #ffbe1a;
	}
	.spectre :global(.text-error) {
		color: #e85600 !important;
	}
	.spectre :global(a.text-error:focus),
	.spectre :global(a.text-error:hover) {
		color: #cf4d00;
	}
	.spectre :global(a.text-error:visited) {
		color: #ff6003;
	}
	.spectre :global(.bg-primary) {
		background: #5755d9 !important;
		color: #fff;
	}
	.spectre :global(.bg-secondary) {
		background: #f1f1fc !important;
	}
	.spectre :global(.bg-dark) {
		background: #303742 !important;
		color: #fff;
	}
	.spectre :global(.bg-gray) {
		background: #f7f8f9 !important;
	}
	.spectre :global(.bg-success) {
		background: #32b643 !important;
		color: #fff;
	}
	.spectre :global(.bg-warning) {
		background: #ffb700 !important;
		color: #fff;
	}
	.spectre :global(.bg-error) {
		background: #e85600 !important;
		color: #fff;
	}
	.spectre :global(.c-hand) {
		cursor: pointer;
	}
	.spectre :global(.c-move) {
		cursor: move;
	}
	.spectre :global(.c-zoom-in) {
		cursor: zoom-in;
	}
	.spectre :global(.c-zoom-out) {
		cursor: zoom-out;
	}
	.spectre :global(.c-not-allowed) {
		cursor: not-allowed;
	}
	.spectre :global(.c-auto) {
		cursor: auto;
	}
	.spectre :global(.d-block) {
		display: block;
	}
	.spectre :global(.d-inline) {
		display: inline;
	}
	.spectre :global(.d-inline-block) {
		display: inline-block;
	}
	.spectre :global(.d-flex) {
		display: flex;
	}
	.spectre :global(.d-inline-flex) {
		display: inline-flex;
	}
	.spectre :global(.d-none),
	.spectre :global(.d-hide) {
		display: none !important;
	}
	.spectre :global(.d-visible) {
		visibility: visible;
	}
	.spectre :global(.d-invisible) {
		visibility: hidden;
	}
	.spectre :global(.text-hide) {
		background: transparent;
		border: 0;
		color: transparent;
		font-size: 0;
		line-height: 0;
		text-shadow: none;
	}
	.spectre :global(.text-assistive) {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
	.spectre :global(.divider),
	.spectre :global(.divider-vert) {
		display: block;
		position: relative;
	}
	.spectre :global(.divider[data-content]::after),
	.spectre :global(.divider-vert[data-content]::after) {
		background: #fff;
		color: #bcc3ce;
		content: attr(data-content);
		display: inline-block;
		font-size: 0.7rem;
		padding: 0 0.4rem;
		transform: translateY(-0.65rem);
	}
	.spectre :global(.divider) {
		border-top: 0.05rem solid #f1f3f5;
		height: 0.05rem;
		margin: 0.4rem 0;
	}
	.spectre :global(.divider[data-content]) {
		margin: 0.8rem 0;
	}
	.spectre :global(.divider-vert) {
		display: block;
		padding: 0.8rem;
	}
	.spectre :global(.divider-vert::before) {
		border-left: 0.05rem solid #dadee4;
		bottom: 0.4rem;
		content: '';
		display: block;
		left: 50%;
		position: absolute;
		top: 0.4rem;
		transform: translateX(-50%);
	}
	.spectre :global(.divider-vert[data-content]::after) {
		left: 50%;
		padding: 0.2rem 0;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.spectre :global(.loading) {
		color: transparent !important;
		min-height: 0.8rem;
		pointer-events: none;
		position: relative;
	}
	.spectre :global(.loading::after) {
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
	.spectre :global(.loading.loading-lg) {
		min-height: 2rem;
	}
	.spectre :global(.loading.loading-lg::after) {
		height: 1.6rem;
		margin-left: -0.8rem;
		margin-top: -0.8rem;
		width: 1.6rem;
	}
	.spectre :global(.clearfix::after) {
		clear: both;
		content: '';
		display: table;
	}
	.spectre :global(.float-left) {
		float: left !important;
	}
	.spectre :global(.float-right) {
		float: right !important;
	}
	.spectre :global(.p-relative) {
		position: relative !important;
	}
	.spectre :global(.p-absolute) {
		position: absolute !important;
	}
	.spectre :global(.p-fixed) {
		position: fixed !important;
	}
	.spectre :global(.p-sticky) {
		position: -webkit-sticky !important;
		position: sticky !important;
	}
	.spectre :global(.p-centered) {
		display: block;
		float: none;
		margin-left: auto;
		margin-right: auto;
	}
	.spectre :global(.flex-centered) {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	.spectre :global(.m-0) {
		margin: 0 !important;
	}
	.spectre :global(.mb-0) {
		margin-bottom: 0 !important;
	}
	.spectre :global(.ml-0) {
		margin-left: 0 !important;
	}
	.spectre :global(.mr-0) {
		margin-right: 0 !important;
	}
	.spectre :global(.mt-0) {
		margin-top: 0 !important;
	}
	.spectre :global(.mx-0) {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}
	.spectre :global(.my-0) {
		margin-bottom: 0 !important;
		margin-top: 0 !important;
	}
	.spectre :global(.m-1) {
		margin: 0.2rem !important;
	}
	.spectre :global(.mb-1) {
		margin-bottom: 0.2rem !important;
	}
	.spectre :global(.ml-1) {
		margin-left: 0.2rem !important;
	}
	.spectre :global(.mr-1) {
		margin-right: 0.2rem !important;
	}
	.spectre :global(.mt-1) {
		margin-top: 0.2rem !important;
	}
	.spectre :global(.mx-1) {
		margin-left: 0.2rem !important;
		margin-right: 0.2rem !important;
	}
	.spectre :global(.my-1) {
		margin-bottom: 0.2rem !important;
		margin-top: 0.2rem !important;
	}
	.spectre :global(.m-2) {
		margin: 0.4rem !important;
	}
	.spectre :global(.mb-2) {
		margin-bottom: 0.4rem !important;
	}
	.spectre :global(.ml-2) {
		margin-left: 0.4rem !important;
	}
	.spectre :global(.mr-2) {
		margin-right: 0.4rem !important;
	}
	.spectre :global(.mt-2) {
		margin-top: 0.4rem !important;
	}
	.spectre :global(.mx-2) {
		margin-left: 0.4rem !important;
		margin-right: 0.4rem !important;
	}
	.spectre :global(.my-2) {
		margin-bottom: 0.4rem !important;
		margin-top: 0.4rem !important;
	}
	.spectre :global(.p-0) {
		padding: 0 !important;
	}
	.spectre :global(.pb-0) {
		padding-bottom: 0 !important;
	}
	.spectre :global(.pl-0) {
		padding-left: 0 !important;
	}
	.spectre :global(.pr-0) {
		padding-right: 0 !important;
	}
	.spectre :global(.pt-0) {
		padding-top: 0 !important;
	}
	.spectre :global(.px-0) {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
	.spectre :global(.py-0) {
		padding-bottom: 0 !important;
		padding-top: 0 !important;
	}
	.spectre :global(.p-1) {
		padding: 0.2rem !important;
	}
	.spectre :global(.pb-1) {
		padding-bottom: 0.2rem !important;
	}
	.spectre :global(.pl-1) {
		padding-left: 0.2rem !important;
	}
	.spectre :global(.pr-1) {
		padding-right: 0.2rem !important;
	}
	.spectre :global(.pt-1) {
		padding-top: 0.2rem !important;
	}
	.spectre :global(.px-1) {
		padding-left: 0.2rem !important;
		padding-right: 0.2rem !important;
	}
	.spectre :global(.py-1) {
		padding-bottom: 0.2rem !important;
		padding-top: 0.2rem !important;
	}
	.spectre :global(.p-2) {
		padding: 0.4rem !important;
	}
	.spectre :global(.pb-2) {
		padding-bottom: 0.4rem !important;
	}
	.spectre :global(.pl-2) {
		padding-left: 0.4rem !important;
	}
	.spectre :global(.pr-2) {
		padding-right: 0.4rem !important;
	}
	.spectre :global(.pt-2) {
		padding-top: 0.4rem !important;
	}
	.spectre :global(.px-2) {
		padding-left: 0.4rem !important;
		padding-right: 0.4rem !important;
	}
	.spectre :global(.py-2) {
		padding-bottom: 0.4rem !important;
		padding-top: 0.4rem !important;
	}
	.spectre :global(.s-rounded) {
		border-radius: 0.1rem;
	}
	.spectre :global(.s-circle) {
		border-radius: 50%;
	}
	.spectre :global(.text-left) {
		text-align: left;
	}
	.spectre :global(.text-right) {
		text-align: right;
	}
	.spectre :global(.text-center) {
		text-align: center;
	}
	.spectre :global(.text-justify) {
		text-align: justify;
	}
	.spectre :global(.text-lowercase) {
		text-transform: lowercase;
	}
	.spectre :global(.text-uppercase) {
		text-transform: uppercase;
	}
	.spectre :global(.text-capitalize) {
		text-transform: capitalize;
	}
	.spectre :global(.text-normal) {
		font-weight: normal;
	}
	.spectre :global(.text-bold) {
		font-weight: bold;
	}
	.spectre :global(.text-italic) {
		font-style: italic;
	}
	.spectre :global(.text-large) {
		font-size: 1.2em;
	}
	.spectre :global(.text-small) {
		font-size: 0.9em;
	}
	.spectre :global(.text-tiny) {
		font-size: 0.8em;
	}
	.spectre :global(.text-muted) {
		opacity: 0.8;
	}
	.spectre :global(.text-ellipsis) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.spectre :global(.text-clip) {
		overflow: hidden;
		text-overflow: clip;
		white-space: nowrap;
	}
	.spectre :global(.text-break) {
		-webkit-hyphens: auto;
		-ms-hyphens: auto;
		hyphens: auto;
		word-break: break-word;
		word-wrap: break-word;
	}
	.spectre :global(.img-responsive) {
		display: block;
		height: auto;
		max-width: 100%;
	}
	.spectre :global(.img-fit-cover) {
		-o-object-fit: cover;
		object-fit: cover;
	}
	.spectre :global(.img-fit-contain) {
		-o-object-fit: contain;
		object-fit: contain;
	}
	.spectre :global(.video-responsive) {
		display: block;
		overflow: hidden;
		padding: 0;
		position: relative;
		width: 100%;
	}
	.spectre :global(.video-responsive::before) {
		content: '';
		display: block;
		padding-bottom: 56.25%;
	}
	.spectre :global(.video-responsive) :global(iframe),
	.spectre :global(.video-responsive) :global(object),
	.spectre :global(.video-responsive) :global(embed) {
		border: 0;
		bottom: 0;
		height: 100%;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
	}
	.spectre :global(video.video-responsive) {
		height: auto;
		max-width: 100%;
	}
	.spectre :global(video.video-responsive::before) {
		content: none;
	}
	.spectre :global(.video-responsive-4-3::before) {
		padding-bottom: 75%;
	}
	.spectre :global(.video-responsive-1-1::before) {
		padding-bottom: 100%;
	}
	.spectre :global(.figure) {
		margin: 0 0 0.4rem 0;
	}
	.spectre :global(.figure) :global(.figure-caption) {
		color: #66758c;
		margin-top: 0.4rem;
	}
	.spectre :global(.badge) {
		position: relative;
		white-space: nowrap;
	}
	.spectre :global(.badge[data-badge]::after),
	.spectre :global(.badge:not([data-badge])::after) {
		background: #5755d9;
		background-clip: padding-box;
		border-radius: 0.5rem;
		box-shadow: 0 0 0 0.1rem #fff;
		color: #fff;
		content: attr(data-badge);
		display: inline-block;
		transform: translate(-0.05rem, -0.5rem);
	}
	.spectre :global(.badge[data-badge]::after) {
		font-size: 0.7rem;
		height: 0.9rem;
		line-height: 1;
		min-width: 0.9rem;
		padding: 0.1rem 0.2rem;
		text-align: center;
		white-space: nowrap;
	}
	.spectre :global(.badge:not([data-badge])::after),
	.spectre :global(.badge[data-badge='']::after) {
		height: 6px;
		min-width: 6px;
		padding: 0;
		width: 6px;
	}
	.spectre :global(.badge.btn::after) {
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(50%, -50%);
	}
	.spectre :global(.badge.avatar::after) {
		position: absolute;
		top: 14.64%;
		right: 14.64%;
		transform: translate(50%, -50%);
		z-index: 100;
	}
	.spectre :global(.tooltip) {
		position: relative;
	}
	.spectre :global(.tooltip::after) {
		background: rgba(48, 55, 66, 0.95);
		border-radius: 0.1rem;
		bottom: 100%;
		color: #fff;
		content: attr(data-tooltip);
		display: block;
		font-size: 0.7rem;
		left: 50%;
		max-width: 320px;
		opacity: 0;
		overflow: hidden;
		padding: 0.2rem 0.4rem;
		pointer-events: none;
		position: absolute;
		text-overflow: ellipsis;
		transform: translate(-50%, 0.4rem);
		transition: opacity 0.2s, transform 0.2s;
		white-space: pre;
		z-index: 300;
	}
	.spectre :global(.tooltip:focus::after),
	.spectre :global(.tooltip:hover::after) {
		opacity: 1;
		transform: translate(-50%, -0.2rem);
	}
	.spectre :global(.tooltip[disabled]),
	.spectre :global(.tooltip.disabled) {
		pointer-events: auto;
	}
	.spectre :global(.tooltip.tooltip-right::after) {
		bottom: 50%;
		left: 100%;
		transform: translate(-0.2rem, 50%);
	}
	.spectre :global(.tooltip.tooltip-right:focus::after),
	.spectre :global(.tooltip.tooltip-right:hover::after) {
		transform: translate(0.2rem, 50%);
	}
	.spectre :global(.tooltip.tooltip-bottom::after) {
		bottom: auto;
		top: 100%;
		transform: translate(-50%, -0.4rem);
	}
	.spectre :global(.tooltip.tooltip-bottom:focus::after),
	.spectre :global(.tooltip.tooltip-bottom:hover::after) {
		transform: translate(-50%, 0.2rem);
	}
	.spectre :global(.tooltip.tooltip-left::after) {
		bottom: 50%;
		left: auto;
		right: 100%;
		transform: translate(0.4rem, 50%);
	}
	.spectre :global(.tooltip.tooltip-left:focus::after),
	.spectre :global(.tooltip.tooltip-left:hover::after) {
		transform: translate(-0.2rem, 50%);
	}
	.spectre :global(.mx-auto) {
		margin-left: auto;
		margin-right: auto;
	}
	.spectre :global(.mx--1) {
		margin-left: -0.2rem;
		margin-right: -0.2rem;
	}
	.spectre :global(.mx--2) {
		margin-left: -0.4rem;
		margin-right: -0.4rem;
	}
	.spectre :global(.my-auto) {
		margin-top: auto;
		margin-bottom: auto;
	}
	.spectre :global(.my--1) {
		margin-top: -0.2rem;
		margin-bottom: -0.2rem;
	}
	.spectre :global(.my--2) {
		margin-top: -0.4rem;
		margin-bottom: -0.4rem;
	}
	.spectre :global(.ml-auto) {
		margin-left: auto;
	}
	.spectre :global(.ml--1) {
		margin-left: -0.2rem;
	}
	.spectre :global(.ml--2) {
		margin-left: -0.4rem;
	}
	.spectre :global(.mr-auto) {
		margin-right: auto;
	}
	.spectre :global(.mr--1) {
		margin-right: -0.2rem;
	}
	.spectre :global(.mr--2) {
		margin-right: -0.4rem;
	}
	.spectre :global(.mt-auto) {
		margin-top: auto;
	}
	.spectre :global(.mt--1) {
		margin-top: -0.2rem;
	}
	.spectre :global(.mt--2) {
		margin-top: -0.4rem;
	}
	.spectre :global(.mb-auto) {
		margin-bottom: auto;
	}
	.spectre :global(.mb--1) {
		margin-bottom: -0.2rem;
	}
	.spectre :global(.mb--2) {
		margin-bottom: -0.4rem;
	}
	.spectre :global(.m-auto) {
		margin: auto;
	}
	.spectre :global(.overlay) {
		position: fixed;
		inset: 0;
		cursor: default;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		background: rgba(247, 248, 249, 0.75);
		color: #e85600;
	}
	.spectre :global(.m-3) {
		margin: 0.6rem !important;
	}
	.spectre :global(.mb-3) {
		margin-bottom: 0.6rem !important;
	}
	.spectre :global(.ml-3) {
		margin-left: 0.6rem !important;
	}
	.spectre :global(.mr-3) {
		margin-right: 0.6rem !important;
	}
	.spectre :global(.mt-3) {
		margin-top: 0.6rem !important;
	}
	.spectre :global(.mx-3) {
		margin-left: 0.6rem !important;
		margin-right: 0.6rem !important;
	}
	.spectre :global(.my-3) {
		margin-bottom: 0.6rem !important;
		margin-top: 0.6rem !important;
	}
	.spectre :global(.m-4) {
		margin: 0.8rem !important;
	}
	.spectre :global(.mb-4) {
		margin-bottom: 0.8rem !important;
	}
	.spectre :global(.ml-4) {
		margin-left: 0.8rem !important;
	}
	.spectre :global(.mr-4) {
		margin-right: 0.8rem !important;
	}
	.spectre :global(.mt-4) {
		margin-top: 0.8rem !important;
	}
	.spectre :global(.mx-4) {
		margin-left: 0.8rem !important;
		margin-right: 0.8rem !important;
	}
	.spectre :global(.my-4) {
		margin-bottom: 0.8rem !important;
		margin-top: 0.8rem !important;
	}
	.spectre :global(.m-5) {
		margin: 1rem !important;
	}
	.spectre :global(.mb-5) {
		margin-bottom: 1rem !important;
	}
	.spectre :global(.ml-5) {
		margin-left: 1rem !important;
	}
	.spectre :global(.mr-5) {
		margin-right: 1rem !important;
	}
	.spectre :global(.mt-5) {
		margin-top: 1rem !important;
	}
	.spectre :global(.mx-5) {
		margin-left: 1rem !important;
		margin-right: 1rem !important;
	}
	.spectre :global(.my-5) {
		margin-bottom: 1rem !important;
		margin-top: 1rem !important;
	}
	.spectre :global(.m-6) {
		margin: 1.2rem !important;
	}
	.spectre :global(.mb-6) {
		margin-bottom: 1.2rem !important;
	}
	.spectre :global(.ml-6) {
		margin-left: 1.2rem !important;
	}
	.spectre :global(.mr-6) {
		margin-right: 1.2rem !important;
	}
	.spectre :global(.mt-6) {
		margin-top: 1.2rem !important;
	}
	.spectre :global(.mx-6) {
		margin-left: 1.2rem !important;
		margin-right: 1.2rem !important;
	}
	.spectre :global(.my-6) {
		margin-bottom: 1.2rem !important;
		margin-top: 1.2rem !important;
	}
	.spectre :global(.m-7) {
		margin: 1.4rem !important;
	}
	.spectre :global(.mb-7) {
		margin-bottom: 1.4rem !important;
	}
	.spectre :global(.ml-7) {
		margin-left: 1.4rem !important;
	}
	.spectre :global(.mr-7) {
		margin-right: 1.4rem !important;
	}
	.spectre :global(.mt-7) {
		margin-top: 1.4rem !important;
	}
	.spectre :global(.mx-7) {
		margin-left: 1.4rem !important;
		margin-right: 1.4rem !important;
	}
	.spectre :global(.my-7) {
		margin-bottom: 1.4rem !important;
		margin-top: 1.4rem !important;
	}
	.spectre :global(.m-8) {
		margin: 1.6rem !important;
	}
	.spectre :global(.mb-8) {
		margin-bottom: 1.6rem !important;
	}
	.spectre :global(.ml-8) {
		margin-left: 1.6rem !important;
	}
	.spectre :global(.mr-8) {
		margin-right: 1.6rem !important;
	}
	.spectre :global(.mt-8) {
		margin-top: 1.6rem !important;
	}
	.spectre :global(.mx-8) {
		margin-left: 1.6rem !important;
		margin-right: 1.6rem !important;
	}
	.spectre :global(.my-8) {
		margin-bottom: 1.6rem !important;
		margin-top: 1.6rem !important;
	}
	.spectre :global(.m-9) {
		margin: 1.8rem !important;
	}
	.spectre :global(.mb-9) {
		margin-bottom: 1.8rem !important;
	}
	.spectre :global(.ml-9) {
		margin-left: 1.8rem !important;
	}
	.spectre :global(.mr-9) {
		margin-right: 1.8rem !important;
	}
	.spectre :global(.mt-9) {
		margin-top: 1.8rem !important;
	}
	.spectre :global(.mx-9) {
		margin-left: 1.8rem !important;
		margin-right: 1.8rem !important;
	}
	.spectre :global(.my-9) {
		margin-bottom: 1.8rem !important;
		margin-top: 1.8rem !important;
	}
	.spectre :global(.p-3) {
		padding: 0.6rem !important;
	}
	.spectre :global(.pb-3) {
		padding-bottom: 0.6rem !important;
	}
	.spectre :global(.pl-3) {
		padding-left: 0.6rem !important;
	}
	.spectre :global(.pr-3) {
		padding-right: 0.6rem !important;
	}
	.spectre :global(.pt-3) {
		padding-top: 0.6rem !important;
	}
	.spectre :global(.px-3) {
		padding-left: 0.6rem !important;
		padding-right: 0.6rem !important;
	}
	.spectre :global(.py-3) {
		padding-bottom: 0.6rem !important;
		padding-top: 0.6rem !important;
	}
	.spectre :global(.p-4) {
		padding: 0.8rem !important;
	}
	.spectre :global(.pb-4) {
		padding-bottom: 0.8rem !important;
	}
	.spectre :global(.pl-4) {
		padding-left: 0.8rem !important;
	}
	.spectre :global(.pr-4) {
		padding-right: 0.8rem !important;
	}
	.spectre :global(.pt-4) {
		padding-top: 0.8rem !important;
	}
	.spectre :global(.px-4) {
		padding-left: 0.8rem !important;
		padding-right: 0.8rem !important;
	}
	.spectre :global(.py-4) {
		padding-bottom: 0.8rem !important;
		padding-top: 0.8rem !important;
	}
	.spectre :global(.p-5) {
		padding: 1rem !important;
	}
	.spectre :global(.pb-5) {
		padding-bottom: 1rem !important;
	}
	.spectre :global(.pl-5) {
		padding-left: 1rem !important;
	}
	.spectre :global(.pr-5) {
		padding-right: 1rem !important;
	}
	.spectre :global(.pt-5) {
		padding-top: 1rem !important;
	}
	.spectre :global(.px-5) {
		padding-left: 1rem !important;
		padding-right: 1rem !important;
	}
	.spectre :global(.py-5) {
		padding-bottom: 1rem !important;
		padding-top: 1rem !important;
	}
	.spectre :global(.p-6) {
		padding: 1.2rem !important;
	}
	.spectre :global(.pb-6) {
		padding-bottom: 1.2rem !important;
	}
	.spectre :global(.pl-6) {
		padding-left: 1.2rem !important;
	}
	.spectre :global(.pr-6) {
		padding-right: 1.2rem !important;
	}
	.spectre :global(.pt-6) {
		padding-top: 1.2rem !important;
	}
	.spectre :global(.px-6) {
		padding-left: 1.2rem !important;
		padding-right: 1.2rem !important;
	}
	.spectre :global(.py-6) {
		padding-bottom: 1.2rem !important;
		padding-top: 1.2rem !important;
	}
	.spectre :global(.p-7) {
		padding: 1.4rem !important;
	}
	.spectre :global(.pb-7) {
		padding-bottom: 1.4rem !important;
	}
	.spectre :global(.pl-7) {
		padding-left: 1.4rem !important;
	}
	.spectre :global(.pr-7) {
		padding-right: 1.4rem !important;
	}
	.spectre :global(.pt-7) {
		padding-top: 1.4rem !important;
	}
	.spectre :global(.px-7) {
		padding-left: 1.4rem !important;
		padding-right: 1.4rem !important;
	}
	.spectre :global(.py-7) {
		padding-bottom: 1.4rem !important;
		padding-top: 1.4rem !important;
	}
	.spectre :global(.p-8) {
		padding: 1.6rem !important;
	}
	.spectre :global(.pb-8) {
		padding-bottom: 1.6rem !important;
	}
	.spectre :global(.pl-8) {
		padding-left: 1.6rem !important;
	}
	.spectre :global(.pr-8) {
		padding-right: 1.6rem !important;
	}
	.spectre :global(.pt-8) {
		padding-top: 1.6rem !important;
	}
	.spectre :global(.px-8) {
		padding-left: 1.6rem !important;
		padding-right: 1.6rem !important;
	}
	.spectre :global(.py-8) {
		padding-bottom: 1.6rem !important;
		padding-top: 1.6rem !important;
	}
	.spectre :global(.p-9) {
		padding: 1.8rem !important;
	}
	.spectre :global(.pb-9) {
		padding-bottom: 1.8rem !important;
	}
	.spectre :global(.pl-9) {
		padding-left: 1.8rem !important;
	}
	.spectre :global(.pr-9) {
		padding-right: 1.8rem !important;
	}
	.spectre :global(.pt-9) {
		padding-top: 1.8rem !important;
	}
	.spectre :global(.px-9) {
		padding-left: 1.8rem !important;
		padding-right: 1.8rem !important;
	}
	.spectre :global(.py-9) {
		padding-bottom: 1.8rem !important;
		padding-top: 1.8rem !important;
	}
</style>
