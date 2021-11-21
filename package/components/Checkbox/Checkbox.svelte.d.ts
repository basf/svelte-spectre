import { SvelteComponentTyped } from 'svelte';
declare type Validity = 'success' | 'error' | false;
export type { Validity };
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: boolean;
        indeterminate?: boolean;
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
export declare type CheckboxProps = typeof __propDef.props;
export declare type CheckboxEvents = typeof __propDef.events;
export declare type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<
    CheckboxProps,
    CheckboxEvents,
    CheckboxSlots
> {}
