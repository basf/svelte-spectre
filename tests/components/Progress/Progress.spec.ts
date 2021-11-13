import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Progress from '../../../src/lib/components/Progress';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Progress', async () => {
    const { container, component } = ENV.render(Progress, {
        color: 'primary',
        value: 10,
        max: 100,
    });
    const progress: HTMLElement = container.querySelector('.progress');

    assert.is(progress.classList.contains(`text-primary`), true);
    assert.is(progress.getAttribute(`value`), '10');
    assert.is(progress.getAttribute(`max`), '100');
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
