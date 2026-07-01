<label
	{...$$restProps}
	id="range-{fid}"
	class="is-{validity}"
	class:form-inline={inline}
	class:dual={isDual}
	class:h-sm={height === 'sm'}
	class:h-md={height === 'md'}
	class:h-lg={height === 'lg'}
	class:h-xl={height === 'xl'}
	class:h-xxl={height === 'xxl'}
	style="
		--ux-min: {ux_min}; --ux-max: {ux_max};
		--user-min: {pct(user_min_val)}%; --user-max: {pct(user_max_val)}%;
		--range-color: {validityColor};
	"
	data-range={isDual ? `${user_min_val} – ${user_max_val}` : `${range ?? user_max_val}`}
>
	<slot />
	<div
		class="range-track"
		bind:this={trackEl}
		on:mousedown={onTrackDown}
		on:touchstart={onTrackDown}
		role="presentation"
	>
		<div class="range-track-bar" />
		<div class="range-selection" />
		{#if isDual}
			<button
				type="button"
				class="range-handle range-handle-min"
				class:active={active === 'min'}
				style="left: {pct(user_min_val)}%"
				aria-label="minimum"
				aria-valuemin={ux_min}
				aria-valuemax={user_max_val}
				aria-valuenow={user_min_val}
				role="slider"
				tabindex="0"
				on:mousedown={(e) => onDown(e, 'min')}
				on:touchstart={(e) => onDown(e, 'min')}
				on:keydown={(e) => onKey(e, 'min')}
			/>
			<button
				type="button"
				class="range-handle range-handle-max"
				class:active={active === 'max'}
				style="left: {pct(user_max_val)}%"
				aria-label="maximum"
				aria-valuemin={user_min_val}
				aria-valuemax={ux_max}
				aria-valuenow={user_max_val}
				role="slider"
				tabindex="0"
				on:mousedown={(e) => onDown(e, 'max')}
				on:touchstart={(e) => onDown(e, 'max')}
				on:keydown={(e) => onKey(e, 'max')}
			/>
		{:else}
			<button
				type="button"
				class="range-handle range-handle-max"
				class:active={active === 'max'}
				style="left: {pct(range ?? user_max_val)}%"
				aria-label="value"
				aria-valuemin={ux_min}
				aria-valuemax={ux_max}
				aria-valuenow={range ?? user_max_val}
				role="slider"
				tabindex="0"
				on:mousedown={(e) => onDown(e, 'max')}
				on:touchstart={(e) => onDown(e, 'max')}
				on:keydown={(e) => onKey(e, 'max')}
			/>
		{/if}
	</div>
</label>

<script lang="ts" context="module">
	import uuid from '../../helpers/uuid';

	type Validity = 'success' | 'warning' | 'error' | 'info' | false;

	export type { Validity };
</script>

<script lang="ts">
	export let range: number | null = null;
	export let user_min: number | null = null;
	export let user_max: number | null = null;
	export let ux_min: number = 0;
	export let ux_max: number = 100;
	export let step: number = 1;
	export let dual: boolean = false;
	export let inline: boolean = false;
	export let height: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';
	export let validity: Validity = false;

	const fid: string = uuid();

	$: isDual = dual || user_min !== null || user_max !== null;

	$: user_min_val = clamp(isDual ? user_min ?? ux_min : ux_min, ux_min, ux_max);
	$: user_max_val = clamp(isDual ? user_max ?? ux_max : range ?? 50, ux_min, ux_max);

	$: validityColor =
		validity === 'success'
			? 'var(--success-color)'
			: validity === 'warning'
			? 'var(--warning-color)'
			: validity === 'error'
			? 'var(--error-color)'
			: validity === 'info'
			? 'var(--info-color, var(--primary-color))'
			: 'var(--primary-color)';

	function clamp(v: number, minBound: number, maxBound: number): number {
		return Math.min(Math.max(v, minBound), maxBound);
	}

	function pct(v: number): number {
		if (ux_max === ux_min) return 0;
		return ((v - ux_min) / (ux_max - ux_min)) * 100;
	}

	let trackEl: HTMLElement;
	let active: 'min' | 'max' | null = null;

	function valueFromClientX(clientX: number): number {
		const rect = trackEl.getBoundingClientRect();
		const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
		const raw = ux_min + ratio * (ux_max - ux_min);
		const stepped = Math.round(raw / step) * step;
		return clamp(stepped, ux_min, ux_max);
	}

	function onDown(e: MouseEvent | TouchEvent, which: 'min' | 'max') {
		e.preventDefault();
		active = which;
		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onUp);
		window.addEventListener('touchmove', onMove, { passive: false });
		window.addEventListener('touchend', onUp);
	}

	function onMove(e: MouseEvent | TouchEvent) {
		if (!active) return;
		e.preventDefault();
		const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
		const v = valueFromClientX(clientX);
		if (active === 'min') {
			const newVal = Math.min(v, user_max_val);
			if (isDual) user_min = newVal;
			else range = newVal;
		} else {
			const newVal = Math.max(v, user_min_val);
			if (isDual) {
				user_max = newVal;
				range = newVal;
			} else {
				range = newVal;
			}
		}
		dispatchChange();
	}

	function onUp() {
		active = null;
		window.removeEventListener('mousemove', onMove);
		window.removeEventListener('mouseup', onUp);
		window.removeEventListener('touchmove', onMove);
		window.removeEventListener('touchend', onUp);
		dispatchChange();
	}

	function onTrackDown(e: MouseEvent | TouchEvent) {
		const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
		const v = valueFromClientX(clientX);
		if (!isDual) {
			range = v;
			active = 'max';
			window.addEventListener('mousemove', onMove);
			window.addEventListener('mouseup', onUp);
			window.addEventListener('touchmove', onMove, { passive: false });
			window.addEventListener('touchend', onUp);
		} else {
			const dMin = Math.abs(v - user_min_val);
			const dMax = Math.abs(v - user_max_val);
			if (dMin <= dMax) {
				user_min = Math.min(v, user_max_val);
				onDown(e, 'min');
			} else {
				user_max = Math.max(v, user_min_val);
				range = user_max;
				onDown(e, 'max');
			}
		}
		dispatchChange();
	}

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function dispatchChange() {
		dispatch('input', isDual ? { user_min: user_min_val, user_max: user_max_val } : range);
		dispatch('change', isDual ? { user_min: user_min_val, user_max: user_max_val } : range);
	}

	function onKey(e: KeyboardEvent, which: 'min' | 'max') {
		const small = step || 1;
		const big = (ux_max - ux_min) / 10;
		let v = which === 'min' ? user_min_val : user_max_val;
		switch (e.key) {
			case 'ArrowLeft':
			case 'ArrowDown':
				v -= small;
				break;
			case 'ArrowRight':
			case 'ArrowUp':
				v += small;
				break;
			case 'PageDown':
				v -= big;
				break;
			case 'PageUp':
				v += big;
				break;
			case 'Home':
				v = ux_min;
				break;
			case 'End':
				v = ux_max;
				break;
			default:
				return;
		}
		e.preventDefault();
		v = clamp(v, ux_min, ux_max);
		if (which === 'min') {
			v = Math.min(v, user_max_val);
			if (isDual) user_min = v;
			else range = v;
		} else {
			v = Math.max(v, user_min_val);
			if (isDual) {
				user_max = v;
				range = v;
			} else {
				range = v;
			}
		}
		dispatchChange();
	}
