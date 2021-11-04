export const Transitions: string[];
export namespace Props {
    export const key: any;
    export namespace _in {
        export const type: ArrayConstructor;
        const _default: any[];
        export { _default as default };
    }
    export { _in as in };
    export namespace out {
        const type_1: ArrayConstructor;
        export { type_1 as type };
        const _default_1: any[];
        export { _default_1 as default };
    }
}
/** @typedef {typeof __propDef.props}  TransitionProps */
/** @typedef {typeof __propDef.events}  TransitionEvents */
/** @typedef {typeof __propDef.slots}  TransitionSlots */
export default class Transition extends SvelteComponentTyped<
    {
        key: any;
        in?: any[];
        out?: any[];
    },
    {
        [evt: string]: CustomEvent<any>;
    },
    {
        default: {};
    }
> {}
export type TransitionProps = typeof __propDef.props;
export type TransitionEvents = typeof __propDef.events;
export type TransitionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        key: any;
        in?: any[];
        out?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
