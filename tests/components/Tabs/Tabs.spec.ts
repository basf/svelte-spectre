import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Tabs from '../../../src/lib/components/Tabs';

const items = [
    { href: '1', label: '#' },
    { href: '2', label: '#' },
    { href: '3', label: '#' },
];

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Tabs', async () => {
    const { container, component } = ENV.render(Tabs, { items });
    const tabs: HTMLElement = container.querySelector('.tab');

    assert.is(tabs.querySelectorAll('.tab-item').length, 3);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
