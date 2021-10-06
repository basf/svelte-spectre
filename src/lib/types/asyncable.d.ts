import type { Writable } from 'svelte/store';

declare type AsyncValue = Promise<T>;
export interface Asyncable<AsyncValue> extends Writable<T> {
    get: () => Promise<T>;
}
