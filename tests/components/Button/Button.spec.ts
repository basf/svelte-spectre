import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Button from '../../../src/lib/components/Button/Button.svelte';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check button variants', () => {
    const variant = 'primary';
    const { container } = ENV.render(Button, { variant });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`btn-${variant}`), true);
});

test('check button sizes', () => {
    const size = 'lg';
    const { container } = ENV.render(Button, { size });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`btn-${size}`), true);
});

test('check button is active', () => {
    const { container } = ENV.render(Button, { active: true });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`active`), true);
});

test('check button is loading', () => {
    const { container } = ENV.render(Button, { loading: true });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`loading`), true);
});

test('check button block', () => {
    const { container } = ENV.render(Button, { block: true });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`btn-block`), true);
});

test('check button to be a link', () => {
    const { container } = ENV.render(Button, { href: 'example.com' });
    const a = container.querySelector('a');
    assert.is.not(a, null);
});

test.run();
