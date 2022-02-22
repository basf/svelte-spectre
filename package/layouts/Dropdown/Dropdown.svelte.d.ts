import { SvelteComponentTyped } from 'svelte';
declare type Align = 'left' | 'center' | 'right';
declare const __propDef: {
    props: {
        [x: string]: any;
        active?: boolean;
        align?: Align;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        content: {};
    };
};
export declare type DropdownProps = typeof __propDef.props;
export declare type DropdownEvents = typeof __propDef.events;
export declare type DropdownSlots = typeof __propDef.slots;
export default class Dropdown extends SvelteComponentTyped<
    DropdownProps,
    DropdownEvents,
    DropdownSlots
> {}
export {};
