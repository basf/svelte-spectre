import { SvelteComponentTyped } from 'svelte';
declare type Side = 'top' | 'right' | 'bottom' | 'left';
declare const __propDef: {
    props: {
        [x: string]: any;
        side?: Side;
        transparent?: boolean;
        shadowed?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        content: {};
    };
};
export declare type PopoverProps = typeof __propDef.props;
export declare type PopoverEvents = typeof __propDef.events;
export declare type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponentTyped<
    PopoverProps,
    PopoverEvents,
    PopoverSlots
> {}
export {};
