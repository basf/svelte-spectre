import { SvelteComponentTyped } from 'svelte';
declare type Validity = 'success' | 'error' | false;
export type { Validity };
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: boolean;
        inline?: boolean;
        validity?: Validity;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SwitchProps = typeof __propDef.props;
export declare type SwitchEvents = typeof __propDef.events;
export declare type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponentTyped<
    SwitchProps,
    SwitchEvents,
    SwitchSlots
> {}
