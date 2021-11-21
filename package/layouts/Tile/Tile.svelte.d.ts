import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        centered?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        title: {};
        subtitle: {};
        default: {};
        action: {};
    };
};
export declare type TileProps = typeof __propDef.props;
export declare type TileEvents = typeof __propDef.events;
export declare type TileSlots = typeof __propDef.slots;
export default class Tile extends SvelteComponentTyped<
    TileProps,
    TileEvents,
    TileSlots
> {}
export {};
