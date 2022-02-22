import { SvelteComponentTyped } from 'svelte';
import type { Zoom } from '../../types/size';
import type { Icons } from '../../types/icons';
import type { Color } from '../../types/text';
export type { Zoom, Icons };
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: Icons;
        size?: Zoom;
        color?: Color;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type IconProps = typeof __propDef.props;
export declare type IconEvents = typeof __propDef.events;
export declare type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<
    IconProps,
    IconEvents,
    IconSlots
> {}
