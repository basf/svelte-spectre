<div {...$$restProps} class:btn-group-block={block} class="btn-group">
	<slot />
</div>

<script>
	export let block = false;
</script>

<style global>
	@charset "UTF-8";
	:global(.spectre) :global(.btn) {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #fff;
		border: 0.05rem solid #5755d9;
		border-radius: 0.1rem;
		color: #5755d9;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		height: 1.8rem;
		line-height: 1.2rem;
		outline: none;
		padding: 0.25rem 0.4rem;
		text-align: center;
		text-decoration: none;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		vertical-align: middle;
		white-space: nowrap;
	}
	:global(.spectre) :global(.btn:focus) {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
	}
	:global(.spectre) :global(.btn:focus),
	:global(.spectre) :global(.btn:hover) {
		background: #f1f1fc;
		border-color: #4b48d6;
		text-decoration: none;
	}
	:global(.spectre) :global(.btn:active),
	:global(.spectre) :global(.btn.active) {
		background: #4b48d6;
		border-color: #3634d2;
		color: #fff;
		text-decoration: none;
	}
	:global(.spectre) :global(.btn:active.loading::after),
	:global(.spectre) :global(.btn.active.loading::after) {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) :global(.btn[disabled]),
	:global(.spectre) :global(.btn:disabled),
	:global(.spectre) :global(.btn.disabled) {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
	}
	:global(.spectre) :global(.btn.btn-primary) {
		background: #5755d9;
		border-color: #4b48d6;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-primary:focus),
	:global(.spectre) :global(.btn.btn-primary:hover) {
		background: #4240d4;
		border-color: #3634d2;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-primary:active),
	:global(.spectre) :global(.btn.btn-primary.active) {
		background: #3a38d2;
		border-color: #302ecd;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-primary.loading::after) {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) :global(.btn.btn-success) {
		background: #32b643;
		border-color: #2faa3f;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-success:focus) {
		box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);
	}
	:global(.spectre) :global(.btn.btn-success:focus),
	:global(.spectre) :global(.btn.btn-success:hover) {
		background: #30ae40;
		border-color: #2da23c;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-success:active),
	:global(.spectre) :global(.btn.btn-success.active) {
		background: #2a9a39;
		border-color: #278e34;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-success.loading::after) {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) :global(.btn.btn-error) {
		background: #e85600;
		border-color: #d95000;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-error:focus) {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
	}
	:global(.spectre) :global(.btn.btn-error:focus),
	:global(.spectre) :global(.btn.btn-error:hover) {
		background: #de5200;
		border-color: #cf4d00;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-error:active),
	:global(.spectre) :global(.btn.btn-error.active) {
		background: #c44900;
		border-color: #b54300;
		color: #fff;
	}
	:global(.spectre) :global(.btn.btn-error.loading::after) {
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	:global(.spectre) :global(.btn.btn-link) {
		background: transparent;
		border-color: transparent;
		color: #5755d9;
	}
	:global(.spectre) :global(.btn.btn-link:focus),
	:global(.spectre) :global(.btn.btn-link:hover),
	:global(.spectre) :global(.btn.btn-link:active),
	:global(.spectre) :global(.btn.btn-link.active) {
		color: #302ecd;
	}
	:global(.spectre) :global(.btn.btn-sm) {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 0.3rem;
	}
	:global(.spectre) :global(.btn.btn-lg) {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 0.6rem;
	}
	:global(.spectre) :global(.btn.btn-block) {
		display: block;
		width: 100%;
	}
	:global(.spectre) :global(.btn.btn-action) {
		width: 1.8rem;
		padding-left: 0;
		padding-right: 0;
	}
	:global(.spectre) :global(.btn.btn-action.btn-sm) {
		width: 1.4rem;
	}
	:global(.spectre) :global(.btn.btn-action.btn-lg) {
		width: 2rem;
	}
	:global(.spectre) :global(.btn.btn-clear) {
		background: transparent;
		border: 0;
		color: currentColor;
		height: 1rem;
		line-height: 0.8rem;
		margin-left: 0.2rem;
		margin-right: -2px;
		opacity: 1;
		padding: 0.1rem;
		text-decoration: none;
		width: 1rem;
	}
	:global(.spectre) :global(.btn.btn-clear:focus),
	:global(.spectre) :global(.btn.btn-clear:hover) {
		background: rgba(247, 248, 249, 0.5);
		opacity: 0.95;
	}
	:global(.spectre) :global(.btn.btn-clear::before) {
		content: '✕';
	}
	:global(.spectre) :global(.btn-group) {
		display: inline-flex;
		flex-wrap: wrap;
	}
	:global(.spectre) :global(.btn-group) :global(.btn) {
		flex: 1 0 auto;
	}
	:global(.spectre) :global(.btn-group) :global(.btn:first-child:not(:last-child)) {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
	:global(.spectre) :global(.btn-group) :global(.btn:not(:first-child):not(:last-child)) {
		border-radius: 0;
		margin-left: -0.05rem;
	}
	:global(.spectre) :global(.btn-group) :global(.btn:last-child:not(:first-child)) {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		margin-left: -0.05rem;
	}
	:global(.spectre) :global(.btn-group) :global(.btn:focus),
	:global(.spectre) :global(.btn-group) :global(.btn:hover),
	:global(.spectre) :global(.btn-group) :global(.btn:active),
	:global(.spectre) :global(.btn-group) :global(.btn.active) {
		z-index: 1;
	}
	:global(.spectre) :global(.btn-group.btn-group-block) {
		display: flex;
	}
	:global(.spectre) :global(.btn-group.btn-group-block) :global(.btn) {
		flex: 1 0 0;
	}
</style>
