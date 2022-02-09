<label
	{...$$restProps}
	id="range-{fid}"
	class="is-{validity}"
	class:form-inline={inline}
	style="--range: {range}; --min: {min}; --max: {max}"
	data-range={range}
>
	<slot />
	<input class="slider" type="range" bind:value={range} {min} {max} on:input on:change />
</label>

<script context="module">
	import uuid from '../../helpers/uuid';
</script>

<script>
	export let range = 50;
	export let min = 0;
	export let max = 100;
	export let inline = false;
	export let validity = false;
	const fid = uuid();
</script>

<style>
	.slider {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: transparent;
		display: block;
		width: 100%;
		height: 1.2rem;
	}
	.slider:focus {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		outline: none;
	}
	.slider.tooltip:not([data-tooltip])::after {
		content: attr(value);
	}
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		background: #5755d9;
		border: 0;
		border-radius: 50%;
		height: 0.6rem;
		margin-top: -0.25rem;
		-webkit-transition: transform 0.2s;
		transition: transform 0.2s;
		width: 0.6rem;
	}
	.slider::-moz-range-thumb {
		background: #5755d9;
		border: 0;
		border-radius: 50%;
		height: 0.6rem;
		-moz-transition: transform 0.2s;
		transition: transform 0.2s;
		width: 0.6rem;
	}
	.slider::-ms-thumb {
		background: #5755d9;
		border: 0;
		border-radius: 50%;
		height: 0.6rem;
		-ms-transition: transform 0.2s;
		transition: transform 0.2s;
		width: 0.6rem;
	}
	.slider:active::-webkit-slider-thumb {
		transform: scale(1.25);
	}
	.slider:active::-moz-range-thumb {
		transform: scale(1.25);
	}
	.slider:active::-ms-thumb {
		transform: scale(1.25);
	}
	.slider:disabled::-webkit-slider-thumb,
	.slider.disabled::-webkit-slider-thumb {
		background: #f7f8f9;
		transform: scale(1);
	}
	.slider:disabled::-moz-range-thumb,
	.slider.disabled::-moz-range-thumb {
		background: #f7f8f9;
		transform: scale(1);
	}
	.slider:disabled::-ms-thumb,
	.slider.disabled::-ms-thumb {
		background: #f7f8f9;
		transform: scale(1);
	}
	.slider::-webkit-slider-runnable-track {
		background: #eef0f3;
		border-radius: 0.1rem;
		height: 0.1rem;
		width: 100%;
	}
	.slider::-moz-range-track {
		background: #eef0f3;
		border-radius: 0.1rem;
		height: 0.1rem;
		width: 100%;
	}
	.slider::-ms-track {
		background: #eef0f3;
		border-radius: 0.1rem;
		height: 0.1rem;
		width: 100%;
	}
	.slider::-ms-fill-lower {
		background: #5755d9;
	}

	label {
		display: block;
		position: relative;
	}
	label:not([data-tooltip])::after {
		content: attr(data-range);
		position: absolute;
		left: calc(100% / ((var(--max) - var(--min)) / (var(--range) - var(--min))));
		bottom: 150%;
		color: #fff;
		background: rgba(48, 55, 66, 0.95);
		padding: 0.2rem 0.4rem;
		border-radius: 0.1rem;
		transform: translateX(-50%);
		transition: opacity 250ms, transform 250ms, bottom 250ms;
		opacity: 0;
	}
	label:hover:not([data-tooltip])::after,
	label:active:not([data-tooltip])::after {
		opacity: 1;
		bottom: 100%;
	}

	input[type='range'] {
		width: 100%;
	}
	input[type='range']::-webkit-slider-runnable-track {
		height: 3px;
		background: linear-gradient(
			to right,
			#5755d9 calc(100% / ((var(--max) - var(--min)) / (var(--range) - var(--min)))),
			#eef0f3 calc(100% / ((var(--max) - var(--min)) / (var(--range) - var(--min))))
		);
	}
	input[type='range']::-webkit-slider-thumb {
		transform: scale(1.25);
		box-shadow: 0 0 0 0pt rgba(87, 85, 217, 0.27);
		-webkit-transition: transform 250ms, box-shadow 250ms;
		transition: transform 250ms, box-shadow 250ms;
	}
	input[type='range']:hover::-webkit-slider-thumb {
		transform: scale(1.5);
	}
	input[type='range']:active::-webkit-slider-thumb {
		transform: scale(1.25);
		box-shadow: 0 0 0 3pt rgba(87, 85, 217, 0.27);
	}
	input[type='range']::-moz-range-track {
		height: 3px;
		background: linear-gradient(
			to right,
			#5755d9 calc(100% / ((var(--max) - var(--min)) / (var(--range) - var(--min)))),
			#eef0f3 calc(100% / ((var(--max) - var(--min)) / (var(--range) - var(--min))))
		);
	}
	input[type='range']::-moz-range-thumb {
		transform: scale(1.25);
		box-shadow: 0 0 0 0pt rgba(87, 85, 217, 0.27);
		-moz-transition: transform 250ms, box-shadow 250ms;
		transition: transform 250ms, box-shadow 250ms;
	}
	input[type='range']:hover::-moz-range-thumb {
		transform: scale(1.5);
	}
	input[type='range']:active::-moz-range-thumb {
		transform: scale(1.25);
		box-shadow: 0 0 0 3pt rgba(87, 85, 217, 0.27);
	}
</style>
