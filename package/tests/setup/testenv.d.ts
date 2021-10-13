export function setup(): void;
export function reset(): void;
/**
 * @typedef RenderOutput
 * @property container {HTMLElement}
 * @property component {import('svelte').SvelteComponent}
 */
/**
 * @return {RenderOutput}
 */
export function render(Tag: any, props?: {}): RenderOutput;
/**
 * @param {HTMLElement} elem
 * @param {String} event
 * @param {any} [details]
 * @returns Promise<void>
 */
export function fire(
    elem: HTMLElement,
    event: string,
    details?: any
): Promise<void>;
export type RenderOutput = {
    container: HTMLElement;
    component: import('svelte').SvelteComponent;
};
