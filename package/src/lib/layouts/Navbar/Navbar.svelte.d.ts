import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        center: {};
        right: {};
    };
};
export declare type NavbarProps = typeof __propDef.props;
export declare type NavbarEvents = typeof __propDef.events;
export declare type NavbarSlots = typeof __propDef.slots;
export default class Navbar extends SvelteComponentTyped<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
