<hr
	{...$$restProps}
	class:divider={align.includes('horizontal')}
	class:text-center={align.includes('center')}
	class:text-right={align.includes('right')}
	class:divider-vert={align === 'vertical'}
	class:divider-empty={empty}
	class="text-{color}"
	data-content={text}
/>

<script context="module"></script>

<script>
	export let align = 'horizontal';
	export let text = '';
	export let empty = false;
	export let color = 'gray';
</script>

<style>
	:global(.spectre) .divider,
	:global(.spectre) .divider-vert {
		display: block;
		position: relative;
	}
	:global(.spectre) .divider[data-content]::after,
	:global(.spectre) .divider-vert[data-content]::after {
		background: #fff;
		color: #bcc3ce;
		content: attr(data-content);
		display: inline-block;
		font-size: 0.7rem;
		padding: 0 0.4rem;
		transform: translateY(-0.65rem);
	}
	:global(.spectre) .divider {
		border-top: 0.05rem solid #f1f3f5;
		height: 0.05rem;
		margin: 0.4rem 0;
	}
	:global(.spectre) .divider[data-content] {
		margin: 0.8rem 0;
	}
	:global(.spectre) .divider-vert {
		display: block;
		padding: 0.8rem;
	}
	:global(.spectre) .divider-vert::before {
		border-left: 0.05rem solid #dadee4;
		bottom: 0.4rem;
		content: '';
		display: block;
		left: 50%;
		position: absolute;
		top: 0.4rem;
		transform: translateX(-50%);
	}
	:global(.spectre) .divider-vert[data-content]::after {
		left: 50%;
		padding: 0.2rem 0;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.spectre) hr {
		border: 0;
		color: transparent;
	}
	:global(.spectre) hr.divider[data-content]::after,
	:global(.spectre) hr.divider-vert[data-content]::after {
		color: currentColor;
	}
	:global(.spectre) hr.divider {
		width: 100%;
	}
	:global(.spectre) hr.divider-vert {
		height: auto !important;
	}
	:global(.spectre) hr.divider-empty {
		border: 0;
	}
</style>
