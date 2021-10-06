import { SvelteComponentTyped } from "svelte";
import type { Offset } from '../../types/position';
declare type Align = 'start' | 'center' | 'end' | 'stretch' | '';
export type { Align, Offset };
declare const __propDef: {
    props: {
        gapless?: boolean;
        oneline?: boolean;
        stack?: boolean;
        align?: Align;
        offset?: Offset;
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
export default class Grid extends SvelteComponentTyped<GridProps, GridEvents, GridSlots> {
}
