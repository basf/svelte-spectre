import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
export type { Size };
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: Size;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ContainerProps = typeof __propDef.props;
export declare type ContainerEvents = typeof __propDef.events;
export declare type ContainerSlots = typeof __propDef.slots;
export default class Container extends SvelteComponentTyped<
    ContainerProps,
    ContainerEvents,
    ContainerSlots
> {}
