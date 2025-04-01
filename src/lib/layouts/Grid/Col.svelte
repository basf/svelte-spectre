<div {...$$restProps} class="column {cols}">
	<slot />
</div>

<script lang="ts" context="module">
	type Mq = 'col' | 'ml' | 'mr' | 'mx' | 'mt' | 'mb' | 'my' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	export type { Mq };
</script>

<script lang="ts">
	export let mq: Mq[] = ['col', 'ml', 'mr', 'mx', 'mt', 'mb', 'my', 'xs', 'sm', 'md', 'lg', 'xl'];

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
		@import '@spectre-org/spectre-css/src/layout';
	}
</style>
