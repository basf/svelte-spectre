import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
declare type Validity = 'success' | 'error' | false;
export type { Size, Validity };
declare const __propDef: {
    props: {
        options?: any[];
        value?: any[];
        multiple?: boolean;
        size: Size;
        inline?: boolean;
        validity?: Validity;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            option: any;
        };
    };
};
export declare type SelectProps = typeof __propDef.props;
export declare type SelectEvents = typeof __propDef.events;
export declare type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<
    SelectProps,
    SelectEvents,
    SelectSlots
> {}
