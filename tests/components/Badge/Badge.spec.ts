import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Badge from '../../../src/lib/components/Badge';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Badge', async () => {
    const { container, component } = ENV.render(Badge, { color: 'primary', rounded: true });
    const badge: HTMLElement = container.querySelector('.label');
    badge.innerHTML = 'badge';

    assert.is(badge.innerHTML.includes(`badge`), true);
    assert.is(badge.classList.contains(`label-primary`), true);
    assert.is(badge.classList.contains(`label-rounded`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
