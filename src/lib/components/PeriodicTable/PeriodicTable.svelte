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
	export let selected: any[] = [];
	export const clear = () => clearSelection();

	let clicked_data: any[] = []; // clicked row or col or element data
	let selectedGroupDatas: any[] = []; //Clicked row or col's elements array

	const group_names = new Map<string, string>([
		['H/He', 'period 1'],
		['Li/Ne', 'period 2'],
		['Na/Ar', 'period 3'],
		['K/Kr', 'period 4'],
		['Rb/Xe', 'period 5'],
		['Cs/Rn', 'period 6'],
		['Fr/Lr', 'period 7'],
		['La/Yb', 'lanthanide'],
		['Ac/No', 'actinide'],
		['H/Fr', 'alkali'],
		['Be/Ra', 'alkaline'],
		['Sc/Lr', 'group 3'],
		['Ti/Hf', 'group 4'],
		['V/Ta', 'group 5'],
		['Cr/W', 'group 6'],
		['Mn/Re', 'group 7'],
		['Fe/Os', 'group 8'],
		['Co/Ir', 'group 9'],
		['Ni/Pt', 'group 10'],
		['Cu/Au', 'group 11'],
		['Zn/Hg', 'group 12'],
		['B/Tl', 'triels'],
		['C/Pb', 'tetrels'],
		['N/Bi', 'pnictogen'],
		['O/Po', 'chalcogen'],
		['F/At', 'halogen'],
		['He/Rn', 'noble gas'],
	]);

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

	const clickEl = (el: string) => {
		let item_data = { label: el, value: el };

		if (clicked_data.length < 3) {
			clicked_data.push(item_data);
		} else {
			clicked_data.pop();
			clicked_data.push(item_data);
		}

		// reset UI
		let lis = document.querySelectorAll(`#periodictable > ul > li`);

		lis.forEach((item) => {
			if (clicked_data.length >= 1) {
				item.classList.add('active');
			} else if (clicked_data.length == 0) {
				item.classList.remove('active');
			}
			item.classList.remove('active_1');
			item.classList.remove('active_2');
			item.classList.remove('active_3');
		});

		// add style
		clicked_data.map((item, index) => {
			try {
				let li = document.querySelector(`#periodictable > ul > li.${item['label']}`);
				li?.classList.add(`active_${index + 1}`);
			} catch (err) {
				selectedGroupDatas.map((element) => {
					element[item]?.map((t: any) => {
						let li = document.querySelector(`#periodictable > ul > li.${t['name']}`);
						li?.classList.add(`active_${index + 1}`);
					});
				});
			}
		});
		selected = clicked_data;
	};

	const clearSelection = () => {
		clicked_data = [];
		selectedGroupDatas = [];
		selected = [];

		// reset UI
		let lis = document.querySelectorAll(`#periodictable > ul > li`);

		lis.forEach((item) => {
			if (clicked_data.length >= 1) {
				item.classList.add('active');
			} else if (clicked_data.length == 0) {
				item.classList.remove('active');
			}
			item.classList.remove('active_1');
			item.classList.remove('active_2');
			item.classList.remove('active_3');
		});
	};

	$: if (typeof document != 'undefined') {
		if (selected.length == 0) {
			clearSelection();
		}
	}

	$: console.log('selected', selected);
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
