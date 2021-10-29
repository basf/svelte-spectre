<div {...$$restProps} class="form-autocomplete">
	<div class="form-autocomplete-input form-input" class:is-focused={focused}>
		{#each selected as chip}
			<Chip closable on:close={() => removeSelected(chip)}>{chip}</Chip>
		{/each}

		<div class="form-input-icon-wrap" class:has-icon-left={value.length > 0}>
			<input
				class="form-input"
				type="text"
				placeholder="typing here"
				bind:this={input}
				bind:value
				use:focusing
			/>
			{#if value.length > 0}
				<i class="form-icon loading" />
			{/if}
		</div>
	</div>

	{#if value.length > 0 && suggested.length > 0}
		<ul class="menu" bind:this={menu}>
			{#each suggested as item, i}
				<li class="menu-item">
					<a
						href="#"
						bind:this={links[i]}
						on:click|preventDefault={() => confirmSuggestion(item)}
						on:keydown|preventDefault={(e) => selectSuggestion(e, i, item)}
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
	export let suggested: string[] = [];
	export let predefined: string[] = [];
	export let selected: string[] = [];

	let input: HTMLElement,
		menu: HTMLElement,
		links: HTMLElement[] = [],
		focused: boolean = false;

	$: suggested = predefined.filter((p) => p.includes(value) && !selected.some((s) => s === p));

	function markSuggestion(item: string): string {
		return item.replace(value, `<mark>${value}</mark>`);
	}

	function selectSuggestion(e: KeyboardEvent, i: number, item: string) {
		let index = i,
			items = links.filter(Boolean);
		if (e.code === 'Enter') {
			confirmSuggestion(item);
		} else if (e.code === 'Tab' || e.code === 'ArrowDown') {
			index < items.length - 1 ? items[index + 1].focus() : input.focus();
		} else if (e.code === 'ArrowUp') {
			index > 0 ? items[index - 1].focus() : input.focus();
			input.setSelectionRange(value.length, value.length);
		} else if (e.code === 'Escape') {
			suggested.length = 0;
			input.focus();
		} else input.focus();
	}

	function confirmSuggestion(item: string) {
		selected = [...selected, item];
		value = '';
		input.focus();
	}

	function removeSelected(item: string) {
		selected = selected.filter((s) => s !== item);
	}

	function focusing(node: HTMLElement) {
		node.onfocus = () => (focused = true);
		node.onblur = () => (focused = false);
		node.onkeydown = (e) => {
			const metas = ['ArrowDown', 'Tab'];
			console.log(e);
			if (metas.includes(e.key) && menu) {
				e.preventDefault();
				links[0].focus();
			} else if (e.key === 'Backspace' && (e.ctrlKey || e.metaKey)) {
				!value
					? ((selected = selected.length === 1 ? [] : selected.slice(-1)),
					  console.log(selected))
					: null;
			}
		};
	}
</script>

<style lang="scss">
	@import 'spectre.css/src/autocomplete';
	@import 'spectre.css/src/menus';
	@import 'spectre.css/src/tiles';
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
					}
				}
			}
			.menu {
				.menu-item {
					:global(mark) {
						padding: 0;
					}
				}
			}
		}
	}
</style>
