import { SvelteComponentTyped } from "svelte";
export declare const SIZE: {
    readonly sm: 320;
    readonly md: 640;
    readonly lg: 960;
};
export declare type Size = keyof typeof SIZE;
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean;
        size?: Size;
        fullscreen?: boolean;
        height?: string;
    };
    events: {
        toggle: any;
        adjust: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        header: {};
        content: {};
        footer: {};
    };
};
export declare type ModalProps = typeof __propDef.props;
export declare type ModalEvents = typeof __propDef.events;
export declare type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};
