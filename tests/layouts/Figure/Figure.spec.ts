import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Figure from '../../../src/lib/layouts/Figure';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Figure', async () => {
    const { container, component } = ENV.render(Figure, {
        // title: 'Code',
    });
    const figure: HTMLElement = container.querySelector('.figure');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(figure.classList.contains(`figure`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
