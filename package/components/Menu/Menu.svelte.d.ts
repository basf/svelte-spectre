import { SvelteComponentTyped } from 'svelte';
import type { Icons } from '../../types/icons';
interface MenuItem {
    id?: number;
    text?: string;
    link?: string;
    icon?: Icons;
    active?: boolean;
    badge?: string;
    divider?: string;
    checkbox?: boolean;
    switch?: boolean;
    radio?: boolean;
}
export type { MenuItem, Icons };
declare const __propDef: {
    props: {
        [x: string]: any;
        items: MenuItem[];
        active: boolean;
        nav: boolean;
        radiogroup: any;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
        footer: {};
    };
};
export declare type MenuProps = typeof __propDef.props;
export declare type MenuEvents = typeof __propDef.events;
export declare type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponentTyped<
    MenuProps,
    MenuEvents,
    MenuSlots
> {}
