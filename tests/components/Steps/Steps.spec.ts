import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Steps from '../../../src/lib/components/Steps';

const steps = [
    { href: '1', label: '#' },
    { href: '2', label: '#' },
    { href: '3', label: '#' },
];

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Steps', async () => {
    const { container, component } = ENV.render(Steps, { steps });
    const step: HTMLElement = container.querySelector('.step');
    const items: HTMLElement[] = container.querySelectorAll('.step-item');

    assert.is(items.length, 3);
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
