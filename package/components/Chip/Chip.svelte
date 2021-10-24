<div {...$$restProps} class="chip {offset}">
	{#if initial || $$slots.avatar}
		<Avatar size="sm" {initial} {status} offset="ml--2 mr-2">
			<slot name="avatar" />
		</Avatar>
	{/if}
	<slot />
	{#if closable}
		<IconButton icon="cross" size="xs" shape="circle" />
	{/if}
</div>

<script  context="module">import Avatar from '../Avatar/Avatar.svelte';
import IconButton from '../Button/IconButton.svelte';
</script>

<script >export let offset = '';
export let initial = '';
export let status = false;
export let closable = false;
</script>

<style >.chip {
  align-items: center;
  background: #eef0f3;
  border-radius: 5rem;
  display: inline-flex;
  font-size: 90%;
  height: 1.2rem;
  line-height: 0.8rem;
  margin: 0.1rem;
  max-width: 320px;
  overflow: hidden;
  padding: 0.2rem 0.4rem;
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
}
.chip.active {
  background: #5755d9;
  color: #fff;
}
.chip .avatar {
  margin-left: -0.4rem;
  margin-right: 0.2rem;
}
.chip .btn-clear {
  border-radius: 50%;
  transform: scale(0.75);
}

:global(.spectre .chip .btn-link) {
  color: #303742 !important;
  margin-left: 0.2rem;
  margin-right: -0.2rem;
}</style>
