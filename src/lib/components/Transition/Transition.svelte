{#key key}
	<div in:inFn={inParams} out:outFn={outParams}>
		<slot />
	</div>
{/key}

<script context="module">
	import * as transitions from 'svelte/transition';

	export const Transitions = Object.keys(transitions);

	export const Props = {
		key: null,
		in: {
			type: Array,
			default: [], // [name: string, params: {}]
		},
		out: {
			type: Array,
			default: [], // [name: string, params: {}]
		},
	};
</script>

<script>
	let intro = Props.in.default;
	let out = Props.out.default;
	let key;

	// prettier-ignore
	$: ([inKey, inParams = {}] = intro);
	// prettier-ignore
	$: ([outKey, outParams = {}] = out);

	$: inFn = transitions[inKey] || noop;
	$: outFn = transitions[outKey] || noop;

	function noop() {}

	export { intro as in, out, key };
</script>
