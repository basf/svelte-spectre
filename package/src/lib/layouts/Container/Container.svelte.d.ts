import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Offset } from '../../types/position';
export type { Size, Offset };
declare const __propDef: {
    props: {
        size?: Size;
        offset?: Offset;
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
