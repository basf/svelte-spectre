import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
declare type Validity = 'success' | 'error' | false;
export type { Size, Validity };
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: string;
        value?: string;
        rows?: number;
        inline?: boolean;
        validity?: Validity;
        size?: Size;
        expand?: Size;
    };
    events: {
        change: Event;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        iconLeft: {};
        iconRight: {};
        hint: {};
    };
};
export declare type InputProps = typeof __propDef.props;
export declare type InputEvents = typeof __propDef.events;
export declare type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<
    InputProps,
    InputEvents,
    InputSlots
> {}
