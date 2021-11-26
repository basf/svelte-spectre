---
file: select.md
title: Select
---

<script>
    import {Form, FormGroup, Select} from '$lib'

     let selected = 1, multi = [1], questions = [
			{ value: 1, label: `Where did you go to school?` },
			{ value: 2, label: `What is your mother's name?` },
			{
				value: 3,
				label: `What is another personal fact that an attacker could easily find with Google?`,
			},
		]
</script>

# {title}

> 🚧 Under construction

<Form>
    <FormGroup>
        <Select options={questions} bind:value={selected} />
    </FormGroup>
    <FormGroup>
        <Select options={questions} bind:value={multi} multiple />
    </FormGroup>
</Form>
