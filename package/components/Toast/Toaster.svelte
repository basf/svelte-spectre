{#if $toast.length}
	<section {...$$restProps} class="toaster">
		{#each positions as pos}
			<ul class="toast-list pos-{pos}">
				{#each toasted(pos) as toastItem, i (toastItem.id)}
					<li in:fly={flying(toastItem.pos)} animate:flip={{ duration: 250 }}>
						<Toast {toastItem}>
							{#if toastItem.title}<h5>{toastItem.title}</h5>{/if}
							{#if toastItem.msg}<p>{toastItem.msg}</p>{/if}
						</Toast>
					</li>
				{/each}
			</ul>
		{/each}
	</section>
{/if}

<script context="module">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { positions } from './positions';
	import { toast } from './';
	import Toast from './';
</script>

<script>
	const intros = {
		left: { x: -256 },
		right: { x: 256 },
		top: { y: -56 },
		bottom: { y: 56 },
		center: {},
	};
	const flying = (p) => Object.entries(intros).find(([k, v]) => p.includes(k))[1];
	$: toasted = (p) => $toast.filter((t) => t.pos === p);
</script>

<style>
	.toaster .toast-list {
		position: fixed;
		max-width: 100vw;
		list-style: none;
		margin: 0;
		z-index: 10000;
	}
	.toaster .toast-list > li {
		margin: 0.4rem;
	}
	.toaster .toast-list.pos-top_center {
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.toaster .toast-list.pos-top_right {
		top: 0;
		right: 0;
	}
	.toaster .toast-list.pos-center_right {
		top: 50%;
		right: 0;
		transform: translate(0, -50%);
	}
	.toaster .toast-list.pos-bottom_right {
		bottom: 0;
		right: 0;
	}
	.toaster .toast-list.pos-bottom_center {
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.toaster .toast-list.pos-bottom_left {
		bottom: 0;
		left: 0;
	}
	.toaster .toast-list.pos-center_left {
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
	}
	.toaster .toast-list.pos-top_left {
		top: 0;
		left: 0;
	}
	.toaster .toast-list.pos-center_center {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
