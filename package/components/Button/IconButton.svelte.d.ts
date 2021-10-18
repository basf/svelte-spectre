import { SvelteComponentTyped } from 'svelte';
import type { Variant } from '../Button';
import type { Zoom, Icons } from '../Icon';
import type { Color } from '../../types/text';
export type { Zoom, Icons, Variant, Color };
declare const __propDef: {
    props: {
        [x: string]: any;
        icon: Icons;
        iconSize?: Zoom;
        color?: Color;
    };
    events: {
        click: MouseEvent;
        dblclick: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type IconButtonProps = typeof __propDef.props;
export declare type IconButtonEvents = typeof __propDef.events;
export declare type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponentTyped<
    IconButtonProps,
    IconButtonEvents,
    IconButtonSlots
> {}
