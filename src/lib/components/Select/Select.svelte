{#if multiple}
	<select
		multiple
		size={options.length}
		id="select-{fid}"
		class="form-select is-{validity} select-{size}"
		class:form-inline={inline}
		bind:value
	>
		{#each options as option, i}
			<option value={i}>
				<slot {option}>{option}</slot>
			</option>
		{/each}
	</select>
{:else}
	<select
		id="select-{fid}"
		class="form-select is-{validity} select-{size}"
		class:form-inline={inline}
		bind:value
	>
		{#each options as option, i}
			<option value={i}>
				<slot {option}>{option}</slot>
			</option>
		{/each}
	</select>
{/if}

<script lang="ts" context="module">
	import uuid from '../../helpers/uuid';

	import type { Size } from '../../types/size';

	type Validity = 'success' | 'error' | false;

	export type { Size, Validity };
</script>

<script lang="ts">
	export let options: any[] = [];
	export let value: any[] = [];
	export let multiple: boolean = false;
	export let size: Size;
	export let inline: boolean = false;
	export let validity: Validity = false;

	const fid: string = uuid();
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
</style>
