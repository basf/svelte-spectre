import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as ENV from '../../../../tests/setup/testenv';
import { Toast } from '.';
const toastItem = { invert: false, close: true, icon: 'emoji', timeout: 1000 };
test.before(ENV.setup);
test.before.each(ENV.reset);
test('check Toast', () => {
	const { container, component } = ENV.render(Toast, { toastItem });
	console.log(container, component);
	const toast = container.querySelector('.toast');
	assert.is(toast.innerHTML.includes(`emoji`), true);
	assert.snapshot(container.innerHTML, 'true');
});
test.run();
