import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Button from '../../../src/lib/components/Button/Button.svelte';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check button variants', () => {
    const { container } = ENV.render(Button, { variant: 'primary' });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`btn-primary`), true);
});

test('check button sizes', () => {
    const { container } = ENV.render(Button, { size: 'lg' });
    const button = container.querySelector('button');
    assert.is(button.classList.contains(`btn-lg`), true);
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
