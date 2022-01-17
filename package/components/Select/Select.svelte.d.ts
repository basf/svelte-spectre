import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
declare type Validity = 'success' | 'error' | false;
declare type Primitive = string | number | boolean;
declare type Value = Primitive[] | Primitive | undefined;
declare type Selected = number[] | number | undefined;
declare type Option =
    | Primitive
    | {
          value: Primitive;
          label?: string;
      };
export type { Size, Validity, Value, Option };
declare const __propDef: {
    props: {
        [x: string]: any;
        options?: Option[];
        value: Value;
        selected: Selected;
        inline?: boolean;
        multiple?: boolean;
        unselected?: boolean;
        size: Size;
        validity?: Validity;
    };
    events: {
        change: Event;
        click: MouseEvent;
        dblclick: MouseEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        scroll: Event;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            option: Option;
        };
    };
};
export declare type SelectProps = typeof __propDef.props;
export declare type SelectEvents = typeof __propDef.events;
export declare type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<
    SelectProps,
    SelectEvents,
    SelectSlots
> {}
