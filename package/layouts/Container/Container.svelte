<div class="container grid-{size} {offset}">
	<slot />
</div>

<script context="module" ></script>

<script >export let size = 'md';
export let offset = '';
</script>

<style >:global(.spectre) {
  @import url("spectre.css/src/layout");
}</style>
