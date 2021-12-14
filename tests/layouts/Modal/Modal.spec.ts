import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Modal from '../../../src/lib/layouts/Modal';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Modal', async () => {
    const { container, component } = ENV.render(Modal, {
        // title: 'Code',
    });
    const modal: HTMLElement = container.querySelector('.modal');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(modal.classList.contains(`modal`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
