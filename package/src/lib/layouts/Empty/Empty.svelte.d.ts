import { SvelteComponentTyped } from 'svelte';
import type { Offset } from '../../types/position';
export type { Offset };
declare const __propDef: {
    props: {
        offset?: Offset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        title: {};
        subtitle: {};
        action: {};
    };
};
export declare type EmptyProps = typeof __propDef.props;
export declare type EmptyEvents = typeof __propDef.events;
export declare type EmptySlots = typeof __propDef.slots;
export default class Empty extends SvelteComponentTyped<
    EmptyProps,
    EmptyEvents,
    EmptySlots
> {}
