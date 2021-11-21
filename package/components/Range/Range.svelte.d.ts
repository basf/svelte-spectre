import { SvelteComponentTyped } from 'svelte';
declare type Validity = 'success' | 'error' | false;
export type { Validity };
declare const __propDef: {
    props: {
        [x: string]: any;
        range?: number;
        min?: number;
        max?: number;
        inline?: boolean;
        validity?: Validity;
    };
    events: {
        input: Event;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type RangeProps = typeof __propDef.props;
export declare type RangeEvents = typeof __propDef.events;
export declare type RangeSlots = typeof __propDef.slots;
export default class Range extends SvelteComponentTyped<
    RangeProps,
    RangeEvents,
    RangeSlots
> {}
