---
file: pagination.md
title: Pagination
---

<script>
    import {Button, Hero, Pagination} from '$lib'

    let page
</script>

# {title}

<Hero offset="my-2" size="sm">
	<h2>Pagination</h2>
	<h5>Default</h5>
	<Pagination total={100} limit={10} bind:page />
	<p>Page: {page}</p>
	<h5>Rest = 3</h5>
	<Pagination total={100} limit={20} page={5} rest={3} />
	<h5>Rest = 4</h5>
	<Pagination total={1500} limit={10} page={9} rest={4} />
	<h5>Rest = 7</h5>
	<Pagination total={250} limit={30} page={13} rest={7} perpage={false} />
</Hero>
