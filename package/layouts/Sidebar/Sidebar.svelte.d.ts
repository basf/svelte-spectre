import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Offset } from '../../types/position';
export type { Size, Offset };
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
        size?: Size;
        offset?: Offset;
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
