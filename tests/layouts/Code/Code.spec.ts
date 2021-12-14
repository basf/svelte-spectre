import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Code from '../../../src/lib/layouts/Code';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Code', async () => {
    const { container, component } = ENV.render(Code, {
        // title: 'code',
    });
    const code: HTMLElement = container.querySelector('.code');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(code.classList.contains(`code`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
