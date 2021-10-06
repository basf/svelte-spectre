<!-- <MorphingModal {...$$restProps} {fullscreen} {width} {height} bind:open on:toggle on:adjust> -->
<!-- <slot /> -->
<!-- <div slot="content" class:modal-fs={fullscreen} class="modal-{size}" id="modal-{mid}"> -->
<div class="modal-container" {style}>
	<div class="modal-header">
		<div class="modal-title h5">
			<slot name="header" />
		</div>
	</div>
	<div class="modal-body" {style}>
		<div class="content">
			<slot name="content" />
		</div>
	</div>
	<div class="modal-footer">
		<slot name="footer" />
	</div>
</div>
<!-- </div> -->

<!-- </MorphingModal> -->
<script  context="module">// import MorphingModal from 'svelte-morphing-modal';
export const SIZE = {
    sm: 320,
    md: 640,
    lg: 960,
};
</script>

<script >export let open = false;
export let size = 'md';
export let fullscreen = true;
export let height = '100%';
const mid = Date.now();
$: width = fullscreen ? '100%' : `${SIZE[size]}px`;
$: style = `min-width: ${width}; min-height: ${height};`;
</script>

<style >:global(.spectre) .modal, :global(.spectre) .modal-lg, :global(.spectre) .modal-sm {
  align-items: center;
  bottom: 0;
  display: none;
  justify-content: center;
  left: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
}
:global(.spectre) .modal:target, :global(.spectre) .modal-lg:target, :global(.spectre) .modal-sm:target, :global(.spectre) .modal.active, :global(.spectre) .active.modal-lg, :global(.spectre) .active.modal-sm {
  display: flex;
  opacity: 1;
  z-index: 400;
}
:global(.spectre) .modal:target .modal-overlay, :global(.spectre) .modal-lg:target .modal-overlay, :global(.spectre) .modal-sm:target .modal-overlay, :global(.spectre) .modal.active .modal-overlay, :global(.spectre) .active.modal-lg .modal-overlay, :global(.spectre) .active.modal-sm .modal-overlay {
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
:global(.spectre) .modal:target .modal-container, :global(.spectre) .modal-lg:target .modal-container, :global(.spectre) .modal-sm:target .modal-container, :global(.spectre) .modal.active .modal-container, :global(.spectre) .active.modal-lg .modal-container, :global(.spectre) .active.modal-sm .modal-container {
  -webkit-animation: slide-down 0.2s ease 1;
          animation: slide-down 0.2s ease 1;
  z-index: 1;
}
:global(.spectre) .modal.modal-sm .modal-container, :global(.spectre) .modal-sm .modal-container {
  max-width: 320px;
  padding: 0 0.4rem;
}
:global(.spectre) .modal.modal-lg .modal-overlay, :global(.spectre) .modal-lg .modal-overlay {
  background: #fff;
}
:global(.spectre) .modal.modal-lg .modal-container, :global(.spectre) .modal-lg .modal-container {
  box-shadow: none;
  max-width: 960px;
}
:global(.spectre) .modal-container {
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 640px;
  padding: 0 0.8rem;
  width: 100%;
}
:global(.spectre) .modal-container.modal-fullheight {
  max-height: 100vh;
}
:global(.spectre) .modal-container .modal-header {
  color: #303742;
  padding: 0.8rem;
}
:global(.spectre) .modal-container .modal-body {
  overflow-y: auto;
  padding: 0.8rem;
  position: relative;
}
:global(.spectre) .modal-container .modal-footer {
  padding: 0.8rem;
  text-align: right;
}

[slot=content] {
  width: 100%;
  height: 100%;
}</style>
