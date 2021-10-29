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
				bind:value
				use:focusing
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
					<a href="#" on:click|preventDefault={() => selectSuggestion(item)}>
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
	import type { Zoom } from '../../types/size';
	import type { Icons } from '../../types/icons';
	import type { Offset } from '../../types/position';
	import type { Color } from '../../types/text';
	import Chip from '../Chip/Chip.svelte';

	export type { Zoom, Icons };
</script>

<script lang="ts">
	export let value: string = '';
	export let suggested: string[] = [];
	export let predefined: string[] = [];
	export let selected: string[] = [];

	export let icon: Icons = '';
	export let size: Zoom = '1x';
	export let offset: Offset = '';
	export let color: Color = '';

	let focused = false;

	$: suggested = predefined.filter((p) => p.includes(value) && !selected.some((s) => s === p));

	function markSuggestion(item: string): string {
		return item.replace(value, `<mark>${value}</mark>`);
	}

	function selectSuggestion(item: string) {
		selected = [...selected, item];
		value = '';
	}

	function removeSelected(item: string) {
		selected = selected.filter((s) => s !== item);
	}

	function focusing(node: HTMLElement) {
		node.onfocus = () => (focused = true);
		node.onblur = () => (focused = false);
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
