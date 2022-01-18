import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        block?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
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
export {};
