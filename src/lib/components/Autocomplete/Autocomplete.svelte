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
				{#if creatable && value.length}
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
				{:else}
					<dt class="divider" data-content={empty || 'No suggested'} />
				{/if}
			{:else}
				{#each Object.entries(makeGroups(suggested)) as [group, items], i}
					{#if group && items.length}
						<dt class="divider" data-content={group || ''} />
					{/if}

					{#each items.filter((i) => i.label) as item, i (item.index)}
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
	import {
		calcSuggestion,
		calcPrompt,
		createIndexes,
		createObject,
		markSuggestion,
		makeGroups,
	} from './utils';

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
		predefined = predefine(predefined);
		suggested = calcSuggestion(predefined as Item[], selected, value);
		prompt = calcPrompt(suggested, value, active);
	}

	function predefine(predefined: Item[] | string[]) {
		return predefined.some((p: string | Item) => typeof p === 'string')
			? toObjects(predefined as string[])
			: createIndexes(predefined as Item[]);
	}

	function toObjects(items: string[]) {
		return items.reduce((accumulator = [], current, index) => {
			const object = current ? createObject(current, items, index) : null;
			if (object) {
				object.group = groupBy(object) || '';
				accumulator.push(object);
				return accumulator;
			}
		}, []);
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
				if (suggested.length || (value && creatable))
					confirmSuggestion(suggested[active] || value);
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
		item = typeof item === 'string' ? createObject(item, predefined) : item;
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

	function deleteCreated(index: number) {
		predefined = predefined.filter<Item>((p: Item) => p.index !== index);
		suggested = suggested.filter((s) => s.index !== index);
		created = created.filter((c) => c.index !== index);
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
