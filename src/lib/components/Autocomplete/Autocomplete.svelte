<div {...$$restProps} class="form-autocomplete">
	<div class="form-autocomplete-input form-input" class:is-focused={focused}>
		{#each selected as chip, i}
			<Chip closable on:close={() => removeSelected(i)}>{chip}</Chip>
		{/each}

		<div
			class="form-input-icon-wrap"
			class:has-icon-right={value.length > 0 || selected.length}
			data-active={value.length ? prompt : ''}
		>
			<input
				class="form-input"
				type="text"
				{placeholder}
				bind:value
				on:focus={() => (focused = true)}
				on:blur={() => (focused = false)}
				on:keydown={selectSuggestion}
			/>
			{#if value.length > 0}
				<i class="form-icon loading" />
			{:else if selected.length}
				<button
					href="#"
					class="btn btn-clear mr--1"
					aria-label="Close"
					role="button"
					on:click={() => (selected = [])}
				/>
			{/if}
		</div>
	</div>

	{#if focused && (!predictable || value.length > 0)}
		<ul class="menu">
			{#if creatable && !suggested.length}
				<!-- {#each created as item, i} -->
				<li class="menu-item">
					<a
						href="#"
						class:active={active === 0}
						on:click|preventDefault={() => confirmSuggestion(value)}
						on:mouseover|preventDefault={() => (active = 0)}
						>{@html markSuggestion(value, value)}
					</a>
				</li>
				<!-- {/each} -->
			{:else if suggested.length > 0}
				{#each groups as group, g}
					{#if group !== 'default'}
						<li class="divider" data-content={group} />
					{/if}
					{#each group !== 'default' ? suggested.filter( (s) => s.includes(group) ) : suggested as item, i}
						<li class="menu-item">
							<a
								href="#"
								class:active={active === i}
								on:click|preventDefault={() => confirmSuggestion(item)}
								on:mouseover|preventDefault={() => (active = i)}
								>{@html markSuggestion(item, value)}
							</a>
							{#if created.includes(item)}
								<div class="menu-badge">
									<IconButton
										icon="delete"
										size="sm"
										on:click={() => deleteCreated(item)}
									/>
								</div>
							{/if}
						</li>
					{/each}
				{/each}
			{/if}
		</ul>
	{/if}
</div>

<script lang="ts" context="module">
	import Chip from '../Chip/Chip.svelte';
	import IconButton from '../Button/IconButton.svelte';
</script>

<script lang="ts">
	export let value: string = '';
	export let placeholder: string = 'typing here';
	export let predefined: string[] = [];
	export let suggested: string[] = [];
	export let selected: string[] = [];
	export let created: string[] = [];
	export let creatable: boolean = false;
	export let predictable: boolean = false;
	export let groups: string[] = ['default'];

	let focused: boolean = false,
		active: number = 0,
		prompt: string = '';

	$: if (focused) {
		suggested = calcSuggestion(predefined, selected, value);
		prompt = calcPrompt(suggested, value, active);
		// created = creatable && calcCreated(predefined, selected, value);

		console.log(predefined, suggested, created);
	}

	function calcCreated(predefined: string[], selected: string[], value: string): string[] {
		if (!predefined.some((p) => stringIndex(p, value) >= 0)) created.push(value);
		return created
			?.filter((p) => stringIndex(p, value) >= 0 && !selected.some((s) => s === p))
			.sort((f, s) => (stringIndex(f, value) === 0 ? -1 : 1));
	}

	function deleteCreated(item: string) {
		predefined = predefined.filter((p) => p !== item);
		suggested = suggested.filter((s) => s !== item);
		created = created.filter((c) => c !== item);
	}

	function calcSuggestion(predefined: string[], selected: string[], value: string): string[] {
		return predefined
			.filter((p) => stringIndex(p, value) >= 0 && !selected.some((s) => s === p))
			.sort((f, s) => (stringIndex(f, value) === 0 ? -1 : 1));
	}

	function calcPrompt(suggested: string[], value: string, active: number): string {
		return stringIndex(suggested[active], value) === 0 ? suggested[active] : '';
	}

	function stringIndex(item: string, value: string): number {
		const regex = new RegExp(value, 'i');
		return item?.search(regex);
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
				break;
			default:
				null;
				break;
		}
	}

	function confirmSuggestion(item: string) {
		selected = [...selected, item];
		created =
			!created.includes(item) && !suggested.includes(item) ? [...created, item] : created;
		predefined = created.some((c) => !predefined.includes(c))
			? [...predefined, item]
			: predefined;
		suggested = [];
		value = '';
		active = 0;
	}

	function removeSelected(index: number) {
		selected = selected.filter((s, i) => i !== index);
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
				padding: 0 0.1rem;
				.form-input-icon-wrap {
					flex: auto;
					.form-input {
						height: auto;
						line-height: 1.2rem;
						margin: 0;
						width: 100%;
						background: transparent;
					}
					&:is([data-active]) {
						&::before {
							content: attr(data-active);
							position: absolute;
							padding: 0.25rem 0.4rem;
							color: $gray-color;
							border: 0.05rem solid transparent;
						}
					}
				}
			}
			.menu {
				.menu-item {
					& > a:not(.active):hover {
						background: inherit;
						color: inherit;
					}
					:global(mark) {
						padding: 0;
					}
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
