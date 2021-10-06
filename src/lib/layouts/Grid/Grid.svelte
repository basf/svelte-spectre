<div
	class="columns {align && `col-align-${align}`} {offset}"
	class:col-gapless={gapless}
	class:col-oneline={oneline}
	class:col-stack={stack}
>
	<slot />
</div>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';

	type Align = 'start' | 'center' | 'end' | 'stretch' | '';

	export type { Align, Offset };
</script>

<script lang="ts">
	export let gapless: boolean = false;
	export let oneline: boolean = false;
	export let stack: boolean = false;
	export let align: Align = '';
	export let offset: Offset = '';
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
</style>
