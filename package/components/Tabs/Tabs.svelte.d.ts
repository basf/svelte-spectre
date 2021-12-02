import { SvelteComponentTyped } from 'svelte';
import type Icons from '../Icon/Icon.svelte';
interface Item {
    title: string;
    path?: string;
    icon?: Icons;
    badge?: string;
    clear?: boolean;
}
export type { Icons, Item };
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: Item[];
        active?: number;
        block?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        action: {};
    };
};
export declare type TabsProps = typeof __propDef.props;
export declare type TabsEvents = typeof __propDef.events;
export declare type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<
    TabsProps,
    TabsEvents,
    TabsSlots
> {}
