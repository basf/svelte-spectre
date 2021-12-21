import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        toggle?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        toggler: {};
        default: {};
    };
};
export declare type ToggleProps = typeof __propDef.props;
export declare type ToggleEvents = typeof __propDef.events;
export declare type ToggleSlots = typeof __propDef.slots;
export default class Toggle extends SvelteComponentTyped<
    ToggleProps,
    ToggleEvents,
    ToggleSlots
> {}
export {};
