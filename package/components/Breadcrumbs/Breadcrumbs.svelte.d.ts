import { SvelteComponentTyped } from 'svelte';
import type { Offset } from '../../types/position';
interface Link {
    href: string;
    title: string;
}
export type { Link };
declare const __propDef: {
    props: {
        [x: string]: any;
        links: Link[];
        offset?: Offset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BreadcrumbsProps = typeof __propDef.props;
export declare type BreadcrumbsEvents = typeof __propDef.events;
export declare type BreadcrumbsSlots = typeof __propDef.slots;
export default class Breadcrumbs extends SvelteComponentTyped<
    BreadcrumbsProps,
    BreadcrumbsEvents,
    BreadcrumbsSlots
> {}
