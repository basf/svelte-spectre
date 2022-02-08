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
	.bg-darked {
		background: #252b33 !important;
		color: #fff;
	}

	.bg-secondary-darked {
		background: #343a51 !important;
		color: #fff;
	}

	.text-darked {
		color: #f2f2f2 !important;
	}

	a.text-darked:focus,
	a.text-darked:hover {
		color: #e6e6e6;
	}
	a.text-darked:visited {
		color: white;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;
		}

		.form-input,
		.form-select {
			background-color: #252b33 !important;
			border-color: #66758c !important;
			color: #f2f2f2 !important;
		}

		.form-checkbox .form-icon,
		.form-radio .form-icon,
		.form-switch .form-icon {
			border-color: #66758c !important;
			background: #252b33 !important;
		}

		input:active + .form-icon {
			background: #343a51 !important;
		}
		input:checked + .form-icon {
			background: #5755d9 !important;
		}

		.badge[data-badge]::after,
		.badge:not([data-badge])::after {
			box-shadow: 0 0 0 0.1rem #252b33 !important;
			color: #f2f2f2 !important;
		}

		code {
			background: #afa2b1;
			color: #413843;
		}

		.code {
			color: #bcc3ce;
		}
		.code::before {
			color: #bcc3ce;
		}
		.code code {
			background: #303742;
		}
	}
	[color-scheme='dark'] :root {
		color-scheme: dark;
	}
	[color-scheme='dark'] .form-input,
	[color-scheme='dark'] .form-checkbox .form-icon,
	[color-scheme='dark'] .form-select {
		background-color: #252b33 !important;
		border-color: #66758c !important;
		color: #f2f2f2 !important;
	}

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
