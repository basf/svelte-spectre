import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Sidebar from '../../../src/lib/layouts/Sidebar';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Sidebar', async () => {
    const { container, component } = ENV.render(Sidebar, {
        // title: 'Code',
    });
    const sidebar: HTMLElement = container.querySelector('.off-canvas');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(sidebar.classList.contains(`off-canvas`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
