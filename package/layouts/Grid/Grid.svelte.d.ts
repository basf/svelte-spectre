import { SvelteComponentTyped } from 'svelte';
declare type Align = 'start' | 'center' | 'end' | 'stretch' | '';
declare type Justify = 'start' | 'center' | 'end' | 'stretch' | '';
export type { Align, Justify };
declare const __propDef: {
    props: {
        [x: string]: any;
        gapless?: boolean;
        oneline?: boolean;
        stack?: boolean;
        align?: Align;
        justify?: Justify;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GridProps = typeof __propDef.props;
export declare type GridEvents = typeof __propDef.events;
export declare type GridSlots = typeof __propDef.slots;
export default class Grid extends SvelteComponentTyped<
    GridProps,
    GridEvents,
    GridSlots
> {}
