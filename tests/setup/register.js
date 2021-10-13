import { addHook } from 'pirates';
import { transform } from './transformer';

const handleSvelte = (source, filename) => transform(source, filename);

addHook(handleSvelte, { exts: ['.svelte'] });
