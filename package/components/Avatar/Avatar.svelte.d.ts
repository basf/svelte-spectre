import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Weight } from '../../types/text';
import type { Offset } from '../../types/position';
export declare type Status = 'online' | 'busy' | 'away' | 'offline' | false;
export type { Offset, Size, Weight };
declare const __propDef: {
    props: {
        name?: string;
        bg?: string;
        len?: number;
        caption?: boolean;
        size?: Size;
        weight?: Weight;
        status?: Status;
        offset?: Offset;
        badge: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        sub: {
            subclass: string;
        };
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
