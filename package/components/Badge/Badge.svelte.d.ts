import { SvelteComponentTyped } from 'svelte';
import type { Offset } from '../../types/position';
import type { Color } from '../../types/text';
export type { Offset, Color };
declare const __propDef: {
    props: {
        [x: string]: any;
        offset?: Offset;
        color?: Color;
        rounded?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BadgeProps = typeof __propDef.props;
export declare type BadgeEvents = typeof __propDef.events;
export declare type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponentTyped<
    BadgeProps,
    BadgeEvents,
    BadgeSlots
> {}
