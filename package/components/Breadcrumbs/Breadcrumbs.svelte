<ul {...$$restProps} class="breadcrumb">
	{#each links as link}
		<li class="breadcrumb-item">
			<a href={link.href} class:tooltip={link.tooltip} data-tooltip={link.tooltip}>
				{link.title}
			</a>
		</li>
	{/each}
</ul>

<script context="module"></script>

<script>
	export let links;
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

	.breadcrumb {
		list-style: none;
		margin: 0.2rem 0;
		padding: 0.2rem 0;
	}
	.breadcrumb .breadcrumb-item {
		color: #66758c;
		display: inline-block;
		margin: 0;
		padding: 0.2rem 0;
	}
	.breadcrumb .breadcrumb-item:not(:last-child) {
		margin-right: 0.2rem;
	}
	.breadcrumb .breadcrumb-item:not(:last-child) a {
		color: #66758c;
	}
	.breadcrumb .breadcrumb-item:not(:first-child)::before {
		color: #66758c;
		content: '/';
		padding-right: 0.4rem;
	}
</style>
