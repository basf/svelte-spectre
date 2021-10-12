import { SvelteComponentTyped } from 'svelte';
import type { Validity } from '../../components/Input';
export type { Validity };
declare const __propDef: {
    props: {
        [x: string]: any;
        horizontal?: boolean;
        validity?: Validity;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GroupProps = typeof __propDef.props;
export declare type GroupEvents = typeof __propDef.events;
export declare type GroupSlots = typeof __propDef.slots;
export default class Group extends SvelteComponentTyped<
    GroupProps,
    GroupEvents,
    GroupSlots
> {}
