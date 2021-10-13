import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import ButtonGroup from '../../../src/lib/components/Button/Group.svelte';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check button-group inline', () => {
    const inline = true;
    const { container } = ENV.render(ButtonGroup, { inline });
    const button = container.querySelector('.btn-group');
    assert.is(button.classList.contains(`inline`), true);
});

test('check button-group-block', () => {
    const block = true;
    const { container } = ENV.render(ButtonGroup, { block });
    const button = container.querySelector('.btn-group');
    assert.is(button.classList.contains(`btn-group-block`), true);
});

test.run();
