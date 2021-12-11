import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Navbar from '../../../src/lib/layouts/Navbar';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Navbar', async () => {
    const { container, component } = ENV.render(Navbar, {
        // title: 'Code',
    });
    const navbar: HTMLElement = container.querySelector('.navbar');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(navbar.classList.contains(`navbar`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
