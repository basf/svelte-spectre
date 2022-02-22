import { SvelteComponentTyped } from 'svelte';
import type { Color } from '../../types/bg';
export type { Color };
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: Color;
        invert?: boolean;
        value: number;
        max?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ProgressProps = typeof __propDef.props;
export declare type ProgressEvents = typeof __propDef.events;
export declare type ProgressSlots = typeof __propDef.slots;
export default class Progress extends SvelteComponentTyped<
    ProgressProps,
    ProgressEvents,
    ProgressSlots
> {}
