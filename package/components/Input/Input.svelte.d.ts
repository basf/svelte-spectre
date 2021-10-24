import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
declare type Validity = 'success' | 'error' | false;
declare type Option = string | number | boolean;
export type { Size, Validity, Option };
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string;
        rows?: number;
        validity?: Validity;
        size?: Size;
        expand?: Size;
        width?: string;
        options?: Option[];
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
