import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Breadcrumbs from '../../../src/lib/components/Breadcrumbs';

const links = [
    { title: '1', href: '#' },
    { title: '2', href: '#' },
    { title: '3', href: '#' },
];

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Breadcrumbs', async () => {
    const { container, component } = ENV.render(Breadcrumbs, { links });
    const breadcrumb: HTMLElement = container.querySelector('.breadcrumb');

    assert.is(breadcrumb.querySelectorAll(`.breadcrumb-item`).length, 3);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
