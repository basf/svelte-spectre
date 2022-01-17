<figure {...$$restProps} class="figure">
	<slot name="img">
		<img
			class="img-responsive"
			class:img-fit-contain={contain}
			class:img-fit-cover={cover}
			{...$$restProps}
		/>
	</slot>
	{#if $$slots.default}
		<figcaption class="figure-caption text-{align}"><slot /></figcaption>
	{/if}
</figure>

<script context="module"></script>

<script>
	export let contain = false;
	export let cover = false;
	export let align = 'center';
</script>

<style>
	:global(.spectre) .img-responsive {
		display: block;
		height: auto;
		max-width: 100%;
	}
	:global(.spectre) .img-fit-cover {
		-o-object-fit: cover;
		object-fit: cover;
	}
	:global(.spectre) .img-fit-contain {
		-o-object-fit: contain;
		object-fit: contain;
	}
	:global(.spectre) .video-responsive {
		display: block;
		overflow: hidden;
		padding: 0;
		position: relative;
		width: 100%;
	}
	:global(.spectre) .video-responsive::before {
		content: '';
		display: block;
		padding-bottom: 56.25%;
	}
	:global(.spectre) .video-responsive iframe,
	:global(.spectre) .video-responsive object,
	:global(.spectre) .video-responsive embed {
		border: 0;
		bottom: 0;
		height: 100%;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
	}
	:global(.spectre) video.video-responsive {
		height: auto;
		max-width: 100%;
	}
	:global(.spectre) video.video-responsive::before {
		content: none;
	}
	:global(.spectre) .video-responsive-4-3::before {
		padding-bottom: 75%;
	}
	:global(.spectre) .video-responsive-1-1::before {
		padding-bottom: 100%;
	}
	:global(.spectre) .figure {
		margin: 0 0 0.4rem 0;
	}
	:global(.spectre) .figure .figure-caption {
		color: #66758c;
		margin-top: 0.4rem;
	}
	:global(.spectre) .figure {
		margin: 0;
	}
</style>
