<label
	{...$$restProps}
	id="checkbox-{fid}"
	class="form-checkbox is-{validity}"
	class:form-inline={inline}
>
	<input bind:checked={value} type="checkbox" {indeterminate} />
	<i class="form-icon" />
	<slot />
</label>

<script context="module">
	import uuid from '../../helpers/uuid';
</script>

<script>
	export let value = false;
	export let indeterminate = false;
	export let inline = false;
	export let validity = false;
	const fid = uuid();
</script>

<style>
	.form-group:not(:last-child) {
		margin-bottom: 0.4rem;
	}

	fieldset {
		margin-bottom: 0.8rem;
	}

	legend {
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.8rem;
	}

	.form-label {
		display: block;
		line-height: 1.2rem;
		padding: 0.3rem 0;
	}
	.form-label.label-sm {
		font-size: 0.7rem;
		padding: 0.1rem 0;
	}
	.form-label.label-lg {
		font-size: 0.9rem;
		padding: 0.4rem 0;
	}

	.form-input {
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
	.form-input:focus {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	.form-input::-moz-placeholder {
		color: #bcc3ce;
	}
	.form-input:-ms-input-placeholder {
		color: #bcc3ce;
	}
	.form-input::placeholder {
		color: #bcc3ce;
	}
	.form-input.input-sm {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 0.3rem;
	}
	.form-input.input-lg {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 0.6rem;
	}
	.form-input.input-inline {
		display: inline-block;
		vertical-align: middle;
		width: auto;
	}
	.form-input[type='file'] {
		height: auto;
	}

	textarea.form-input,
	textarea.form-input.input-lg,
	textarea.form-input.input-sm {
		height: auto;
	}

	.form-input-hint {
		color: #bcc3ce;
		font-size: 0.7rem;
		margin-top: 0.2rem;
	}
	.has-success .form-input-hint,
	.is-success + .form-input-hint {
		color: #32b643;
	}
	.has-error .form-input-hint,
	.is-error + .form-input-hint {
		color: #e85600;
	}

	.form-select {
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
	.form-select:focus {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	.form-select::-ms-expand {
		display: none;
	}
	.form-select.select-sm {
		font-size: 0.7rem;
		height: 1.4rem;
		padding: 0.05rem 1.1rem 0.05rem 0.3rem;
	}
	.form-select.select-lg {
		font-size: 0.9rem;
		height: 2rem;
		padding: 0.35rem 1.4rem 0.35rem 0.6rem;
	}
	.form-select[size],
	.form-select[multiple] {
		height: auto;
		padding: 0.25rem 0.4rem;
	}
	.form-select[size] option,
	.form-select[multiple] option {
		padding: 0.1rem 0.2rem;
	}
	.form-select:not([multiple]):not([size]) {
		background: #fff
			url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E")
			no-repeat right 0.35rem center/0.4rem 0.5rem;
		padding-right: 1.2rem;
	}

	.has-icon-left,
	.has-icon-right {
		position: relative;
	}
	.has-icon-left .form-icon,
	.has-icon-right .form-icon {
		height: 0.8rem;
		margin: 0 0.25rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 0.8rem;
		z-index: 2;
	}

	.has-icon-left .form-icon {
		left: 0.05rem;
	}
	.has-icon-left .form-input {
		padding-left: 1.3rem;
	}

	.has-icon-right .form-icon {
		right: 0.05rem;
	}
	.has-icon-right .form-input {
		padding-right: 1.3rem;
	}

	.form-checkbox,
	.form-radio,
	.form-switch {
		display: block;
		line-height: 1.2rem;
		margin: 0.2rem 0;
		min-height: 1.4rem;
		padding: 0.1rem 0.4rem 0.1rem 1.2rem;
		position: relative;
	}
	.form-checkbox input,
	.form-radio input,
	.form-switch input {
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		position: absolute;
		width: 1px;
	}
	.form-checkbox input:focus + .form-icon,
	.form-radio input:focus + .form-icon,
	.form-switch input:focus + .form-icon {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	.form-checkbox input:checked + .form-icon,
	.form-radio input:checked + .form-icon,
	.form-switch input:checked + .form-icon {
		background: #5755d9;
		border-color: #5755d9;
	}
	.form-checkbox .form-icon,
	.form-radio .form-icon,
	.form-switch .form-icon {
		border: 0.05rem solid #bcc3ce;
		cursor: pointer;
		display: inline-block;
		position: absolute;
		transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
	}
	.form-checkbox.input-sm,
	.form-radio.input-sm,
	.form-switch.input-sm {
		font-size: 0.7rem;
		margin: 0;
	}
	.form-checkbox.input-lg,
	.form-radio.input-lg,
	.form-switch.input-lg {
		font-size: 0.9rem;
		margin: 0.3rem 0;
	}

	.form-checkbox .form-icon,
	.form-radio .form-icon {
		background: #fff;
		height: 0.8rem;
		left: 0;
		top: 0.3rem;
		width: 0.8rem;
	}
	.form-checkbox input:active + .form-icon,
	.form-radio input:active + .form-icon {
		background: #eef0f3;
	}

	.form-checkbox .form-icon {
		border-radius: 0.1rem;
	}
	.form-checkbox input:checked + .form-icon::before {
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
	.form-checkbox input:indeterminate + .form-icon {
		background: #5755d9;
		border-color: #5755d9;
	}
	.form-checkbox input:indeterminate + .form-icon::before {
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

	.form-radio .form-icon {
		border-radius: 50%;
	}
	.form-radio input:checked + .form-icon::before {
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

	.form-switch {
		padding-left: 2rem;
	}
	.form-switch .form-icon {
		background: #bcc3ce;
		background-clip: padding-box;
		border-radius: 0.45rem;
		height: 0.9rem;
		left: 0;
		top: 0.25rem;
		width: 1.6rem;
	}
	.form-switch .form-icon::before {
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
	.form-switch input:checked + .form-icon::before {
		left: 14px;
	}
	.form-switch input:active + .form-icon::before {
		background: #f7f8f9;
	}

	.input-group {
		display: flex;
	}
	.input-group .input-group-addon {
		background: #f7f8f9;
		border: 0.05rem solid #bcc3ce;
		border-radius: 0.1rem;
		line-height: 1.2rem;
		padding: 0.25rem 0.4rem;
		white-space: nowrap;
	}
	.input-group .input-group-addon.addon-sm {
		font-size: 0.7rem;
		padding: 0.05rem 0.3rem;
	}
	.input-group .input-group-addon.addon-lg {
		font-size: 0.9rem;
		padding: 0.35rem 0.6rem;
	}
	.input-group .form-input,
	.input-group .form-select {
		flex: 1 1 auto;
		width: 1%;
	}
	.input-group .input-group-btn {
		z-index: 1;
	}
	.input-group .form-input:first-child:not(:last-child),
	.input-group .form-select:first-child:not(:last-child),
	.input-group .input-group-addon:first-child:not(:last-child),
	.input-group .input-group-btn:first-child:not(:last-child) {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
	.input-group .form-input:not(:first-child):not(:last-child),
	.input-group .form-select:not(:first-child):not(:last-child),
	.input-group .input-group-addon:not(:first-child):not(:last-child),
	.input-group .input-group-btn:not(:first-child):not(:last-child) {
		border-radius: 0;
		margin-left: -0.05rem;
	}
	.input-group .form-input:last-child:not(:first-child),
	.input-group .form-select:last-child:not(:first-child),
	.input-group .input-group-addon:last-child:not(:first-child),
	.input-group .input-group-btn:last-child:not(:first-child) {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		margin-left: -0.05rem;
	}
	.input-group .form-input:focus,
	.input-group .form-select:focus,
	.input-group .input-group-addon:focus,
	.input-group .input-group-btn:focus {
		z-index: 2;
	}
	.input-group .form-select {
		width: auto;
	}
	.input-group.input-inline {
		display: inline-flex;
	}

	.has-success .form-input,
	.form-input.is-success,
	.has-success .form-select,
	.form-select.is-success {
		background: #f9fdfa;
		border-color: #32b643;
	}
	.has-success .form-input:focus,
	.form-input.is-success:focus,
	.has-success .form-select:focus,
	.form-select.is-success:focus {
		box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);
	}
	.has-error .form-input,
	.form-input.is-error,
	.has-error .form-select,
	.form-select.is-error {
		background: #fffaf7;
		border-color: #e85600;
	}
	.has-error .form-input:focus,
	.form-input.is-error:focus,
	.has-error .form-select:focus,
	.form-select.is-error:focus {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
	}

	.has-error .form-checkbox .form-icon,
	.form-checkbox.is-error .form-icon,
	.has-error .form-radio .form-icon,
	.form-radio.is-error .form-icon,
	.has-error .form-switch .form-icon,
	.form-switch.is-error .form-icon {
		border-color: #e85600;
	}
	.has-error .form-checkbox input:checked + .form-icon,
	.form-checkbox.is-error input:checked + .form-icon,
	.has-error .form-radio input:checked + .form-icon,
	.form-radio.is-error input:checked + .form-icon,
	.has-error .form-switch input:checked + .form-icon,
	.form-switch.is-error input:checked + .form-icon {
		background: #e85600;
		border-color: #e85600;
	}
	.has-error .form-checkbox input:focus + .form-icon,
	.form-checkbox.is-error input:focus + .form-icon,
	.has-error .form-radio input:focus + .form-icon,
	.form-radio.is-error input:focus + .form-icon,
	.has-error .form-switch input:focus + .form-icon,
	.form-switch.is-error input:focus + .form-icon {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		border-color: #e85600;
	}

	.has-error .form-checkbox input:indeterminate + .form-icon,
	.form-checkbox.is-error input:indeterminate + .form-icon {
		background: #e85600;
		border-color: #e85600;
	}

	.form-input:not(:-moz-placeholder-shown):invalid {
		border-color: #e85600;
	}

	.form-input:not(:-ms-input-placeholder):invalid {
		border-color: #e85600;
	}

	.form-input:not(:placeholder-shown):invalid {
		border-color: #e85600;
	}
	.form-input:not(:-moz-placeholder-shown):invalid:focus {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		background: #fffaf7;
	}
	.form-input:not(:-ms-input-placeholder):invalid:focus {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		background: #fffaf7;
	}
	.form-input:not(:placeholder-shown):invalid:focus {
		box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);
		background: #fffaf7;
	}
	.form-input:not(:-moz-placeholder-shown):invalid + .form-input-hint {
		color: #e85600;
	}
	.form-input:not(:-ms-input-placeholder):invalid + .form-input-hint {
		color: #e85600;
	}
	.form-input:not(:placeholder-shown):invalid + .form-input-hint {
		color: #e85600;
	}

	.form-input:disabled,
	.form-input.disabled,
	.form-select:disabled,
	.form-select.disabled {
		background-color: #eef0f3;
		cursor: not-allowed;
		opacity: 0.5;
	}

	.form-input[readonly] {
		background-color: #f7f8f9;
	}

	input:disabled + .form-icon,
	input.disabled + .form-icon {
		background: #eef0f3;
		cursor: not-allowed;
		opacity: 0.5;
	}

	.form-switch input:disabled + .form-icon::before,
	.form-switch input.disabled + .form-icon::before {
		background: #fff;
	}

	.form-horizontal {
		padding: 0.4rem 0;
	}
	.form-horizontal .form-group {
		display: flex;
		flex-wrap: wrap;
	}

	.form-inline {
		display: inline-block;
	}
</style>
