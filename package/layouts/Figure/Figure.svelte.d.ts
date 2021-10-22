import { SvelteComponentTyped } from 'svelte';
import type { Offset } from '../../types/position';
declare type Align = '' | 'left' | 'center' | 'right';
export type { Offset, Align };
declare const __propDef: {
    props: {
        [x: string]: any;
        offset?: Offset;
        contain?: boolean;
        cover?: boolean;
        align?: Align;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        img: {};
        default: {};
    };
};
export declare type FigureProps = typeof __propDef.props;
export declare type FigureEvents = typeof __propDef.events;
export declare type FigureSlots = typeof __propDef.slots;
export default class Figure extends SvelteComponentTyped<
    FigureProps,
    FigureEvents,
    FigureSlots
> {}
