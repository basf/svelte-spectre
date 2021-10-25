import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        page?: number;
        total?: number;
        limit?: number;
        rest: number;
        perpage?: boolean;
    };
    events: {
        limited: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        prev: {};
        rest: {};
        next: {};
    };
};
export declare type PaginationProps = typeof __propDef.props;
export declare type PaginationEvents = typeof __propDef.events;
export declare type PaginationSlots = typeof __propDef.slots;
export default class Pagination extends SvelteComponentTyped<
    PaginationProps,
    PaginationEvents,
    PaginationSlots
> {}
export {};
