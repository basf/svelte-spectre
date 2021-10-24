<ul {...$$restProps} class="breadcrumb {offset}">
	{#each links as link}
		<li class="breadcrumb-item">
			<a href={link.href}>{link.title}</a>
		</li>
	{/each}
</ul>

<script  context="module"></script>

<script >export let links;
export let offset = '';
</script>

<style >.breadcrumb {
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
  content: "/";
  padding-right: 0.4rem;
}</style>
