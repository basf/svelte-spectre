<div
	{...$$restProps}
	class:has-success={validity === 'success'}
	class:has-error={validity === 'error'}
	class="form-group"
>
	<slot />
</div>

<script context="module"></script>

<script>
	export let horizontal = true;
	export let validity = false;
</script>

<style>
	:global(.form-group:not(:last-child)) {
		margin-bottom: 0.4rem;
	}
	:global(fieldset) {
		margin-bottom: 0.8rem;
	}
	:global(legend) {
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.8rem;
	}
	:global(.form-label) {
		display: block;
		line-height: 1.2rem;
		padding: 0.3rem 0;
	}
	:global(.form-label.label-sm) {
		font-size: 0.7rem;
		padding: 0.1rem 0;
	}
	:global(.form-label.label-lg) {
		font-size: 0.9rem;
		padding: 0.4rem 0;
	}
	:global(.form-input) {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #fff;
		background-image: none;
		border: 0.05rem solid #bcc3ce;
		border-radius: 0.1rem;
		color: #3b4351;
		display: block;
		font-size: 0.8rem;
		height: 1.8rem;
		line-height: 1.2rem;
		max-width: 100%;
		outline: none;
		padding: 0.25rem 0.4rem;
		position: relative;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
		width: 100%;
	}
	:global(.form-input:focus) {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	:global(.form-input::-moz-placeholder) {
		color: #bcc3ce;
	}
	:global(.form-input:-ms-input-placeholder) {
		color: #bcc3ce;
	}
	:global(.form-input::placeholder) {
		color: #bcc3ce;
	}
	:global(.form-input.input-sm) {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 0.3rem;
	}
	:global(.form-input.input-lg) {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 0.6rem;
	}
	:global(.form-input.input-inline) {
		display: inline-block;
		vertical-align: middle;
		width: auto;
	}
	:global(.form-input[type='file']) {
		height: auto;
	}
	:global(textarea.form-input),
	:global(textarea.form-input.input-lg),
	:global(textarea.form-input.input-sm) {
		height: auto;
	}
	:global(.form-input-hint) {
		color: #bcc3ce;
		font-size: 0.7rem;
		margin-top: 0.2rem;
	}
	.has-success :global(.form-input-hint),
	.is-success + :global(.form-input-hint) {
		color: #32b643;
	}
	.has-error :global(.form-input-hint),
	.is-error + :global(.form-input-hint) {
		color: #e85600;
	}
	:global(.form-select) {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: 0.05rem solid #bcc3ce;
		border-radius: 0.1rem;
		color: inherit;
		font-size: 0.8rem;
		height: 1.8rem;
		line-height: 1.2rem;
		outline: none;
		padding: 0.25rem 0.4rem;
		vertical-align: middle;
		width: 100%;
		background: #fff;
	}
	:global(.form-select:focus) {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	:global(.form-select::-ms-expand) {
		display: none;
	}
	:global(.form-select.select-sm) {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 1.1rem 0.05rem 0.3rem;
	}
	:global(.form-select.select-lg) {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 1.4rem 0.35rem 0.6rem;
	}
	:global(.form-select[size]),
	:global(.form-select[multiple]) {
		height: auto;
		padding: 0.25rem 0.4rem;
	}
	:global(.form-select[size]) :global(option),
	:global(.form-select[multiple]) :global(option) {
		padding: 0.1rem 0.2rem;
	}
	:global(.form-select:not([multiple]):not([size])) {
		background: #fff
			url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E")
			no-repeat right 0.35rem center/0.4rem 0.5rem;
		padding-right: 1.2rem;
	}
	:global(.has-icon-left),
	:global(.has-icon-right) {
		position: relative;
	}
	:global(.has-icon-left) :global(.form-icon),
	:global(.has-icon-right) :global(.form-icon) {
		height: 0.8rem;
		margin: 0 0.25rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 0.8rem;
		z-index: 2;
	}
	:global(.has-icon-left) :global(.form-icon) {
		left: 0.05rem;
	}
	:global(.has-icon-left) :global(.form-input) {
		padding-left: 1.3rem;
	}
	:global(.has-icon-right) :global(.form-icon) {
		right: 0.05rem;
	}
	:global(.has-icon-right) :global(.form-input) {
		padding-right: 1.3rem;
	}
	:global(.form-checkbox),
	:global(.form-radio),
	:global(.form-switch) {
		display: block;
		line-height: 1.2rem;
		margin: 0.2rem 0;
		min-height: 1.4rem;
		padding: 0.1rem 0.4rem 0.1rem 1.2rem;
		position: relative;
	}
	:global(.form-checkbox) :global(input),
	:global(.form-radio) :global(input),
	:global(.form-switch) :global(input) {
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		position: absolute;
		width: 1px;
	}
	:global(.form-checkbox) :global(input:focus) + :global(.form-icon),
	:global(.form-radio) :global(input:focus) + :global(.form-icon),
	:global(.form-switch) :global(input:focus) + :global(.form-icon) {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	:global(.form-checkbox) :global(input:checked) + :global(.form-icon),
	:global(.form-radio) :global(input:checked) + :global(.form-icon),
	:global(.form-switch) :global(input:checked) + :global(.form-icon) {
		background: #5755d9;
		border-color: #5755d9;
	}
	:global(.form-checkbox) :global(.form-icon),
	:global(.form-radio) :global(.form-icon),
	:global(.form-switch) :global(.form-icon) {
		border: 0.05rem solid #bcc3ce;
		cursor: pointer;
		display: inline-block;
		position: absolute;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
	}
	:global(.form-checkbox.input-sm),
	:global(.form-radio.input-sm),
	:global(.form-switch.input-sm) {
		font-size: 0.7rem;
		margin: 0;
	}
	:global(.form-checkbox.input-lg),
	:global(.form-radio.input-lg),
	:global(.form-switch.input-lg) {
		font-size: 0.9rem;
		margin: 0.3rem 0;
	}
	:global(.form-checkbox) :global(.form-icon),
	:global(.form-radio) :global(.form-icon) {
		background: #fff;
		height: 0.8rem;
		left: 0;
		top: 0.3rem;
		width: 0.8rem;
	}
	:global(.form-checkbox) :global(input:active) + :global(.form-icon),
	:global(.form-radio) :global(input:active) + :global(.form-icon) {
		background: #eef0f3;
	}
	:global(.form-checkbox) :global(.form-icon) {
		border-radius: 0.1rem;
	}
	:global(.form-checkbox) :global(input:checked) + :global(.form-icon::before) {
		background-clip: padding-box;
		border: 0.1rem solid #fff;
		border-left-width: 0;
		border-top-width: 0;
		content: '';
		height: 9px;
		left: 50%;
		margin-left: -3px;
		margin-top: -6px;
		position: absolute;
		top: 50%;
		transform: rotate(45deg);
		width: 6px;
	}
	:global(.form-checkbox) :global(input:indeterminate) + :global(.form-icon) {
		background: #5755d9;
		border-color: #5755d9;
	}
	:global(.form-checkbox) :global(input:indeterminate) + :global(.form-icon::before) {
		background: #fff;
		content: '';
		height: 2px;
		left: 50%;
		margin-left: -5px;
		margin-top: -1px;
		position: absolute;
		top: 50%;
		width: 10px;
	}
	:global(.form-radio) :global(.form-icon) {
		border-radius: 50%;
	}
	:global(.form-radio) :global(input:checked) + :global(.form-icon::before) {
		background: #fff;
		border-radius: 50%;
		content: '';
		height: 6px;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 6px;
	}
	:global(.form-switch) {
		padding-left: 2rem;
	}
	:global(.form-switch) :global(.form-icon) {
		background: #bcc3ce;
		background-clip: padding-box;
		border-radius: 0.45rem;
		height: 0.9rem;
		left: 0;
		top: 0.25rem;
		width: 1.6rem;
	}
	:global(.form-switch) :global(.form-icon::before) {
		background: #fff;
		border-radius: 50%;
		content: '';
		display: block;
		height: 0.8rem;
		left: 0;
		position: absolute;
		top: 0;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s, left 0.2s;
		width: 0.8rem;
	}
	:global(.form-switch) :global(input:checked) + :global(.form-icon::before) {
		left: 14px;
	}
	:global(.form-switch) :global(input:active) + :global(.form-icon::before) {
		background: #f7f8f9;
	}
	:global(.input-group) {
		display: flex;
	}
	:global(.input-group) :global(.input-group-addon) {
		background: #f7f8f9;
		border: 0.05rem solid #bcc3ce;
		border-radius: 0.1rem;
		line-height: 1.2rem;
		padding: 0.25rem 0.4rem;
		white-space: nowrap;
	}
	:global(.input-group) :global(.input-group-addon.addon-sm) {
		font-size: 0.7rem;
		padding: 0.05rem 0.3rem;
	}
	:global(.input-group) :global(.input-group-addon.addon-lg) {
		font-size: 0.9rem;
		padding: 0.35rem 0.6rem;
	}
	:global(.input-group) :global(.form-input),
	:global(.input-group) :global(.form-select) {
		flex: 1 1 auto;
		width: 1%;
	}
	:global(.input-group) :global(.input-group-btn) {
		z-index: 1;
	}
	:global(.input-group) :global(.form-input:first-child:not(:last-child)),
	:global(.input-group) :global(.form-select:first-child:not(:last-child)),
	:global(.input-group) :global(.input-group-addon:first-child:not(:last-child)),
	:global(.input-group) :global(.input-group-btn:first-child:not(:last-child)) {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
	:global(.input-group) :global(.form-input:not(:first-child):not(:last-child)),
	:global(.input-group) :global(.form-select:not(:first-child):not(:last-child)),
	:global(.input-group) :global(.input-group-addon:not(:first-child):not(:last-child)),
	:global(.input-group) :global(.input-group-btn:not(:first-child):not(:last-child)) {
		border-radius: 0;
		margin-left: -0.05rem;
	}
	:global(.input-group) :global(.form-input:last-child:not(:first-child)),
	:global(.input-group) :global(.form-select:last-child:not(:first-child)),
	:global(.input-group) :global(.input-group-addon:last-child:not(:first-child)),
	:global(.input-group) :global(.input-group-btn:last-child:not(:first-child)) {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		margin-left: -0.05rem;
	}
	:global(.input-group) :global(.form-input:focus),
	:global(.input-group) :global(.form-select:focus),
	:global(.input-group) :global(.input-group-addon:focus),
	:global(.input-group) :global(.input-group-btn:focus) {
		z-index: 2;
	}
	:global(.input-group) :global(.form-select) {
		width: auto;
	}
	:global(.input-group.input-inline) {
		display: inline-flex;
	}
	.has-success :global(.form-input),
	:global(.form-input.is-success),
	.has-success :global(.form-select),
	:global(.form-select.is-success) {
		background: #f9fdfa;
		border-color: #32b643;
	}
	.has-success :global(.form-input:focus),
	:global(.form-input.is-success:focus),
	.has-success :global(.form-select:focus),
	:global(.form-select.is-success:focus) {
		box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);
	}
	.has-error :global(.form-input),
	:global(.form-input.is-error),
	.has-error :global(.form-select),
	:global(.form-select.is-error) {
		background: #fffaf7;
		border-color: #e85600;
	}
	.has-error :global(.form-input:focus),
	:global(.form-input.is-error:focus),
	.has-error :global(.form-select:focus),
	:global(.form-select.is-error:focus) {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
	}
	.has-error :global(.form-checkbox) :global(.form-icon),
	:global(.form-checkbox.is-error) :global(.form-icon),
	.has-error :global(.form-radio) :global(.form-icon),
	:global(.form-radio.is-error) :global(.form-icon),
	.has-error :global(.form-switch) :global(.form-icon),
	:global(.form-switch.is-error) :global(.form-icon) {
		border-color: #e85600;
	}
	.has-error :global(.form-checkbox) :global(input:checked) + :global(.form-icon),
	:global(.form-checkbox.is-error) :global(input:checked) + :global(.form-icon),
	.has-error :global(.form-radio) :global(input:checked) + :global(.form-icon),
	:global(.form-radio.is-error) :global(input:checked) + :global(.form-icon),
	.has-error :global(.form-switch) :global(input:checked) + :global(.form-icon),
	:global(.form-switch.is-error) :global(input:checked) + :global(.form-icon) {
		background: #e85600;
		border-color: #e85600;
	}
	.has-error :global(.form-checkbox) :global(input:focus) + :global(.form-icon),
	:global(.form-checkbox.is-error) :global(input:focus) + :global(.form-icon),
	.has-error :global(.form-radio) :global(input:focus) + :global(.form-icon),
	:global(.form-radio.is-error) :global(input:focus) + :global(.form-icon),
	.has-error :global(.form-switch) :global(input:focus) + :global(.form-icon),
	:global(.form-switch.is-error) :global(input:focus) + :global(.form-icon) {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		border-color: #e85600;
	}
	.has-error :global(.form-checkbox) :global(input:indeterminate) + :global(.form-icon),
	:global(.form-checkbox.is-error) :global(input:indeterminate) + :global(.form-icon) {
		background: #e85600;
		border-color: #e85600;
	}
	:global(.form-input:not(:-moz-placeholder-shown):invalid) {
		border-color: #e85600;
	}
	:global(.form-input:not(:-ms-input-placeholder):invalid) {
		border-color: #e85600;
	}
	:global(.form-input:not(:placeholder-shown):invalid) {
		border-color: #e85600;
	}
	:global(.form-input:not(:-moz-placeholder-shown):invalid:focus) {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		background: #fffaf7;
	}
	:global(.form-input:not(:-ms-input-placeholder):invalid:focus) {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		background: #fffaf7;
	}
	:global(.form-input:not(:placeholder-shown):invalid:focus) {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		background: #fffaf7;
	}
	:global(.form-input:not(:-moz-placeholder-shown):invalid) + :global(.form-input-hint) {
		color: #e85600;
	}
	:global(.form-input:not(:-ms-input-placeholder):invalid) + :global(.form-input-hint) {
		color: #e85600;
	}
	:global(.form-input:not(:placeholder-shown):invalid) + :global(.form-input-hint) {
		color: #e85600;
	}
	:global(.form-input:disabled),
	:global(.form-input.disabled),
	:global(.form-select:disabled),
	:global(.form-select.disabled) {
		background-color: #eef0f3;
		cursor: not-allowed;
		opacity: 0.5;
	}
	:global(.form-input[readonly]) {
		background-color: #f7f8f9;
	}
	:global(input:disabled) + :global(.form-icon),
	:global(input.disabled) + :global(.form-icon) {
		background: #eef0f3;
		cursor: not-allowed;
		opacity: 0.5;
	}
	:global(.form-switch) :global(input:disabled) + :global(.form-icon::before),
	:global(.form-switch) :global(input.disabled) + :global(.form-icon::before) {
		background: #fff;
	}
	:global(.form-horizontal) {
		padding: 0.4rem 0;
	}
	:global(.form-horizontal) :global(.form-group) {
		display: flex;
		flex-wrap: wrap;
	}
	:global(.form-inline) {
		display: inline-block;
	}
</style>
