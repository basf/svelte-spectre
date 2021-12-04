<section class="bg-secondary px-2 s-rounded">
	<Grid>
		{#each Object.keys(config) as key}
			<Col col="auto">
				<div class="form-group">
					<label class="form-label" for={autoId(key)}
						>{config[key].label || key}

						{#if config[key].options}
							<select bind:value={state[key]} class="form-select" id={autoId(key)}>
								{#each config[key].options as value}
									<option {value} selected={value === state[key]}>{value}</option>
								{/each}
							</select>
						{:else if config[key].type === 'number'}
							<input
								bind:value={state[key]}
								size={config[key].size}
								step={config[key].step}
								type="number"
								min={config[key].min ?? state.min}
								max={config[key].max ?? state.max}
								class="form-input"
								id={autoId(key)}
							/>
						{:else if config[key].type === 'checkbox'}
							<div class="form-checkbox">
								<input bind:checked={state[key]} type="checkbox" id={autoId(key)} />
								<i class="form-icon" />
							</div>
						{:else if config[key].type === 'button'}
							<input
								class="btn btn-{config[key].variant || 'primary'}"
								value={config[key].value || key}
								on:click|stopPropagation={state[key]}
								type="button"
								id={autoId(key)}
							/>
						{:else}
							<input
								bind:value={state[key]}
								size={config[key].size}
								placeholder={config[key].placeholder}
								class="form-input"
								id={autoId(key)}
							/>
						{/if}
					</label>
				</div>
			</Col>
		{/each}
	</Grid>
</section>

<script lang="ts">
	import { Grid, Col } from '$lib';

	export let state: Record<string, unknown> = {};
	export let config: Record<
		string,
		{ label: string; options?: unknown[]; size?: number; type?: string }
	> = {};

	const generateUid = (): string => Math.random().toString(36).slice(2);

	const safe = (chars: string): string => chars.replace(/\s+/g, '_');

	function useAutoId(base = ''): (name: string, ...args: unknown[]) => string {
		const uid = generateUid();
		const prefix = base && `~${safe(base)}`;
		const used = new Map<string, string>();

		return (...args: unknown[]) => {
			const key = args.join('~');
			let id = used.get(key);
			if (!id) {
				used.set(key, (id = `${prefix}~${safe(key)}~${uid}`));
			}
			return id;
		};
	}
	const autoId = useAutoId('knobs');
</script>

<style lang="scss">
	@import 'spectre.css/src/forms';
	section {
		// border: 1px dashed $gray-color;
		// margin: 8px -8px;
		padding: $unit-1 $unit-4 $unit-2 !important;
	}
	select {
		display: flex;
	}
	.form-group {
		min-height: 100%;
		display: flex;
		align-items: center;
	}
	label {
		display: flex !important;
		flex-direction: column;
	}
	input[type='button'] {
		vertical-align: middle;
	}
</style>
