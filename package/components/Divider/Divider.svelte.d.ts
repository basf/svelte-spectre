import { SvelteComponentTyped } from 'svelte';
import type { Color } from '../../types/text';
declare type Align = 'vertical' | 'horizontal' | 'center' | 'left' | 'right';
export type { Align, Color };
declare const __propDef: {
    props: {
        [x: string]: any;
        align?: Align;
        text?: string;
        empty?: boolean;
        color?: Color;
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
