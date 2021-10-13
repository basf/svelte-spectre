import { SvelteComponentTyped } from 'svelte';
declare type Align = 'vertical' | 'horizontal';
export type { Align };
declare const __propDef: {
    props: {
        align?: Align;
        text?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DividerProps = typeof __propDef.props;
export declare type DividerEvents = typeof __propDef.events;
export declare type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponentTyped<
    DividerProps,
    DividerEvents,
    DividerSlots
> {}
