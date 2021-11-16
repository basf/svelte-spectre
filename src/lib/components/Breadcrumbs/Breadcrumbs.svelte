<ul {...$$restProps} class="breadcrumb {offset}">
	{#each links as link}
		<li class="breadcrumb-item">
			<a href={link.href} class:tooltip={link.tooltip} data-tooltip={link.tooltip}>
				{link.title}
			</a>
		</li>
	{/each}
</ul>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';

	interface Link {
		href: string;
		title: string;
		tooltip: string;
	}

	export type { Link };
</script>

<script lang="ts">
	export let links: Link[];
	export let offset: Offset = '';
</script>

<style lang="scss">
	@import 'spectre.css/src/breadcrumbs';
</style>
