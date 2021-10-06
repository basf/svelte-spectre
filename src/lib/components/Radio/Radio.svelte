{#if label}
	<label class="form-label">{label}</label>
{/if}
{#each radios as radio, i}
	<label id="radio-{fid}" class="form-radio is-{validity}" class:form-inline={inline}>
		<input type="radio" name={radio.name} value={i} bind:group />
		<i class="form-icon" /><slot {radio}>{radio.label}</slot>
	</label>
{/each}

<script lang="ts" context="module">
	import uuid from '../../helpers/uuid';

	type Validity = 'success' | 'error' | false;

	export type { Validity };
</script>

<script lang="ts">
	export let label: string;
	export let radios: any[] = [];
	export let group: number[] = [];
	export let inline: boolean = false;
	export let validity: Validity = false;

	const fid: string = uuid();
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
</style>
