<label id="switch-{fid}" class="form-switch" class:form-inline={inline}>
	<input bind:checked={value} type="checkbox" />
	<i class="form-icon" />
	{#if label}{label}{/if}
</label>

<script lang="ts" context="module">
	import uuid from '../../helpers/uuid';

	type Validity = 'success' | 'error' | false;

	export type { Validity };
</script>

<script lang="ts">
	export let label: string = '';
	export let value: boolean = false;
	export let inline: boolean = false;
	export let validity: Validity = false;

	const fid: string = uuid();
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
</style>
