import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        url?: string;
        on: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PingerProps = typeof __propDef.props;
export declare type PingerEvents = typeof __propDef.events;
export declare type PingerSlots = typeof __propDef.slots;
export default class Pinger extends SvelteComponentTyped<PingerProps, PingerEvents, PingerSlots> {
}
export {};
