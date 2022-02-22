import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        openLeft?: boolean;
        openRight?: boolean;
        show?: boolean;
        extclose?: boolean;
        right?: boolean;
        both?: boolean;
        breakpoint?: string | number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        sidebarLeft: {};
        default: {};
        sidebarRight: {};
    };
};
export declare type SidebarProps = typeof __propDef.props;
export declare type SidebarEvents = typeof __propDef.events;
export declare type SidebarSlots = typeof __propDef.slots;
export default class Sidebar extends SvelteComponentTyped<
    SidebarProps,
    SidebarEvents,
    SidebarSlots
> {}
export {};
