<div
	{...$$restProps}
	class="columns {align && `col-align-${align}`} {justify && `col-justify-${justify}`}"
	class:col-gapless={gapless}
	class:col-oneline={oneline}
	class:col-stack={stack}
	class:mb-2={stack}
>
	<slot />
</div>

<script lang="ts" context="module">
	type Align = 'start' | 'center' | 'end' | 'stretch' | '';
	type Justify = 'start' | 'center' | 'end' | 'stretch' | '';

	export type { Align, Justify };
</script>

<script lang="ts">
	export let gapless: boolean = false;
	export let oneline: boolean = false;
	export let stack: boolean = false;
	export let align: Align = '';
	export let justify: Justify = '';
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/layout';
	}
	.col-stack {
		margin-top: $layout-spacing * -2;
		& > :global(*) {
			margin-top: $layout-spacing * 2;
		}
	}
	.col-align-start {
		align-items: flex-start;
	}
	.col-align-center {
		align-items: center;
	}
	.col-align-end {
		align-items: flex-end;
	}
	.col-align-stretch {
		& > :global(* > *) {
			height: 100%;
		}
	}
	.col-justify-start {
		justify-content: flex-start;
	}
	.col-justify-center {
		justify-content: center;
	}
	.col-justify-end {
		align-content: flex-end;
	}
</style>
