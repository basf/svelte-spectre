import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Accordion from '../../../src/lib/components/Accordion';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Accordion', async () => {
    const { container, component } = ENV.render(Accordion, {
        title: 'Accordion',
    });
    const accordion: HTMLElement = container.querySelector('.accordion');
    const summary: HTMLElement = container.querySelector('.accordion-header');
    await ENV.fire(summary, 'click');
    accordion.querySelector('.accordion-body').innerHTML = 'accordion-body';

    assert.is(accordion.innerHTML.includes(`accordion-body`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
