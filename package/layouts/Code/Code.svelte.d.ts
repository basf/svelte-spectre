import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        lang?: string;
        action: Function;
        options: any;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CodeProps = typeof __propDef.props;
export declare type CodeEvents = typeof __propDef.events;
export declare type CodeSlots = typeof __propDef.slots;
export default class Code extends SvelteComponentTyped<
    CodeProps,
    CodeEvents,
    CodeSlots
> {}
export {};
