import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Divider from '../../../src/lib/components/Divider';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Divider', async () => {
    const { container, component } = ENV.render(Divider, {
        align: 'horizontal center',
        text: 'divider',
    });
    const divider: HTMLElement = container.querySelector('.divider');

    assert.is(divider.classList.contains(`text-center`), true);
    assert.is(divider.getAttribute('data-content'), 'divider');
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
