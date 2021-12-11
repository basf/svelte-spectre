import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Card from '../../../src/lib/layouts/Card';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Card', async () => {
    const { container, component } = ENV.render(Card, {
        // title: 'card',
    });
    const card: HTMLElement = container.querySelector('.card');
    // const summary: HTMLElement = container.querySelector('.card-header');
    // await ENV.fire(summary, 'click');
    // card.querySelector('.card-body').innerHTML = 'card-body';

    assert.is(card.classList.contains(`card`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
