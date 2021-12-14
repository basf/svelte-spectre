import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import { FormGroup } from '../../../src/lib/layouts/Form';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check FormGroup', async () => {
    const { container, component } = ENV.render(FormGroup, {
        // title: 'Code',
    });
    const formGroup: HTMLElement = container.querySelector('.form-group');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(formGroup.classList.contains(`form-group`), true);
    assert.is(container.contains(formGroup), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
