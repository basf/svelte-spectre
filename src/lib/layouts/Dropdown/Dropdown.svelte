<div
	{...$$restProps}
	class="dropdown"
	class:active
	class:dropdown-center={position.center}
	class:dropdown-right={position.right}
	class:dropdown-bottom={position.bottom}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="dropdown-toggle" on:click|stopPropagation on:click={onToggle} tabindex="0">
		<slot />
	</div>
	<div class="menu">
		<slot name="content" />
	</div>
</div>

<svelte:window bind:innerWidth={wW} bind:innerHeight={wH} />
<svelte:body on:click={() => (active = false)} />

<script lang="ts">
	export let active: boolean = false;
	export let align: string = '';

	let wW = 0,
		wH = 0;

	let position: { right: boolean; center: boolean; bottom: boolean } = {
		center: align === 'center',
		right: align === 'right',
		bottom: false,
	};

	function onToggle(e: any) {
		position = {
			center: align === 'center',
			right: align === 'right' || wW - e.clientX < e.clientX,
			bottom: wH - e.clientY < e.clientY,
		};
	}
</script>

<style lang="scss">
	:global(.spectre) {
		@import 'spectre.css/src/dropdowns';
	}
	.dropdown {
		.dropdown-toggle {
			display: contents;
		}
		.menu {
			@include shadow-variant(0.05rem);
			background: $bg-color-light;
			border-radius: $border-radius;
			margin: 0;
			min-width: $control-width-xs;
			padding: $unit-2;
			z-index: $zindex-3;
		}

		&.dropdown-center {
			.menu {
				--x: -50%;
				--left: 50%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		&.dropdown-right {
			.menu {
				--right: 0;
			}
		}
		&.dropdown-bottom {
			.menu {
				top: auto;
				bottom: 100%;
			}
		}
	}
	@keyframes slide-down {
		0% {
			opacity: 0;
			left: var(--left, auto);
			right: var(--right, auto);
			transform: translate(var(--x, 0), -$unit-8);
		}
		100% {
			opacity: 1;
			left: var(--left, auto);
			right: var(--right, auto);
			transform: translate(var(--x, 0), 0);
		}
	}
</style>
