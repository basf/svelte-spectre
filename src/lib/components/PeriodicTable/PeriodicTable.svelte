<div {...$$restProps} class="columns">
	<div id="periodictable">
		<ul>
			{#each table_data as item}
				{#if item.type == 'element'}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						data-pos={item['data-pos']}
						class={item['class'] + ' ' + item['name']}
						on:click={() => clickEl(item.name)}
					>
						{item.name}<span>{item.title}</span>
					</li>
				{/if}
				{#if item.type == 'icon'}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class={item['class']}
						on:mouseleave={() => unHoverRow(item?.select)}
						on:mouseenter={() => hoverRow(item?.select)}
						on:click={() => clickEl(item?.select)}
					>
						{#if item['class'] == 'triangle_col'}
							<Icon icon={'downward'} />
						{:else if item['class'] == 'triangle_row'}
							<Icon icon={'forward'} />
						{/if}
					</li>
				{/if}
				{#if item.type == 'empty'}
					<li class={item['class']} />
				{/if}
			{/each}
		</ul>
	</div>
</div>

<script lang="ts">
	import Icon from '../Icon/Icon.svelte';
	import table_data from './table_data.json';
	import chemical_content from './chemical_content.json';

	export let selected: any[] = [];
	export const clear = () => clearSelection();

	let group_names = new Map();
	if (chemical_content)
		for (const [key, value] of Object.entries(chemical_content)) {
			let new_key = value[0] + '/' + value.at(-1);
			if (new_key) group_names.set(new_key, key);
		}

	const hoverRow = (id: string) => {
		let divs = document.querySelectorAll(`#periodictable > ul > li.${id}`);
		divs.forEach((item) => {
			item.style.transform = 'scale(1.2)';
			item.style.zIndex = '999';
		});
	};

	const unHoverRow = (id: string) => {
		let divs = document.querySelectorAll(`#periodictable > ul > li.${id}`);
		divs.forEach((item) => {
			item.style.transform = '';
			item.style.zIndex = 'revert-layer';
		});
	};

	const resetGUI = () => {
		let lis = document.querySelectorAll(`#periodictable > ul > li`);

		lis.forEach((item) => {
			if (selected.length >= 1) {
				item.classList.add('active');
			} else if (selected.length == 0) {
				item.classList.remove('active');
			}
			item.classList.remove('active_1');
			item.classList.remove('active_2');
			item.classList.remove('active_3');
		});
	};

	const setGUI = (array: any) => {
		array.map((item: any, index: number) => {
			if (item.label.length <= 2) {
				let li = document.querySelector(`#periodictable > ul > li.${item['label']}`);
				li?.classList.add(`active_${index + 1}`);
			} else {
				if (item.label === 'alkali') { // remove hydrogen "H" from "alkali" group // FIXME
					chemical_content[item.label].slice(1).map((element: string) => {
						let li = document.querySelector(`#periodictable > ul > li.${element}`);
						li?.classList.add(`active_${index + 1}`);
					});
				} else {
					chemical_content[item.label]?.map((element: string) => {
						let li = document.querySelector(`#periodictable > ul > li.${element}`);
						li?.classList.add(`active_${index + 1}`);
					});
				}
			}
		});
	};

	const clearSelection = () => {
		selected = [];
		resetGUI();
	};

	const clickEl = (el: string) => {
		let item_data = { label: el, value: el };

		if (el.length > 2) {
			let temp_selectedDataOne: any[] = []; // selected row or col's elements

			table_data.forEach((item) => {
				if (
					item['class'] != 'empty' &&
					item['class'] != 'triangle_col' &&
					item['class'] != 'triangle_row' &&
					item['class'].length > 6
				) {
					if (item['class'].split(' ').find((v: string) => v == el)) {
						temp_selectedDataOne.push(item);
					}
				}
			});

			let group_name =
				temp_selectedDataOne[0]['name'] + '/' + temp_selectedDataOne.at(-1)['name'];
			if (selected.find((item) => item.label == group_names.get(group_name))) {
				selected.splice(
					selected.indexOf(
						selected.find((item) => item.label == group_names.get(group_name))
					),
					1
				);
			} else {
				if (selected.length > 2) {
					// control select count
					selected.pop();
				}
				selected.push({
					label: group_names.get(group_name),
					value: group_names.get(group_name),
				});
			}
		} else {
			if (selected.find((item) => item.label == el)) {
				selected.splice(selected.indexOf(selected.find((item) => item.label == el)), 1);
			} else {
				if (selected.length < 3) {
					// control select count
					selected.push(item_data);
				} else {
					selected.pop();
					selected.push(item_data);
				}
			}
		}
		selected = [...selected];
	};

	$: if (typeof document != 'undefined') {
		resetGUI();
		setGUI(selected);
	}
</script>

<style lang="scss">
	.columns {
		justify-content: center;
	}
	#periodictable {
		min-width: 1105px;
		max-width: 1159px;
		min-height: 520px;
		ul {
			margin: 0;
			padding: 0;
			border: 0;
			list-style: none;

			li {
				box-sizing: border-box;
				width: 56px;
				height: 54px;
				line-height: 1;
				border: 1px solid #bbb;
				position: relative;
				font-size: 18px;
				float: left;
				padding: 0 2px;
				margin: 1px;
				cursor: pointer;
				padding-top: 14px;
				transition: all 0.3s ease-in;
				background-repeat: no-repeat !important;

				&:hover {
					transform: scale(1.5);
					z-index: 100;
				}

				&:before {
					content: attr(data-pos);
					position: absolute;
					top: 3px;
					left: 3px;
					color: black;
					font-size: 8px;
					line-height: 1;
				}

				span {
					box-sizing: border-box;
					display: block;
					line-height: 1;
					font-size: 9px;
					color: black;
					padding-top: 8px;
				}
			}
			li.triangle_col {
				font-size: 22px;
				border: none;
				display: flex;
				align-items: flex-end;
				justify-content: center;
				padding-bottom: 10px;
				opacity: 0.3;
				&:hover {
					transform: scale(1.1);
					opacity: 1;
				}
			}
			li.triangle_row {
				font-size: 22px;
				border: none;
				display: flex;
				align-items: flex-start;
				justify-content: flex-end;
				padding-right: 10px;
				opacity: 0.3;
				&:hover {
					transform: scale(1.1);
					opacity: 1;
				}
			}
			li.empty {
				z-index: 0;
				border: none;
				cursor: default;
				background-color: transparent !important;
			}
			li.active {
				background-color: transparent !important;
				color: black !important;
			}
			@media (prefers-color-scheme: dark) {
				li.active::before {
					color: #f2f2f2;
				}
				li.active span {
					color: #f2f2f2 !important;
				}
				li.active {
					color: #f2f2f2 !important;
				}
			}
			li.active_1 {
				border: 2px solid #3f0;
				box-shadow: 0 0 5px #3f0;
			}
			li.active_2 {
				border: 2px solid #0cf;
				box-shadow: 0 0 5px #0cf;
			}
			li.active_3 {
				border: 2px solid #c00;
				box-shadow: 0 0 5px #c00;
			}
			li.type_1 {
				background: #ddd;
			}
			li.type_2 {
				background: #a8bffa;
			}
			li.type_3 {
				background: #f8b707;
			}
			li.type_4 {
				background: #f3f300;
			}
			li.type_5 {
				background: #3bd93b;
			}
			li.type_6 {
				background: #dd9999;
			}
			li.type_7 {
				background: #fcc;
			}
			li.cat_0 {
				color: #222;
			}
			li.cat_1 {
				color: #0000dc;
			}
			li.cat_2 {
				color: #b10601;
			}
		}
	}
</style>
