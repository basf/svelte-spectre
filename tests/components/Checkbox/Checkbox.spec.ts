import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Checkbox from '../../../src/lib/components/Checkbox';

const links = [{ title: '1', href: '#' }, { title: '2', href: '#' }, { title: '3', href: '#' }];

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Checkbox', async () => {
    const { container, component } = ENV.render(Checkbox, { validity: 'success', inline: true, value: true });
    const checkbox: HTMLElement = container.querySelector('.form-checkbox');
    const input: HTMLElement = container.querySelector('input[type="checkbox"]');
    checkbox.append('Checkbox');
    await ENV.fire(checkbox, 'click');
    // console.log(component);

    assert.is(checkbox.classList.contains(`is-success`), true);
    assert.is(checkbox.classList.contains(`form-inline`), true);
    assert.is(checkbox.innerHTML.includes(`Checkbox`), true);
    // assert.is(input.hasAttribute('checked'), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
