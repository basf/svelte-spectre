import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Range from '../../../src/lib/components/Range';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Range single', async () => {
    const { container } = ENV.render(Range, {
        range: 10,
        ux_min: 0,
        ux_max: 100,
    });
    const label: HTMLElement = container.querySelector('[id^=range]');
    const handle: HTMLButtonElement = container.querySelector('.range-handle');
    const track: HTMLElement = container.querySelector('.range-track');

    assert.is(label.getAttribute('data-range'), '10');
    assert.ok(handle, 'handle exists');
    assert.ok(track, 'track exists');
    assert.is(handle.getAttribute('aria-valuenow'), '10');
});

test('check Range dual', async () => {
    const { container } = ENV.render(Range, {
        dual: true,
        user_min: 20,
        user_max: 80,
        ux_min: 0,
        ux_max: 100,
    });
    const label: HTMLElement = container.querySelector('[id^=range]');
    const handles: NodeListOf<HTMLButtonElement> =
        container.querySelectorAll('.range-handle');

    assert.is(label.getAttribute('data-range'), '20 – 80');
    assert.is(handles.length, 2);
    assert.is(handles[0].getAttribute('aria-valuenow'), '20');
    assert.is(handles[1].getAttribute('aria-valuenow'), '80');
});

test('check Range height variants', async () => {
    const { container } = ENV.render(Range, { range: 10, height: 'lg' });
    const label: HTMLElement = container.querySelector('[id^=range]');
    assert.is(label.classList.contains('h-lg'), true);
});

test('check Range validity', async () => {
    const { container } = ENV.render(Range, { range: 10, validity: 'error' });
    const label: HTMLElement = container.querySelector('[id^=range]');
    assert.is(label.classList.contains('is-error'), true);
});

test.run();
