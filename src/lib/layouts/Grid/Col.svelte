<div class="column {cols} {offset} {inset}">
	<slot />
</div>

<script lang="ts" context="module">
	type Mq = 'col' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	import type { Offset, Inset } from '../../types/position';
	export type { Mq, Offset };
</script>

<script lang="ts">
	export let mq: Mq[] = ['col', 'xs', 'sm', 'md', 'lg', 'xl'];
	export let offset: Offset = '';
	export let inset: Inset = '';

	$: cols =
		$$restProps &&
		Object.entries($$restProps)
			.map(([k, v]) => {
				if (mq.some((m) => m === k)) {
					const key = k !== 'col' ? `${k}-` : '';
					return `col-${key}${v}`;
				}
			})
			.filter(Boolean)
			.join(' ');
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/layout';
	}
</style>
