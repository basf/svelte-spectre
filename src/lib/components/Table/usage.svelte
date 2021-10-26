<Table cols={['foo', 'bar', 'baz']} rows={[1, 2, 3]} />

<Table rows={[{ foo: 1, bar: 2, baz: 3 }]} />

<Table cols={['foo', 'bar', 'baz']} rows={[{ foo: 1, bar: 2, baz: 3 }]} />

<Table
	cols={[
		{ key: 'foo', label: 'Foo' },
		{ key: 'bar', label: 'Bar' },
		{ key: 'baz', label: 'Baz' },
	]}
	rows={[{ foo: 1, bar: 2, baz: 3 }]}
/>

<Table
	cols={[
		{ key: 'foo', label: 'Foo' },
		{ key: 'bar', label: 'Bar' },
		{ key: 'baz', label: 'Baz' },
	]}
	rows={[{ foo: 1, bar: 2, baz: 3 }]}
	let:item
>
	<span>{item}</span>
</Table>

<Table
	cols={[
		{ key: ['foo', 'bar'], label: 'Foo + Bar' },
		{ key: 'baz', label: 'Baz' },
	]}
	rows={[{ foo: 1, bar: 2, baz: 3 }]}
	let:item
	let:colIndex
>
	{#if colIndex === 0}
		<span>{item.foo} + {item.bar}</span>
	{:else}
		<i>{item}</i>
	{/if}
</Table>

<Table>
	<div slot="head" let:col>
		{col.label}
		{#if $query.sort === col.key}
			<IconButton icon={$query.order === 'ASC' ? 'arrow-up' : 'arrow-down'} />
		{/if}
	</div>
</Table>

<script lang="ts">
	import Table from './draft.svelte';
</script>
