import { SvelteComponentTyped } from 'svelte';
export declare type Position = 'top' | 'middle' | 'bottom';
declare const __propDef: {
    props: {
        [x: string]: any;
        pos?: Position;
        clear?: boolean;
        flat?: boolean;
        outlined?: boolean;
        expand?: boolean;
        shadowed?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        img: {};
        title: {};
        subtitle: {};
        default: {};
        footer: {};
    };
};
export declare type CardProps = typeof __propDef.props;
export declare type CardEvents = typeof __propDef.events;
export declare type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<
    CardProps,
    CardEvents,
    CardSlots
> {}
export {};
