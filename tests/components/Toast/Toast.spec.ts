import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../setup/testenv';

import { Toast } from '../../../src/lib/components/Toast';
const toastItem = { invert: false, close: true, icon: 'emoji', timeout: 1000 };

test.before(ENV.setup);
test.before.each(ENV.reset);

test('check Toast', () => {
    const { container, component } = ENV.render(Toast, { toastItem });
    console.log(container, component);
    const toast = container.querySelector('.toast');
    assert.is(toast.innerHTML.includes(`Default text`), true);
    assert.snapshot(
        container.innerHTML,
        `<div class="toast undefined svelte-1l00nyg"><div class="columns col-align-center svelte-v1v0y4"><div class="column col-auto   svelte-1dcu5cb"><i class="icon icon-1x icon-emoji svelte-1o9xiin"></i></div> <div class="column   py-2 svelte-1dcu5cb">Default text</div> <div class="column col-auto  px-0 svelte-1dcu5cb"><button class="btn btn-link btn-md btn-action svelte-6szb4"><i class="icon icon-1x icon-cross svelte-1o9xiin"></i></button></div></div> <progress class="progress text-light svelte-bd6u6l" value="0" max="0"></progress></div>`
    );
});

test.run();
