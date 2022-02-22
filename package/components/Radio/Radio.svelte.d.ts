import { SvelteComponentTyped } from 'svelte';
declare type Validity = 'success' | 'error' | false;
export type { Validity };
declare const __propDef: {
    props: {
        [x: string]: any;
        label: string;
        radios?: any[];
        group?: number;
        inline?: boolean;
        validity?: Validity;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            radio: any;
        };
    };
};
export declare type RadioProps = typeof __propDef.props;
export declare type RadioEvents = typeof __propDef.events;
export declare type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponentTyped<
    RadioProps,
    RadioEvents,
    RadioSlots
> {}
