/** @typedef {typeof __propDef.props}  SpectreProps */
/** @typedef {typeof __propDef.events}  SpectreEvents */
/** @typedef {typeof __propDef.slots}  SpectreSlots */
export default class Spectre extends SvelteComponentTyped<
    {
        [x: string]: any;
    },
    {
        [evt: string]: CustomEvent<any>;
    },
    {
        default: {};
    }
> {}
export type SpectreProps = typeof __propDef.props;
export type SpectreEvents = typeof __propDef.events;
export type SpectreSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
