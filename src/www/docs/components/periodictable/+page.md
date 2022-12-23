---
file: periodictable.md
title: Periodic Table
api: [
	{title: 'selected: string[] = []', description: 'Selected element array output', variables: '["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No","period 1", "period 2", "period 3", "period 4", "period 5", "period 6", "period 7", "lanthanide", "actinide", "alkali", "alkaline", "group 3", "group 4", "group 5", "group 6", "group 7", "group 8", "group 9", "group 10", "group 11", "group 12", "triels", "tetrels", "pnictogen", "chalcogen", "halogen", "noble gas"]'},
	{title: 'clear: function()', description: 'Clear selection', variables: ''}
]
config: {}
---

<script>
	import { PeriodicTable, Button, Modal, Autocomplete } from '$lib'
	import ptable_data from '$lib/components/PeriodicTable/chemical_content.json';

	let selected = [], open = false, clear;
	let predefined = []
	
	if(ptable_data)
		for (const [key, value] of Object.entries(ptable_data)) {
			value.forEach(v => predefined.push(v))
			predefined.push(key)
		}

	$: if (selected.length > 3) { // control select count
		selected.pop();
	} else {
		let counts = {};
		selected.map(item => item.label.length > 2).forEach(x => counts[x] = (counts[x] || 0) + 1);
		if (counts["true"] > 2){
			selected.pop()
		}
	}

</script>

# {title}

The Periodic Table component allows to select chemical elements conveniently. Currently up to 3 distinct chemical elements or up to 3 named groups can be selected. A named group is either a column or row in the periodic table, such as `alkali`, `alkalines`, `pnictogens`, `chalcogens`, `period 2`, `period 6`, `lanthanides`, `actinides`, etc.

<Button on:click={() => open = !open}>Open Periodic Table</Button>

<Modal bind:open size="fs">
	<div class="content">
		<p class="periodic_table_input">
			<Autocomplete
				{predefined}
				bind:selected
				placeholder="Type or select 3 elements"
			/>
		</p>
		<p>
			<PeriodicTable bind:selected bind:clear/>
		</p>
	</div>
</Modal>

<style>
	.periodic_table_input{
		display: flex;
		justify-content: center;
		width: 100%
	}
</style>

```sv
<script>
	import { PeriodicTable } from 'svelte-spectre'

	let selected = [], clear;
</script>

<PeriodicTable bind:selected bind:clear />
```
