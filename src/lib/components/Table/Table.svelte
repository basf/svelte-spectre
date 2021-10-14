<table
	{...$$restProps}
	class="table {offset}"
	class:table-striped={striped}
	class:table-hover={hoverable}
	class:table-scroll={scrollable}
>
	<thead>
		<tr>
			{#each cols as col}
				<th>{col}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each cols as col}
					<td>{row[col]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';
</script>

<script lang="ts">
	export let cols: string[];
	export let rows: unknown[];
	export let striped: boolean = false;
	export let hoverable: boolean = false;
	export let scrollable: boolean = false;
	export let offset: Offset = '';
</script>

<style lang="scss">
	@import 'spectre.css/src/tables';

	:global(.spectre) {
		.table thead th {
			text-transform: capitalize;
		}
	}
</style>
