import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Color } from '../../types/bg';
import type { Offset } from '../../types/position';
export type { Size, Color };
declare const __propDef: {
    props: {
        size?: Size;
        bg?: Color;
        center?: boolean;
        offset?: Offset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type HeroProps = typeof __propDef.props;
export declare type HeroEvents = typeof __propDef.events;
export declare type HeroSlots = typeof __propDef.slots;
export default class Hero extends SvelteComponentTyped<
    HeroProps,
    HeroEvents,
    HeroSlots
> {}
