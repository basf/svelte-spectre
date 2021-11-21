import { SvelteComponentTyped } from 'svelte';
import type Icons from '../Icon/Icon.svelte';
declare type ItemProp = {
    title: string;
    path?: string;
    pos?: number;
    icon?: Icons;
    badge?: string;
    clear?: boolean;
};
export type { ItemProp };
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: ItemProp[];
        active?: string;
        block?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TabsProps = typeof __propDef.props;
export declare type TabsEvents = typeof __propDef.events;
export declare type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<
    TabsProps,
    TabsEvents,
    TabsSlots
> {}
