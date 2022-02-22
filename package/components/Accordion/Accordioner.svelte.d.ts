import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AccordionerProps = typeof __propDef.props;
export declare type AccordionerEvents = typeof __propDef.events;
export declare type AccordionerSlots = typeof __propDef.slots;
export default class Accordioner extends SvelteComponentTyped<
    AccordionerProps,
    AccordionerEvents,
    AccordionerSlots
> {}
export {};
