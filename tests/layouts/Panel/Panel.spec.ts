import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Panel from '../../../src/lib/layouts/Panel';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Panel', async () => {
    const { container, component } = ENV.render(Panel, {
        // title: 'Code',
    });
    const panel: HTMLElement = container.querySelector('.panel');
    // const summary: HTMLElement = container.querySelector('.code-header');
    // await ENV.fire(summary, 'click');
    // code.querySelector('.code-body').innerHTML = 'code-body';

    assert.is(panel.classList.contains(`panel`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
