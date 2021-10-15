import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Offset } from '../../types/position';
export type { Size };
declare const __propDef: {
    props: {
        button?: string;
        size?: Size;
        offset?: Offset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        addon: {};
        default: {};
        button: {
            button: string;
        };
    };
};
export declare type GroupProps = typeof __propDef.props;
export declare type GroupEvents = typeof __propDef.events;
export declare type GroupSlots = typeof __propDef.slots;
export default class Group extends SvelteComponentTyped<
    GroupProps,
    GroupEvents,
    GroupSlots
> {}
