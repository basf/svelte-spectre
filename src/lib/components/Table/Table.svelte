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
			<tr class:active={row.active}>
				{#each cols as col}
					<td>{row[col]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<script lang="ts" context="module">
	import type { Offset } from '../../types/position';

	type Row = {
		active?: boolean;
	};

	// interface ObjectConstructor {
	// 	keys<T>(o: T): ObjectKeys<T>;
	// }

	// type ObjectKeys<T> = T extends object
	// 	? (keyof T)[]
	// 	: T extends number
	// 	? []
	// 	: T extends Array<any> | string
	// 	? string[]
	// 	: never;

	// interface ObjectConstructor {
	// 	//...
	// 	keys(o: object): string[];
	// 	keys(o: {}): string[];
	// }
	// interface UserUpdate {
	// 	name: string;
	// }

	// const updatableFields = getWhitelistedKeys<Rows>({
	// 	active: false,
	// });

	// function getWhitelistedKeys<T>(config: { [key in keyof T]: boolean }) {
	// 	return Object.entries(config)
	// 		.filter(([_, value]) => !!value)
	// 		.map(([key]) => key as keyof T);
	// }

	export type { Row };
</script>

<script lang="ts">
	export let cols: string[];
	export let rows: Row[];
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
