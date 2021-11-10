import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Chip from '../../../src/lib/components/Chip';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Chip', async () => {
    const { container, component } = ENV.render(Chip, { name: 'chip chip', closable: true });
    const chip: HTMLElement = container.querySelector('.chip');
    const avatar: HTMLElement = container.querySelector('.avatar');
    const button: HTMLElement = container.querySelector('.btn');
    chip.append('Chip');
    await ENV.fire(button, 'click');

    assert.is(chip.innerHTML.includes(`Chip`), true);
    assert.is(avatar.getAttribute('data-initial'), 'CC');
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
