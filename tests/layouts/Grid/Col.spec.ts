import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import { Col } from '../../../src/lib/layouts/Grid';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Col', async () => {
    const { container, component } = ENV.render(Col, {
        // title: 'Code',
    });
    const column: HTMLElement = container.querySelector('.column');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(column.classList.contains(`column`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
