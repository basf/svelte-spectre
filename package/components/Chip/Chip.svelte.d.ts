import { SvelteComponentTyped } from 'svelte';
import type { Status } from '../Avatar/Avatar.svelte';
export type { Status };
declare const __propDef: {
    props: {
        [x: string]: any;
        avatar?: boolean;
        name?: string;
        status?: Status;
        active?: boolean;
        closable?: boolean;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        avatar: {};
        default: {};
    };
};
export declare type ChipProps = typeof __propDef.props;
export declare type ChipEvents = typeof __propDef.events;
export declare type ChipSlots = typeof __propDef.slots;
export default class Chip extends SvelteComponentTyped<
    ChipProps,
    ChipEvents,
    ChipSlots
> {}
