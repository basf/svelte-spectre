import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv'

import IconButton from '../../../src/lib/components/Button/IconButton.svelte';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check IconButton icon', () => {
    const icon = 'emoji';
    const { container } = ENV.render(IconButton, { icon });
    const button = container.querySelector('button i');
    assert.is(button.classList.contains(`icon-${icon}`), true);
});

test('check IconButton iconSize', () => {
    const iconSize = '1x';
    const { container } = ENV.render(IconButton, { iconSize });
    const button = container.querySelector('button i');
    assert.is(button.classList.contains(`icon-${iconSize}`), true);
});

test('check IconButton is color', () => {
    const color = 'primary'
    const { container } = ENV.render(IconButton, { color });
    const button = container.querySelector('button i');
    assert.is(button.classList.contains(`text-${color}`), true);
});

test.run();
