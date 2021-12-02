import { SvelteComponentTyped } from 'svelte';
declare type Mq =
    | 'col'
    | 'ml'
    | 'mr'
    | 'mx'
    | 'mt'
    | 'mb'
    | 'my'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl';
export type { Mq };
declare const __propDef: {
    props: {
        [x: string]: any;
        mq?: Mq[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ColProps = typeof __propDef.props;
export declare type ColEvents = typeof __propDef.events;
export declare type ColSlots = typeof __propDef.slots;
export default class Col extends SvelteComponentTyped<
    ColProps,
    ColEvents,
    ColSlots
> {}
