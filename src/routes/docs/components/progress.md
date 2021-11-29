---
file: progress.md
title: Progress
api: [
	{title: 'value: number = undefined', description: 'Progress value', variables: 'any number'},
	{title: 'max: number = 0', description: 'Progress max', variables: 'any number'},
	{title: 'color: Colors = "light"', description: 'Progress color', variables: 'gray | light | primary | secondary | success | error'},
    {title: 'invert: boolean = false', description: 'Progress invert', variables: 'true | false'}
]
config: { 
    value: { type: 'number', min: 0, max: 100, size: 5 }, 
    max: { type: 'number', min: 0, max: 100, size: 5 }, 
    color: { options: [ 'gray', 'light', 'primary', 'secondary', 'success', 'error' ] } ,
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

> If `value === null || undefined` it have indeterminate/loading state

<p>
    <Grid stack>
        <Col col="6" xs="12">
            <Progress
                value={state.value}
                max={state.max}
                color={state.color}
                invert={state.invert} />
        </Col>
        <Col col="6" xs="12">
            <Progress value="50" max="100" color="warning" />
        </Col>
        <Col col="6" xs="12">
            <Progress value="25" max="100" color="success" />
        </Col>
        <Col col="6" xs="12">
            <Progress color="error" />
        </Col>
    </Grid>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Progress } from 'svelte-spectre'
</script>

<Progress value="75" max="100" color="primary" />
<Progress value="50" max="100" color="warning" />
<Progress value="25" max="100" color="success" />
<Progress color="error" />
```
