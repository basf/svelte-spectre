import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import { Grid } from '../../../src/lib/layouts/Grid';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Grid', async () => {
    const { container, component } = ENV.render(Grid, {
        // title: 'Code',
    });
    const grid: HTMLElement = container.querySelector('.columns');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(grid.classList.contains(`columns`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
