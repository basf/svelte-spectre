/** @typedef {typeof __propDef.props}  EmptyProps */
/** @typedef {typeof __propDef.events}  EmptyEvents */
/** @typedef {typeof __propDef.slots}  EmptySlots */
export default class Empty extends SvelteComponentTyped<
    {
        [x: string]: any;
    },
    {
        [evt: string]: CustomEvent<any>;
    },
    {
        icon: {};
        title: {};
        subtitle: {};
        action: {};
    }
> {}
export type EmptyProps = typeof __propDef.props;
export type EmptyEvents = typeof __propDef.events;
export type EmptySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
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
export {};
