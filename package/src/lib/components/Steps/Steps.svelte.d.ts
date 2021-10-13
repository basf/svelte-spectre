import { SvelteComponentTyped } from 'svelte';
export declare type Step = {
    label: string;
    href?: string;
};
declare const __propDef: {
    props: {
        steps?: Step[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StepsProps = typeof __propDef.props;
export declare type StepsEvents = typeof __propDef.events;
export declare type StepsSlots = typeof __propDef.slots;
export default class Steps extends SvelteComponentTyped<
    StepsProps,
    StepsEvents,
    StepsSlots
> {}
export {};
