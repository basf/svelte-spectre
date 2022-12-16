---
file: periodictable.md
title: Periodic Table
api: [
	{title: 'selected: string[] = []', description: 'Selected element array output', variables: '["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No","Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6", "Period 7", "Lanthanide", "Actinide", "Alkali", "Alkaline", "Group 3", "Group 4", "Group 5", "Group 6", "Group 7", "Group 8", "Group 9", "Group 10", "Group 11", "Group 12", "Triels", "Tetrels", "Pnictogen", "Chalcogen", "Halogen", "Noble Gas"]'},
	{title: 'clear: function()', description: 'Clear selection', variables: ''}
]
config: {}
---

<script>
	import { PeriodicTable, Button, Modal, Autocomplete } from '$lib'

	let selected = [], open = false, clear;
    let predefined = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe",     "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No","Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6", "Period 7", "Lanthanide", "Actinide", "Alkali", "Alkaline", "Group 3", "Group 4", "Group 5", "Group 6", "Group 7", "Group 8", "Group 9", "Group 10", "Group 11", "Group 12", "Triels", "Tetrels", "Pnictogen", "Chalcogen", "Halogen", "Noble Gas"]

    $: if(selected.length > 3) {
        selected.pop();
    } else {
        let counts = {};
        selected.map(item=>item.label.length>2).forEach(x => counts[x] = (counts[x] || 0) + 1);
        if(counts["true"] > 2 ){
            selected.pop()
        } 
    }

</script>

# {title}

The Periodic Table component allows to select chemical elements conveniently. Currently up to 3 distinct chemical elements or up to 3 named groups can be selected. A named Group is either a column or row in the periodic table, such as `Alkali`, `Alkalines`, `Pnictogens`, `Chalcogens`, `Period 2`, `Period 6`, `Lanthanides`, `Actinides`, etc.

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
