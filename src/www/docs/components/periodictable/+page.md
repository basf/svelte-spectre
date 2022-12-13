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
    import { PeriodicTable } from '$lib'
    import {Button, Modal, Icon} from '$lib'
    let selected = [], clear;
    let open = false;

</script>

# {title}

The Periodic Table component allows to select chemical elements conveniently. Currently up to 3 distinct chemical elements or up to 3 named groups can be selected. A named group is either a column or row in the periodic table, such as `alkali`, `alkalines`, `pnictogens`, `chalcogens`, `period 2`, `period 6`, `lanthanides`, `actinides`, etc.

<Button on:click={() => open = !open}>Open Periodic Table</Button>

<Modal bind:open size="fs">
    <h3 slot="header">Periodic Table</h3>
    <div class="content">
        <p>
            <span>Selected: [ {selected.map(s => s).join(', ')} ]</span>
            <span on:click={clear} class="clearText"><Icon icon="cross" color="error" size="1x" /></span>
        </p>
        <p>
            <PeriodicTable bind:selected bind:clear = {clear}/>
        </p>
    </div>
</Modal>

```sv
<script>
    import { PeriodicTable } from 'svelte-spectre'

    let selected = [], clear;
</script>

<PeriodicTable bind:selected bind:clear = {clear}/>
```
