import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Switch from '../../../src/lib/components/Switch';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Switch', async () => {
    const { container, component } = ENV.render(Switch, { inline: true });
    const swich: HTMLElement = container.querySelector('.form-switch');
    const input: HTMLInputElement = container.querySelector(
        'input[type="checkbox"]'
    );
    swich.append('Switch');

    assert.is(swich.classList.contains('form-inline'), true);
    assert.is(swich.innerHTML.includes('Switch'), true);
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
