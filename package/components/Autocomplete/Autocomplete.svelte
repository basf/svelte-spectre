<div {...$$restProps} class="form-autocomplete">
	<div class="form-autocomplete-input form-input" class:is-focused={focused}>
		{#each selected as chip, i}
			<Chip closable on:close={() => removeSelected(i)}>{chip}</Chip>
		{/each}

		<div
			class="form-input-icon-wrap"
			class:has-icon-right={value.length || selected.length}
			data-active={value.length ? prompt : ''}
		>
			<input
				class="form-input"
				type="text"
				tabindex="0"
				{placeholder}
				bind:value
				on:focus={() => (focused = true)}
				on:keydown={selectSuggestion}
				on:click|stopPropagation
			/>
			{#if value.length}
				<i class="form-icon loading" />
			{:else if selected.length}
				<button
					class="btn btn-clear mr--1"
					aria-label="Close"
					role="button"
					on:click={() => (selected = [])}
				/>
			{/if}
		</div>
	</div>

	{#if focused && (!predictable || value.length)}
		<ul class="menu" tabindex="1">
			{#if creatable && !suggested.length}
				<li class="divider" data-content="Add:" />
				<li class="menu-item">
					<a
						href="#_"
						class:active={value.length}
						on:click|preventDefault={() => confirmSuggestion(value)}
						on:mouseover|preventDefault={() => (active = 0)}
						>{@html markSuggestion(value, value)}
					</a>
				</li>
			{:else if suggested.length}
				{#each groups as group, g}
					<li style="order: {ordering(group, g)}" class="divider" data-content={group} />
				{/each}
				{#each suggested as item, i}
					<li style="order: {i}" class="menu-item" tabindex="1">
						<a
							href="#_"
							class:active={active === i}
							on:click|preventDefault={() => confirmSuggestion(item)}
							on:mouseover|preventDefault={() => (active = i)}
							>{@html markSuggestion(item, value)}
						</a>
						{#if created.includes(item)}
							<div class="menu-badge">
								<IconButton
									icon="delete"
									size="sm"
									on:click={() => deleteCreated(item)}
								/>
							</div>
						{/if}
					</li>
				{/each}
			{/if}
		</ul>
	{/if}
</div>

<svelte:body on:click={() => (focused = false)} />

<script context="module">
	import Chip from '../Chip/Chip.svelte';
	import IconButton from '../Button/IconButton.svelte';
</script>

<script>
	export let value = '';
	export let placeholder = 'typing here';
	export let predefined = [];
	export let suggested = [];
	export let selected = [];
	export let created = [];
	export let creatable = false;
	export let predictable = false;
	export let groups = [];
	let focused = false,
		active = 0,
		prompt = '',
		orders = [0];
	$: if (focused) {
		suggested = calcSuggestion(predefined, selected, value);
		prompt = calcPrompt(suggested, value, active);
		groups = suggested.every((s) => groups.some((g) => s.includes(g)))
			? groups.filter((g) => suggested.some((s) => s.includes(g)))
			: [...groups, 'other'];
		// : suggested.some((s) => created.includes(s))
		// ? [...groups, 'created']
		console.log(
			// predefined,
			suggested
				.concat(groups)
				.sort((f, s) => (f > s ? 1 : -1))
				.reverse()
			// created,
			// groups
		);
		// console.dir(suggested.sort((f, s) => (groups.some((g) => f.includes(g)) ? -1 : 1)));
	}
	function ordering(group, g) {
		if (orders.length <= groups.length) {
			const length = suggested.filter((s) => s.includes(group)).length;
			// console.log(length);
			orders.push(length);
		}
		const orderBy = orders.map(
			(
				(s) => (a) =>
					(s += a)
			)(0)
		);
		return orderBy[g];
	}
	function deleteCreated(item) {
		predefined = predefined.filter((p) => p !== item);
		suggested = suggested.filter((s) => s !== item);
		created = created.filter((c) => c !== item);
	}
	function calcSuggestion(predefined, selected, value) {
		orders = [0];
		return predefined
			.filter((p) => stringIndex(p, value) >= 0 && !selected.some((s) => s === p))
			.sort((f, s) => (groups.some((g) => f.includes(g)) ? -1 : 1 || 0));
		// .map((s) => {
		// 	if (groups.some((g) => g.includes(s))) return s;
		// });
		// .sort((f, s) => (groups.some((g) => g.includes(f)) ? 1 : -1));
		// .sort((f, s) => (stringIndex(f, value) === 0 ? -1 : 1));
	}
	function calcPrompt(suggested, value, active) {
		return stringIndex(suggested[active], value) === 0 ? suggested[active] : '';
	}
	function stringIndex(item, value) {
		const regexp = new RegExp(value, 'i');
		return item === null || item === void 0 ? void 0 : item.search(regexp);
	}
	function stringMatch(item, value) {
		const regex = new RegExp(value, 'i');
		return item === null || item === void 0 ? void 0 : item.match(regex).join('');
	}
	function markSuggestion(item, value) {
		const match = stringMatch(item, value);
		return item.replace(match, `<mark>${match}</mark>`);
	}
	function selectSuggestion(e) {
		switch (e.key) {
			case 'Backspace':
				if (!value)
					e.metaKey || e.ctrlKey ? (selected = []) : removeSelected(selected.length - 1);
				break;
			case 'Tab':
			case 'Enter':
				e.preventDefault();
				(suggested.length || value) && confirmSuggestion(suggested[active] || value);
				break;
			case 'ArrowRight':
				e.preventDefault();
				suggested.length && confirmSuggestion(suggested[active]);
				break;
			case 'ArrowDown':
				e.preventDefault();
				active < suggested.length - 1 ? active++ : (active = 0);
				break;
			case 'ArrowUp':
				e.preventDefault();
				active > 0 ? active-- : (active = suggested.length - 1);
				break;
			case 'Escape':
				e.preventDefault();
				value = '';
				active = 0;
				focused = false;
				e.target.blur();
				break;
			default:
				null;
				break;
		}
	}
	function confirmSuggestion(item) {
		selected = [...selected, item];
		created =
			!created.includes(item) && !suggested.includes(item) ? [...created, item] : created;
		predefined = created.some((c) => !predefined.includes(c))
			? [...predefined, item]
			: predefined;
		// groups = created.length ? [...groups, 'Created'] : groups;
		suggested = [];
		orders = [0];
		value = '';
		active = 0;
	}
	function removeSelected(index) {
		selected = selected.filter((s, i) => i !== index);
	}
</script>

<style>
	@charset "UTF-8";
	.form-autocomplete {
		position: relative;
	}
	.form-autocomplete .form-autocomplete-input {
		align-content: flex-start;
		display: flex;
		flex-wrap: wrap;
		height: auto;
		min-height: 1.6rem;
		padding: 0.1rem;
	}
	.form-autocomplete .form-autocomplete-input.is-focused {
		box-shadow: 0 0 0 0.1rem rgba(87, 85, 217, 0.2);
		border-color: #5755d9;
	}
	.form-autocomplete .form-autocomplete-input .form-input {
		border-color: transparent;
		box-shadow: none;
		display: inline-block;
		flex: 1 0 auto;
		height: 1.2rem;
		line-height: 0.8rem;
		margin: 0.1rem;
		width: auto;
	}
	.form-autocomplete .menu {
		left: 0;
		position: absolute;
		top: 100%;
		width: 100%;
	}
	.form-autocomplete.autocomplete-oneline .form-autocomplete-input {
		flex-wrap: nowrap;
		overflow-x: auto;
	}
	.form-autocomplete.autocomplete-oneline .chip {
		flex: 1 0 auto;
	}

	.menu {
		box-shadow: 0 0.05rem 0.2rem rgba(48, 55, 66, 0.3);
		background: #fff;
		border-radius: 0.1rem;
		list-style: none;
		margin: 0;
		min-width: 180px;
		padding: 0.4rem;
		transform: translateY(0.2rem);
		z-index: 300;
	}
	.menu.menu-nav {
		background: transparent;
		box-shadow: none;
	}
	.menu .menu-item {
		margin-top: 0;
		padding: 0 0.4rem;
		position: relative;
		text-decoration: none;
	}
	.menu .menu-item > a {
		border-radius: 0.1rem;
		color: inherit;
		display: block;
		margin: 0 -0.4rem;
		padding: 0.2rem 0.4rem;
		text-decoration: none;
	}
	.menu .menu-item > a:focus,
	.menu .menu-item > a:hover {
		background: #f1f1fc;
		color: #5755d9;
	}
	.menu .menu-item > a:active,
	.menu .menu-item > a.active {
		background: #f1f1fc;
		color: #5755d9;
	}
	.menu .menu-item .form-checkbox,
	.menu .menu-item .form-radio,
	.menu .menu-item .form-switch {
		margin: 0.1rem 0;
	}
	.menu .menu-item + .menu-item {
		margin-top: 0.2rem;
	}
	.menu .menu-badge {
		align-items: center;
		display: flex;
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
	}
	.menu .menu-badge .label {
		margin-right: 0.4rem;
	}

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

	:global(.spectre) .form-autocomplete .form-autocomplete-input {
		align-items: center;
		padding: 0 0.1rem;
	}
	:global(.spectre) .form-autocomplete .form-autocomplete-input .form-input-icon-wrap {
		flex: auto;
	}
	:global(.spectre)
		.form-autocomplete
		.form-autocomplete-input
		.form-input-icon-wrap
		.form-input {
		height: auto;
		line-height: 1.2rem;
		margin: 0;
		width: 100%;
		background: transparent;
	}
	:global(.spectre)
		.form-autocomplete
		.form-autocomplete-input
		.form-input-icon-wrap:is([data-active])::before {
		content: attr(data-active);
		position: absolute;
		padding: 0.25rem 0.4rem;
		color: #bcc3ce;
		border: 0.05rem solid transparent;
	}
	:global(.spectre) .form-autocomplete .menu {
		display: flex;
		flex-flow: column nowrap;
	}
	:global(.spectre) .form-autocomplete .menu .menu-item > a:not(.active):hover {
		background: inherit;
		color: inherit;
	}
	:global(.spectre) .form-autocomplete .menu .menu-item :global(mark) {
		padding: 0;
	}
	:global(.spectre) .btn-clear {
		background: transparent;
		border: 0;
		color: currentColor;
		height: 1rem;
		line-height: 0.8rem;
		margin: 0 0.25rem;
		opacity: 1;
		padding: 0.1rem;
		text-decoration: none;
		width: 1rem;
		cursor: pointer;
		position: absolute;
		top: 50%;
		right: 0.1rem;
		transform: translateY(-50%);
	}
	:global(.spectre) .btn-clear:focus,
	:global(.spectre) .btn-clear:hover {
		background: rgba(247, 248, 249, 0.5);
		opacity: 0.95;
	}
	:global(.spectre) .btn-clear::before {
		content: '✕';
	}
</style>
