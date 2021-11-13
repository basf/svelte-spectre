import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Radio from '../../../src/lib/components/Radio';
const radios = [
    { name: '1', label: '#' },
    { name: '2', label: '#' },
    { name: '3', label: '#' },
];

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Radio', async () => {
    const { container, component } = ENV.render(Radio, { radios });
    const radio: HTMLElement = container.querySelector('.form-radio');

    assert.is(container.querySelectorAll('.form-radio').length, 3);
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
