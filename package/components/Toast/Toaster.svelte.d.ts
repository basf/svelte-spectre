import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ToasterProps = typeof __propDef.props;
export declare type ToasterEvents = typeof __propDef.events;
export declare type ToasterSlots = typeof __propDef.slots;
export default class Toaster extends SvelteComponentTyped<
    ToasterProps,
    ToasterEvents,
    ToasterSlots
> {}
export {};
