---
file: progress.md
title: Progress
api: [
	{title: 'value: number', description: 'Progress value', variables: 'any number'},
	{title: 'max: number', description: 'Progress max', variables: 'any number'},
	{title: 'color: Colors', description: 'Progress color', variables: 'gray | light | primary | secondary | success | error'},
    {title: 'invert: boolean', description: 'Progress invert', variables: 'true | false'}
]
config: { 
    value: { type: 'number', size: 5 }, 
    max: { type: 'number', size: 5 }, 
    color: { options: [
                                'gray',
                                'light',
                                'primary',
                                'secondary',
                                'success',
                                'error',
                            ] } ,
    invert: { type: 'checkbox'}
    }
---

<script>
    import {Col, Grid, Progress} from '$lib'
    import Knobs from '../_knobs.svelte'

    let state = { value: 75, max: 100, color: 'primary', invert: false }
</script>

# {title}

The Progress indicates the progress completion of a task.

<p>
    <Grid>
        <Col>
            <Progress value={state.value} max={state.max} color={state.color} invert={state.invert} />
        </Col>
        <Col>
            <Progress  value="50" max="100" color="warning" />
        </Col>
        <Col>
            <Progress value="25" max="100" color="success" />
        </Col>
        <Col>
            <Progress />
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state={state} {config}/>
</p>

```sv
<script>
    import { Progress } from 'svelte-spectre'
</script>

<Progress value="75" max="100" color="primary" invert={false} />
```
