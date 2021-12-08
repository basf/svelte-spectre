import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Weight } from '../../types/text';
export declare type Status = 'online' | 'busy' | 'away' | 'offline' | null;
export type { Size, Weight };
declare const __propDef: {
    props: {
        [x: string]: any;
        name?: string;
        bg?: string;
        len?: number;
        caption?: boolean;
        custom?: boolean;
        size?: Size;
        weight?: Weight;
        status?: Status;
        badge?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        sub: {};
        caption: {};
    };
};
export declare type AvatarProps = typeof __propDef.props;
export declare type AvatarEvents = typeof __propDef.events;
export declare type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<
    AvatarProps,
    AvatarEvents,
    AvatarSlots
> {}
