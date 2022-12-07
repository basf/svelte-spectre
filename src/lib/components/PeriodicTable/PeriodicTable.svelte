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
						on:mouseleave={() => deHoverRow(item?.select)}
						on:mouseenter={() => hoverRow(item?.select)}
						on:click={() => clickEl(item?.select)}
					>
						{#if item['class'] == 'triangle_col'}
							<Icon icon={'arrow-down'} />
						{:else if item['class'] == 'triangle_row'}
							<Icon icon={'arrow-right'} />
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

<script lang="ts" context="module">
</script>

<script lang="ts">
	import { Icon } from '$lib';
	import table_data from './table_data.json';

	let clicked_data: string[] = []; // clicked row or col or element data
	let selectedGroupDatas: any[] = []; //Clicked row or col's elements array

	const hoverRow = (id: string) => {
		let divs = document.querySelectorAll(`#periodictable > ul > li.${id}`);
		divs.forEach((item) => {
			item.style.transform = 'scale(1.2)';
			item.style.zIndex = '999999999999999999999';
		});
	};

	const deHoverRow = (id: string) => {
		let divs = document.querySelectorAll(`#periodictable > ul > li.${id}`);
		divs.forEach((item) => {
			item.style.transform = '';
			item.style.zIndex = 'revert-layer';
		});
	};

	const clickEl = (el: string) => {
		if (el.length > 2) {
			let temp_selectedDataOne: any[] = []; // selected row or col's elements
			if (selectedGroupDatas.length >= 0) {
				table_data.forEach((item) => {
					if (
						item['class'] != 'empty' &&
						item['class'] != 'triangle_col' &&
						item['class'] != 'triangle_row' &&
						item['class'].length > 6
					) {
						// instead of item['class'].includes(el), but it detects equal row_1 and row_10, row_11, etc
						if (item['class'].split(' ').find((v: string) => v == el)) {
							temp_selectedDataOne.push(item);
						}
					}
				});
				let temp =
					temp_selectedDataOne[0]['name'] + '/' + temp_selectedDataOne.at(-1)['name'];
				if (clicked_data.includes(temp)) {
					const index = clicked_data.indexOf(temp);
					clicked_data.splice(index, 1);
					selectedGroupDatas.splice(index, 1);
				} else {
					if (selectedGroupDatas.length < 2) {
						selectedGroupDatas.push(temp_selectedDataOne);
						clicked_data.push(temp);
					}
				}
			}
		} else {
			if (clicked_data.find((item) => item == el)) {
				const index = clicked_data.indexOf(el);
				clicked_data.splice(index, 1);
			} else {
				if (clicked_data.length < 3) {
					clicked_data.push(el);
				} else {
					clicked_data.pop();
					clicked_data.push(el);
				}
			}
		}

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

		clicked_data.map((item, index) => {
			try {
				let li = document.querySelector(`#periodictable > ul > li.${item}`);
				li?.classList.add(`active_${index + 1}`);
			} catch (err) {
				selectedGroupDatas.map((element, i) => {
					if (index == i) {
						element.map((t: any) => {
							let li = document.querySelector(
								`#periodictable > ul > li.${t['name']}`
							);
							li?.classList.add(`active_${index + 1}`);
						});
					}
				});
			}
		});
		console.log(clicked_data);
	};
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
				background-repeat: no-repeat;

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
			}
			li.active {
				background-color: transparent !important;
				color: black !important;
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
