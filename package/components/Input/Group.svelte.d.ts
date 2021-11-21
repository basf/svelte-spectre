import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
export type { Size };
declare const __propDef: {
    props: {
        [x: string]: any;
        button?: string;
        size?: Size;
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
