import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Icon from '../../../src/lib/components/Icon';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Icon', async () => {
    const { container, component } = ENV.render(Icon, {
        icon: 'emoji',
        color: 'primary',
    });
    const icon: HTMLElement = container.querySelector('.icon');

    assert.is(icon.classList.contains(`icon-emoji`), true);
    assert.is(icon.classList.contains(`icon-1x`), true);
    assert.is(icon.classList.contains(`text-primary`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
