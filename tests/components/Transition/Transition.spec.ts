import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Transition from '../../../src/lib/components/Transition';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Transition', async () => {
    const { container, component } = ENV.render(Transition, {
        in: 'slide',
        out: 'fade',
    });
    // const tabs: HTMLElement = container.querySelector('.tab');

    // assert.is(tabs.querySelectorAll('.tab-item').length, 3);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
