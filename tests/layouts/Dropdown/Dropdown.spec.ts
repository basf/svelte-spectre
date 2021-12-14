import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Dropdown from '../../../src/lib/layouts/Dropdown';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Dropdown', async () => {
    const { container, component } = ENV.render(Dropdown, {
        // title: 'Code',
    });
    const dropdown: HTMLElement = container.querySelector('.dropdown');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(dropdown.classList.contains(`dropdown`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
