import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Container from '../../../src/lib/layouts/Container';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Container', async () => {
    const { container, component } = ENV.render(Container, {
        // title: 'Code',
    });
    const containers: HTMLElement = container.querySelector('.container');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(containers.classList.contains(`container`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
