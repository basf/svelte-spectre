import { SvelteComponentTyped } from "svelte";
export declare const SIZE: {
    readonly sm: 320;
    readonly md: 640;
    readonly lg: 960;
    readonly fs: 100;
};
export declare type Size = keyof typeof SIZE;
declare const __propDef: {
    props: {
        custom?: boolean;
        open?: boolean;
        size?: Size;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        body: {};
        footer: {};
    };
};
export declare type ModalProps = typeof __propDef.props;
export declare type ModalEvents = typeof __propDef.events;
export declare type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};
