---
file: form.md
title: Form
---

<script>
    import {Form, FormGroup, Icon, IconButton, Input} from '$lib'
</script>

# {title}

> 🚧 Under construction

<Form horizontal>
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
