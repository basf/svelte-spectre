import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Pagination from '../../../src/lib/components/Pagination';

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Pagination', async () => {
    const { container, component } = ENV.render(Pagination, { total: 100, limit: 10 });
    const pagination: HTMLElement = container.querySelector('.pagination');

    assert.is(pagination.querySelectorAll(`.page-item`).length, 12);
    assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
