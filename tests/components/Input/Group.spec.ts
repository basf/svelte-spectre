import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import InputGroup from '../../../src/lib/components/Input/Group.svelte';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Group', async () => {
    const { container, component } = ENV.render(InputGroup, { value: 'input', color: 'primary' });
    const group: HTMLElement = container.querySelector('.input-group');

    // assert.is(group.classList.contains(`input-group`), true);
    // assert.is(icon.classList.contains(`icon-1x`), true);
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
