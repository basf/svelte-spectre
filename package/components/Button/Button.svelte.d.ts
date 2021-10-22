import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
declare type Variant =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'link'
    | 'success'
    | 'error';
declare type Shape = 'square' | 'circle' | false;
export type { Size, Variant, Shape };
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: Variant;
        size?: Size;
        shape?: Shape;
        active?: boolean;
        loading?: boolean;
        block?: boolean;
        input?: boolean;
        href?: string;
        badge: any;
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
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<
    ButtonProps,
    ButtonEvents,
    ButtonSlots
> {}
