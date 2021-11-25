---
file: input.md
title: Input
---

<script>
    import {Button, Checkbox, Form, FormGroup, Icon, IconButton, Input, InputGroup, Select, Switch} from '$lib'

    let questions = [
			{ value: 1, label: `Where did you go to school?` },
			{ value: 2, label: `What is your mother's name?` },
			{
				value: 3,
				label: `What is another personal fact that an attacker could easily find with Google?`,
			},
		],
		selected = 3
</script>

# {title}

> 🚧 Under construction

<!-- <Form horizontal>
    <h4>Form horizontal</h4>
    <FormGroup>
        <Input validity="success">Success</Input>
    </FormGroup>
    <FormGroup>
        <Input validity="error">Error <Icon slot="iconRight" icon="emoji" /></Input>
    </FormGroup>
    <FormGroup>
        <Input validity="error">Error <IconButton slot="iconRight" icon="emoji" /></Input>
    </FormGroup>
</Form>
<Form>
    <h4>InputGroup</h4>
    <FormGroup>
        <InputGroup let:button>
            <Switch />
            <Input expand />
            <Button slot="button" variant="primary" let:button input class={button}
                >{button}</Button
            >
        </InputGroup>
    </FormGroup>
    <FormGroup>
        <InputGroup let:button>
            <Checkbox />
            <Input expand />
            <Button slot="button" variant="primary" let:button input class={button}
                >{button}</Button
            >
        </InputGroup>
    </FormGroup>
    <FormGroup>
        <InputGroup let:button>
            <Checkbox />
            <Input expand />
            <Select options={questions} bind:value={selected} />
        </InputGroup>
    </FormGroup>
</Form> -->
