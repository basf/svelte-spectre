/** @typedef {typeof __propDef.props}  TileProps */
/** @typedef {typeof __propDef.events}  TileEvents */
/** @typedef {typeof __propDef.slots}  TileSlots */
export default class Tile extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    title: {};
    subtitle: {};
    default: {};
    action: {};
}> {
}
export type TileProps = typeof __propDef.props;
export type TileEvents = typeof __propDef.events;
export type TileSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
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
export {};
