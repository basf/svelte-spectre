import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import Toast from '../../../src/lib/components/Toast/Toast.svelte';
const toastItem = { invert: false, close: true, icon: 'emoji', timeout: 1000 };

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Toast', () => {
    const { container, component } = ENV.render(Toast, { toastItem });
    const toast = container.querySelector('.toast');
    toast.querySelector('.toast-content').innerHTML = 'Default text';
    assert.is(toast.innerHTML.includes(`Default text`), true);
    // assert.snapshot(container.innerHTML, 'just render view');
});

test.run();
