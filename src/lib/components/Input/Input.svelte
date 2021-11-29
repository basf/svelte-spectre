{#if $$slots.default}
	<div class="col-4 col-{expand}-12">
		<label for="input-{fid}" class="form-label label-{size}">
			<slot />
		</label>
	</div>
{/if}
<div
	class:has-icon-left={$$slots.iconLeft}
	class:has-icon-right={$$slots.iconRight}
	class:flex-none={width}
	class="{width && `col-${width}`} col-{expand}-12"
>
	{#if rows > 1}
		<textarea
			{...$$restProps}
			bind:value
			class:is-success={validity === 'success'}
			class:is-error={validity === 'error'}
			class="form-input input-{size}"
			list="list-{fid}"
			id="input-{fid}"
			{rows}
			on:change
			on:input
		/>
	{:else}
		<input
			{...$$restProps}
			bind:value
			class:is-success={validity === 'success'}
			class:is-error={validity === 'error'}
			class="form-input input-{size}"
			list="list-{fid}"
			id="input-{fid}"
			on:change
			on:input
		/>
	{/if}
	{#if $$slots.iconLeft}
		<span class="form-icon">
			<slot name="iconLeft" />
		</span>
	{/if}
	{#if $$slots.iconRight}
		<span class="form-icon">
			<slot name="iconRight" />
		</span>
	{/if}
	{#if $$slots.hint}
		<div class="form-input-hint">
			<slot name="hint" />
		</div>
	{/if}
</div>
{#if options.length}
	<datalist id="list-{fid}">
		{#each options as value}
			<option {value} />{/each}
	</datalist>
{/if}

<script lang="ts" context="module">
	import uuid from '../../helpers/uuid';
	import type { Size } from '../../types/size';

	type Validity = 'success' | 'error' | false;
	type Option = string | number | boolean;

	export type { Size, Validity, Option };
</script>

<script lang="ts">
	export let value: string = '';
	export let rows: number = 1;
	export let validity: Validity = false;
	export let size: Size = 'md';
	export let expand: Size = 'xs';
	export let width: string = '';
	export let options: Option[] = [];

	const fid: string = uuid();
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';

	:global(.spectre) {
		.flex-none {
			flex: none;
		}
		.form-group {
			&.d-flex {
				flex-wrap: wrap;
			}
		}
		.has-icon-right,
		.has-icon-left {
			.form-icon {
				top: 0.9rem;
			}
		}
		.form-icon {
			width: auto;
			height: auto;
			margin: 0;
			& > :global(.icon) {
				margin: 0 0.25rem;
			}
			& > :global(*) {
				display: flex !important;
			}
		}
		.label-xl {
			@extend .label-lg;
		}
		.label-xs {
			@extend .label-sm;
		}
		.input-xl {
			@extend .input-lg;
			height: $unit-12;
		}
		.input-xs {
			@extend .input-sm;
			height: $unit-5;
		}
	}
</style>
