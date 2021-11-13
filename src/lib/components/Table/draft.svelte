<table>
	<thead>
		<tr>
			{#each cols as col, colIndex (col)}
				<th>
					<slot name="head" {col} {colIndex}>
						{col.label || col}
					</slot>
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row, rowIndex (row.id || row)}
			<tr on:click={() => dispatch('click', row)}>
				{#each cols as col, colIndex (col)}
					<td>
						<slot item={getRowItem(col.key || col, row)} {col} {rowIndex} {colIndex}>
							{isObj ? row[col.key || col] : row}
						</slot>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
	<tfoot>
		<tr>
			<td colspan={cols.length}>
				<slot name="foot" />
			</td>
		</tr>
	</tfoot>
</table>

<script lang="ts" context="module">
	interface ColObj {
		key: string;
		label: string;
	}

	type Col = ColObj | string;
	type Row = {} | string;

	export type { Col, Row };
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let cols: Col[] = [];
	export let rows: Row[] = [];

	$: isObj = rows.length && rows[0] && typeof rows[0] === 'object';
	$: if (!cols.length && rows.length && isObj) {
		cols = Object.keys(rows[0]);
	}
	function getRowItem(key, row) {
		if (!isObj) return row;
		return Array.isArray(key)
			? key.reduce((item, key) => {
					item[key] = row[key];
					return item;
			  }, {})
			: row[key];
	}
</script>
