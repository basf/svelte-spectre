<div
	class:divider={align === 'horizontal'}
	class:text-center={align === 'horizontal'}
	class:divider-vert={align === 'vertical'}
	data-content={text || undefined}
/>

<script  context="module"></script>

<script >export let align = 'horizontal';
export let text = '';
</script>

<style >:global(.spectre) .divider,
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
  content: "";
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
}</style>
