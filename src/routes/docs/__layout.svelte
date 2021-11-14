<Container>
	<slot />
</Container>

<script lang="ts" context="module">
	import { Container } from '$lib';
</script>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<style lang="scss" global>
	@import '_code';
</style>
