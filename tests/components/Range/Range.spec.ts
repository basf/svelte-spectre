import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Range from '../../../src/lib/components/Range';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Range', async () => {
    const { container, component } = ENV.render(Range, { range: 10 });
    const range: HTMLElement = container.querySelector('[id^=range]');
    const input: HTMLInputElement = container.querySelector('input[type="range"]');

    assert.is(range.getAttribute('data-range'), '10');
    assert.is(input.value, '10');
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
