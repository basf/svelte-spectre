import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Tile from '../../../src/lib/layouts/Tile';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Tile', async () => {
    const { container, component } = ENV.render(Tile, {
        // title: 'Code',
    });
    const tile: HTMLElement = container.querySelector('.tile');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(tile.innerHTML.includes(`tile`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
