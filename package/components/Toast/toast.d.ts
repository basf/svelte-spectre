import type { Icons } from '../../types/icons';
import type { Color } from '../../types/bg';
import type { Pos } from './positions';
interface ToastItem {
    id?: number;
    type?: Color;
    title?: string;
    msg?: string;
    icon?: Icons;
    closable?: boolean;
    timeout?: number;
    invert?: boolean;
    reverse?: boolean;
    pos?: Pos;
}
export type { Pos, ToastItem };
export declare const toast: {
    subscribe: (
        this: void,
        run: import('svelte/store').Subscriber<any[]>,
        invalidate?: (value?: any[]) => void
    ) => import('svelte/store').Unsubscriber;
    send: (toast?: ToastItem) => void;
    close: (id: number) => void;
    clear: () => void;
    default: (toast?: ToastItem) => void;
    error: (toast?: ToastItem) => void;
    warning: (toast?: ToastItem) => void;
    primary: (toast?: ToastItem) => void;
    success: (toast?: ToastItem) => void;
};
