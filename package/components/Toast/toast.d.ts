import type { Icons } from '../../types/icons';
import type { Color } from '../../types/bg';
import type { Pos } from './positions';
export type { Pos, Tost };
declare type Tost = {
    id?: number;
    type?: Color;
    title?: string;
    msg?: string;
    icon?: Icons;
    close?: boolean;
    timeout?: number;
    init?: number;
    next?: number;
    invert?: boolean;
    reverse?: boolean;
    pos?: Pos;
};
export declare const toast: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
    send: (toast?: Tost) => void;
    close: (id: number) => void;
    clear: () => void;
    default: (toast?: Tost) => void;
    error: (toast?: Tost) => void;
    warning: (toast?: Tost) => void;
    primary: (toast?: Tost) => void;
    success: (toast?: Tost) => void;
};
