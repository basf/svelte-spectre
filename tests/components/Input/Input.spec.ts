import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Input from '../../../src/lib/components/Input';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Input', async () => {
    const { container, component } = ENV.render(Input, { value: 'input', color: 'primary' });
    const input: HTMLInputElement = container.querySelector('.form-input');

    // assert.is(icon.classList.contains(`icon-emoji`), true);
    // assert.is(icon.classList.contains(`icon-1x`), true);
    assert.is(input.value, 'input');
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
