import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from './setup/testenv'

import Index from '../src/routes/index.svelte';

test('check Index h1', () => {
    const { container, component } = ENV.render(Index);
    const heaader = container.querySelector('h1');
    assert.is(heaader.innerText.includes(`Welcome to SvelteSpectre`), true);
});

test.run();