</script>

<style lang="scss">
	@import '@spectre-org/spectre-css/src/sliders';

	label {
		--success-color: #{$success-color};
		--warning-color: #{$warning-color};
		--error-color: #{$error-color};
		--primary-color: #{$primary-color};

		display: block;
		position: relative;

		&:not([data-tooltip]) {
			&::after {
				content: attr(data-range);
				position: absolute;
				left: var(--user-max, 50%);
				bottom: 150%;
				color: $light-color;
				background: rgba($dark-color, 0.95);
				padding: $unit-1 $unit-2;
				border-radius: $border-radius;
				transform: translateX(-50%);
				transition: opacity 250ms, transform 250ms, bottom 250ms;
				opacity: 0;
				pointer-events: none;
				white-space: nowrap;
			}
		}
		&:hover,
		&:active {
			&:not([data-tooltip]) {
				&::after {
					opacity: 1;
					bottom: 100%;
				}
			}
		}

		&.h-sm {
			.range-track {
				height: $unit-4;
				&-bar {
					height: 2px;
				}
			}
			.range-selection {
				height: 2px;
			}
		}
		&.h-md {
			.range-track {
				height: $unit-6;
				&-bar {
					height: $unit-h;
				}
			}
			.range-selection {
				height: $unit-h;
			}
		}
		&.h-lg {
			.range-track {
				height: $unit-8;
				&-bar {
					height: $unit-2;
				}
			}
			.range-selection {
				height: $unit-2;
			}
			.range-handle {
				width: $unit-4;
				height: $unit-4;
			}
		}
		&.h-xl {
			.range-track {
				height: $unit-10;
				&-bar {
					height: $unit-3;
				}
			}
			.range-selection {
				height: $unit-3;
			}
			.range-handle {
				width: $unit-5;
				height: $unit-5;
			}
		}
		&.h-xxl {
			.range-track {
				height: $unit-12;
				&-bar {
					height: $unit-4;
				}
			}
			.range-selection {
				height: $unit-4;
			}
			.range-handle {
				width: $unit-5;
				height: $unit-5;
			}
		}
	}

	.range-track {
		position: relative;
		width: 100%;
		height: $unit-6;
		cursor: pointer;
		touch-action: none;

		&-bar {
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;
			height: $unit-h;
			transform: translateY(-50%);
			background: $bg-color-dark;
			border-radius: $border-radius;
		}
	}

	.range-selection {
		position: absolute;
		top: 50%;
		left: var(--user-min, 0%);
		right: calc(100% - var(--user-max, 100%));
		height: $unit-h;
		transform: translateY(-50%);
		background: var(--range-color, $primary-color);
		border-radius: $border-radius;
		transition: background 250ms;
	}

	.range-handle {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: $unit-3;
		height: $unit-3;
		padding: 0;
		margin: 0;
		border: 0;
		border-radius: 50%;
		background: var(--range-color, $primary-color);
		cursor: grab;
		touch-action: none;
		appearance: none;
		-webkit-appearance: none;
		transition: transform 250ms, box-shadow 250ms, background 250ms;
		box-shadow: 0 0 0 0 var(--range-color, $primary-color);

		&:hover {
			transform: translate(-50%, -50%) scale(1.5);
		}
		&:active,
		&.active {
			transform: translate(-50%, -50%) scale(1.25);
			box-shadow: 0 0 0 3pt var(--range-color, $primary-color);
			cursor: grabbing;
		}
		&:focus-visible {
			outline: none;
			box-shadow: 0 0 0 3pt var(--range-color, $primary-color);
		}
	}
</style>
