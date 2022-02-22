import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        horizontal: boolean;
    };
    events: {
        submit: SubmitEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type FormProps = typeof __propDef.props;
export declare type FormEvents = typeof __propDef.events;
export declare type FormSlots = typeof __propDef.slots;
export default class Form extends SvelteComponentTyped<
    FormProps,
    FormEvents,
    FormSlots
> {}
export {};
