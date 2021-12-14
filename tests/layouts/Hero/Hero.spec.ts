import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Hero from '../../../src/lib/layouts/Hero';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Hero', async () => {
    const { container, component } = ENV.render(Hero, {
        // title: 'Code',
    });
    const hero: HTMLElement = container.querySelector('.hero');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(hero.classList.contains(`hero`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
