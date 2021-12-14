import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Form from '../../../src/lib/layouts/Form';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Form', async () => {
    const { container, component } = ENV.render(Form, {
        // title: 'Code',
    });
    const form: HTMLElement = container.querySelector('form');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(container.contains(form), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
