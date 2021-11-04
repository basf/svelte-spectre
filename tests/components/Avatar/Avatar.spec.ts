import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Avatar from '../../../src/lib/components/Avatar';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Avatar', async () => {
    const { container, component } = ENV.render(Avatar, { title: 'Accordion' });
    const avatar: HTMLElement = container.querySelector('.avatar');
    avatar.innerHTML = 'avatar';

    assert.is(avatar.innerHTML.includes(`avatar`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
