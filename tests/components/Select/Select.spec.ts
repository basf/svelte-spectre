import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Select from '../../../src/lib/components/Select';

const options = [{ value: '1', label: '#' }, { value: '2', label: '#' }, { value: '3', label: '#' }];

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Select', async () => {
    const { container, component } = ENV.render(Select, { options });
    const select: HTMLElement = container.querySelector('[id^=select]');
    const option: HTMLOptionElement[] = container.querySelectorAll('option');

    assert.is(option.length, 3);
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
