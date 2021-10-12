import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv'
import { render, fireEvent } from '@testing-library/svelte'

import { Toast } from '../../../src/lib/components/Toast';
const tost = { invert: false, close: true, icon: 'emoji', timeout: 1000 }

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Toast', () => {
    const { container, component } = ENV.render(Toast, { tost });
    console.log(container, component)
    const toast = container.querySelector('.toast');
    assert.is(toast.innerHTML.includes(`Default text`), true);
    assert.snapshot(container.innerHTML, 'true');
});

test.run();
