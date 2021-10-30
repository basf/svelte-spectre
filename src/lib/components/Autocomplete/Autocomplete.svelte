<div {...$$restProps} class="form-autocomplete">
	<div class="form-autocomplete-input form-input" class:is-focused={focused}>
		{#each selected as chip, i}
			<Chip closable on:close={() => removeSelected(i)}>{chip}</Chip>
		{/each}

		<div class="form-input-icon-wrap" class:has-icon-right={value.length > 0}>
			<input
				class="form-input"
				type="text"
				{placeholder}
				bind:value
				on:focus={() => (focused = true)}
				on:blur|preventDefault={() => (focused = false)}
				on:keydown={selectSuggestion}
			/>
			{#if value.length > 0}
				<i class="form-icon loading" />
			{/if}
		</div>
	</div>

	{#if value.length > 0 && suggested.length > 0}
		<ul class="menu">
			{#each suggested as item, i}
				<li class="menu-item">
					<a
						href="#"
						class:active={active === i}
						on:click|preventDefault={() => confirmSuggestion(item)}
						on:mouseover|preventDefault={() => (active = i)}
					>
						<div class="tile tile-centered">
							<div class="tile-icon">{i}</div>
							<div class="tile-content">{@html markSuggestion(item)}</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<script lang="ts" context="module">
	import Chip from '../Chip/Chip.svelte';
</script>

<script lang="ts">
	export let value: string = '';
	export let placeholder: string = 'typing here';
	export let predefined: string[] = [];
	export let suggested: string[] = [];
	export let selected: string[] = [];

	let focused: boolean = false,
		active: number = 0;

	$: suggested = predefined.filter((p) => p.includes(value) && !selected.some((s) => s === p));

	function markSuggestion(item: string): string {
		return item.replace(value, `<mark>${value}</mark>`);
	}

	function selectSuggestion(e: KeyboardEvent) {
		switch (e.key) {
			case 'Backspace':
				!value && removeSelected(selected.length - 1);
				break;
			case 'Tab':
				e.preventDefault();
				confirmSuggestion(suggested[active]);
				break;
			case 'Enter':
				confirmSuggestion(suggested[active]);
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
				break;
		}
	}

	function confirmSuggestion(item: string) {
		selected = [...selected, item];
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
	@import 'spectre.css/src/tiles';
	@import 'spectre.css/src/forms';
	@import 'spectre.css/src/icons';
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
	}
</style>
