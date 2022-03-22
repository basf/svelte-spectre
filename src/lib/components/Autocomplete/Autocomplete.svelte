<div {...$$restProps} class="form-autocomplete">
	<div class="form-autocomplete-input form-input" class:is-focused={focused}>
		{#each selected as chip, i}
			<Chip
				style={chip.style || ''}
				closable
				color={chip.type || ''}
				on:close={() => removeSelected(i)}>{chip.label}</Chip
			>
		{/each}

		<div
			class="form-input-icon-wrap"
			class:has-icon-right={value.length || selected.length}
			data-active={value.length ? prompt : ''}
		>
			<input
				class="form-input"
				type="text"
				tabindex="0"
				{placeholder}
				bind:value
				on:focus={() => (focused = true)}
				on:keydown={selectSuggestion}
				on:click|stopPropagation
			/>
			{#if value.length}
				<i class="form-icon loading" />
			{:else if selected.length}
				<button
					class="btn btn-clear mr--1"
					aria-label="Close"
					on:click={() => (selected = [])}
				/>
			{/if}
		</div>
	</div>

	{#if focused && (!predictable || value.length)}
		<dl class="menu" tabindex="0">
			{#if !suggested.length}
				<dt class="divider" data-content={empty || 'No suggested'} />
				{#if creatable}
					<dt class="divider" data-content="Add:" />
					<dd class="menu-item">
						<a
							href="#_"
							class:active={value.length}
							on:click|preventDefault={() => confirmSuggestion(value)}
							on:mouseover|preventDefault={() => (active = 0)}
							on:focus|preventDefault={() => (active = 0)}
							>{@html markSuggestion(value, value)}
						</a>
					</dd>
				{/if}
			{:else if suggested.length}
				{#each Object.entries(makeGroups(suggested)) as [group, items], i}
					{#if group && items.length}
						<dt class="divider" data-content={group || ''} />
					{/if}

					{#each items as item, i (item.index)}
						<dd class="menu-item" tabindex="0">
							<a
								href="#_"
								class:active={active === suggested.indexOf(item)}
								on:click|preventDefault={() => confirmSuggestion(item)}
								on:mouseover|preventDefault={() =>
									(active = suggested.indexOf(item))}
								on:focus|preventDefault={() => (active = suggested.indexOf(item))}
							>
								{@html markSuggestion(item.label, value)}</a
							>
							{#if created.indexOf(item) >= 0}
								<div class="menu-badge">
									<IconButton
										icon="delete"
										size="sm"
										on:click={() => deleteCreated(item.index)}
									/>
								</div>
							{/if}
						</dd>
					{/each}
				{/each}
			{/if}
		</dl>
	{/if}
</div>

<svelte:body on:click={() => (focused = false)} />

<script lang="ts" context="module">
	import Chip from '../Chip/Chip.svelte';
	import IconButton from '../Button/IconButton.svelte';
	import type { Color } from '../../types/text';

	type Item = {
		index: number;
		label: string;
		value?: any;
		group?: string;
		type?: Color;
		style?: string;
	};
</script>

<script lang="ts">
	export let value: string = '';
	export let empty: string = '';
	export let placeholder: string = 'typing here';
	export let predefined: string[] | Item[] = [];
	export let suggested: Item[] = [];
	export let selected: Item[] = [];
	export let created: Item[] = [];
	export let creatable: boolean = false;
	export let predictable: boolean = false;
	export let objectable: boolean = false;
	export let groupBy: (item: Item | string) => string;

	let focused: boolean = false,
		active: number = 0,
		prompt: string = '';

	$: if (focused) {
		predefined = predefined.some((p: string | Item) => typeof p === 'string')
			? toObjects(predefined as string[])
			: createIndexes(predefined as Item[]);
		suggested = calcSuggestion(predefined as Item[], selected, value);
		prompt = calcPrompt(suggested, value, active);
	}

	function deleteCreated(index: number) {
		predefined = predefined.filter<Item>((p: Item) => p.index !== index);
		suggested = suggested.filter((s) => s.index !== index);
		created = created.filter((c) => c.index !== index);
	}

	function calcSuggestion(predefined: Item[], selected: Item[], value: string): Item[] {
		return predefined.filter(
			(p) => stringIndex(p.label, value) >= 0 && !selected.some((s) => s.index === p.index)
		);
	}

	function calcPrompt(suggested: Item[], value: string, active: number): string {
		return stringIndex(suggested[active]?.label, value) === 0 ? suggested[active].label : '';
	}

	function stringIndex(item: string, value: string): number {
		const regexp = new RegExp(value, 'i');
		return item?.search(regexp);
	}

	function stringMatch(item: string, value: string): string {
		const regex = new RegExp(value, 'i');
		return item?.match(regex).join('');
	}

	function markSuggestion(item: string, value: string): string {
		const match = stringMatch(item, value);
		return item.replace(match, `<mark>${match}</mark>`);
	}

	function selectSuggestion(e: KeyboardEvent) {
		switch (e.key) {
			case 'Backspace':
				if (!value)
					e.metaKey || e.ctrlKey ? (selected = []) : removeSelected(selected.length - 1);
				break;
			case 'Tab':
			case 'Enter':
				e.preventDefault();
				(suggested.length || value) && confirmSuggestion(suggested[active] || value);
				break;
			case 'ArrowRight':
				e.preventDefault();
				suggested.length && confirmSuggestion(suggested[active]);
				break;
			case 'ArrowDown':
				e.preventDefault();
				active < suggested.length - 1 ? active++ : (active = 0);
				break;
			case 'ArrowUp':
				e.preventDefault();
				active > 0 ? active-- : (active = suggested.length - 1);
				break;
			case 'Escape':
				e.preventDefault();
				value = '';
				active = 0;
				focused = false;
				e.target.blur();
				break;
			default:
				null;
				break;
		}
	}

	function confirmSuggestion(item: Item | string) {
		item = typeof item === 'string' ? createObject(item) : item;
		selected = [...selected, item];
		created =
			created.indexOf(item) === -1 && suggested.indexOf(item) === -1
				? [...created, item]
				: created;
		predefined = created.some((c: Item & string) => predefined.indexOf(c) === -1)
			? [...(predefined as Item[]), item]
			: predefined;
		suggested = [];
		active = 0;
		value = '';
	}

	function removeSelected(index: number) {
		selected = selected.filter((s, i) => i !== index);
	}

	function toObjects(items: string[]) {
		return items.map((item, index) => {
			const object = createObject(item, index);
			object.group = groupBy(object) || '';
			return object;
		});
	}

	function createObject(item: string, index?: number): Item {
		return {
			index: index >= 0 ? index : predefined.length,
			value: item,
			label: `${item}`,
		};
	}

	function createIndexes(items: Item[]) {
		return items.some((item) => !item.hasOwnProperty('index'))
			? items.map((item: Item, i) => ({ ...item, index: i }))
			: items;
	}

	function makeGroups(items: Item[]): { [key: string]: Item[] } | [] {
		if (!items || !items.length) {
			console.warn(`Autocomplete haven't items`);
			return [];
		} else {
			return items.reduce((a, c) => {
				a[c.group] = a[c.group] || [];
				a[c.group]?.push(c);
				return a;
			}, {});
		}
	}
</script>

<style lang="scss">
	@import 'spectre.css/src/autocomplete';
	@import 'spectre.css/src/menus';
	@import 'spectre.css/src/forms';
	:global(.spectre) {
		.form-autocomplete {
			.form-autocomplete-input {
				align-items: center;
				// padding: 0 0.1rem;
				background: transparent;
				.form-input-icon-wrap {
					flex: auto;
					.form-input {
						height: auto;
						line-height: 1.2rem;
						margin: 0;
						width: 100%;
						background: transparent !important;
						border: none !important;
					}
					&:is([data-active]) {
						&::before {
							content: attr(data-active);
							position: absolute;
							padding: 0.25rem 0.35rem;
							color: $gray-color-dark;
							line-height: 1.45;
							border: 0.05rem solid transparent;
						}
					}
				}
			}
			.menu {
				display: flex;
				flex-flow: column nowrap;
				.menu-item {
					margin-bottom: 0;
					& > a:not(.active):hover {
						background: inherit;
						color: inherit;
					}
					:global(mark) {
						padding: 0;
					}
				}
				dt {
					font-weight: normal;
					margin: 1rem 0;
				}
			}
		}
		.btn-clear {
			background: transparent;
			border: 0;
			color: currentColor;
			height: $unit-5;
			line-height: $unit-4;
			margin: 0 0.25rem;
			opacity: 1;
			padding: $unit-h;
			text-decoration: none;
			width: $unit-5;
			cursor: pointer;
			position: absolute;
			top: 50%;
			right: $unit-h;
			transform: translateY(-50%);
			&:focus,
			&:hover {
				background: rgba($bg-color, 0.5);
				opacity: 0.95;
			}
			&::before {
				content: '\2715';
			}
		}
	}
</style>
