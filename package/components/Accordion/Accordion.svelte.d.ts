import { SvelteComponentTyped } from 'svelte';
import type { Offset } from '../../types/position';
export type { Offset };
declare const __propDef: {
    props: {
        opened?: boolean;
        toggled?: boolean;
        title?: string;
        offset?: Offset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AccordionProps = typeof __propDef.props;
export declare type AccordionEvents = typeof __propDef.events;
export declare type AccordionSlots = typeof __propDef.slots;
export default class Accordion extends SvelteComponentTyped<
    AccordionProps,
    AccordionEvents,
    AccordionSlots
> {}
