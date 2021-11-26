---
file: radio.md
title: Radio
---

<script>
    import {Form, FormGroup, Radio} from '$lib'

    let radios = 1, questions = [
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
        <h4>Radio</h4>
        <Radio label="Radios" radios={questions} group={radios} let:radio>
            {radio.label}
        </Radio>
    </FormGroup>
</Form>
