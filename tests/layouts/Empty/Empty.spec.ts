import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Empty from '../../../src/lib/layouts/Empty';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Empty', async () => {
    const { container, component } = ENV.render(Empty, {
        // title: 'Code',
    });
    const empty: HTMLElement = container.querySelector('.empty');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(empty.classList.contains(`empty`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
