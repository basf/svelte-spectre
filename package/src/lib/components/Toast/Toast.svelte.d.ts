import { SvelteComponentTyped } from 'svelte';
import type { ToastItem } from './toast';
import type { Color } from '../../types/bg';
import type { Icons } from '../../types/icons';
export type { Color, Icons, ToastItem };
declare const __propDef: {
    props: {
        toastItem?: ToastItem;
        invert?: boolean;
        reverse?: boolean;
        visible?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ToastProps = typeof __propDef.props;
export declare type ToastEvents = typeof __propDef.events;
export declare type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponentTyped<
    ToastProps,
    ToastEvents,
    ToastSlots
> {}
