---
file: toast.md
title: Toast
---

<script>
    import {Button,ButtonGroup, Col, Divider, Grid,IconButton, Toast, toast} from '$lib'

    let positions = [
			'top_left',
			'top_center',
			'top_right',
			'center_left',
			'center_center',
			'center_right',
			'bottom_left',
			'bottom_center',
			'bottom_right',
		],
		tostVis = true,
		arrows = ['↖', '↑', '↗', '←', '☩', '→', '↙', '↓', '↘']
</script>

# {title}

> 🚧 Under construction

<Grid>
    <Col>
        <h5>Single</h5>
        <Grid>
            <Col col="auto">
                <Button on:click={() => (tostVis = !tostVis)}
                    >{tostVis ? 'Close' : 'Open'}</Button
                >
            </Col>
            <Col>
                <Toast bind:visible={tostVis} type="initial">
                    <h5>header</h5>
                    I'm pure static Toast
                </Toast>
            </Col>
        </Grid>
    </Col>
    <Divider align="vertical" />
    <Col>
        <h5>Toaster</h5>
        <div class="toaster-grid">
            <ButtonGroup>
                {#each positions as pos, i}
                    <IconButton
                        variant="default"
                        on:click={(e) => toast.success({ msg: pos, pos: pos, timeout: 1000 })}
                        >{arrows[i]}</IconButton
                    >
                {/each}
            </ButtonGroup>
        </div>
    </Col>
</Grid>

<style lang="scss">
.toaster-grid {
    :global(.btn-group) {
        gap: 0.25rem;
    }
    :global(.btn-group > button) {
        flex: 1 0 30%;
    }
}
</style>
