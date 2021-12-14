import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Popover from '../../../src/lib/layouts/Popover';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Popover', async () => {
    const { container, component } = ENV.render(Popover, {
        // title: 'Code',
    });
    const popover: HTMLElement = container.querySelector('.popover');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(popover.classList.contains(`popover`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
