{#if $toast.length}
	<section class="toaster">
		{#each positions as pos}
			<ul class="toast-list pos-{pos}">
				{#each toasted(pos) as tost, i (tost.id)}
					<li in:fly={flying(tost.pos)} animate:flip={{ duration: 250 }}>
						<Toast {tost} invert reverse stack>
							{#if tost.title}<h5>{tost.title}</h5>{/if}
							<p>{tost.msg}</p>
						</Toast>
					</li>
				{/each}
			</ul>
		{/each}
	</section>
{/if}

<script lang="ts" context="module">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	import { positions } from './positions';
	import { toast } from './';
	import Toast from './';
</script>

<script lang="ts">
	const intros = {
		left: { x: -256 },
		right: { x: 256 },
		top: { y: -56 },
		bottom: { y: 56 },
		center: {},
	};

	const flying = (p: string) => Object.entries(intros).find(([k, v]) => p.includes(k))[1];

	$: toasted = (p: string) => $toast.filter((t) => t.pos === p);
</script>

<style lang="scss">
	.toaster {
		.toast-list {
			position: fixed;
			max-width: 100vw;
			list-style: none;
			margin: 0;
			& > li {
				margin: $layout-spacing;
			}
			&.pos {
				&-top_center {
					top: 0;
					left: 50%;
					transform: translate(-50%, 0);
				}
				&-top_right {
					top: 0;
					right: 0;
				}
				&-center_right {
					top: 50%;
					right: 0;
					transform: translate(0, -50%);
				}
				&-bottom_right {
					bottom: 0;
					right: 0;
				}
				&-bottom_center {
					bottom: 0;
					left: 50%;
					transform: translate(-50%, 0);
				}
				&-bottom_left {
					bottom: 0;
					left: 0;
				}
				&-center_left {
					top: 50%;
					left: 0;
					transform: translate(0, -50%);
				}
				&-top_left {
					top: 0;
					left: 0;
				}
				&-center_center {
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
</style>
