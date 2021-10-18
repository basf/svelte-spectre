import { SvelteComponentTyped } from 'svelte';
declare type Mq = 'col' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
import type { Offset, Inset } from '../../types/position';
export type { Mq, Offset };
declare const __propDef: {
    props: {
        [x: string]: any;
        mq?: Mq[];
        offset?: Offset;
        inset?: Inset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ColProps = typeof __propDef.props;
export declare type ColEvents = typeof __propDef.events;
export declare type ColSlots = typeof __propDef.slots;
export default class Col extends SvelteComponentTyped<
    ColProps,
    ColEvents,
    ColSlots
> {}
