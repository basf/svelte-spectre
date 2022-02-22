import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string;
        placeholder?: string;
        predefined?: string[];
        suggested?: string[];
        selected?: string[];
        created?: string[];
        creatable?: boolean;
        predictable?: boolean;
        groups?: string[];
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AutocompleteProps = typeof __propDef.props;
export declare type AutocompleteEvents = typeof __propDef.events;
export declare type AutocompleteSlots = typeof __propDef.slots;
export default class Autocomplete extends SvelteComponentTyped<
    AutocompleteProps,
    AutocompleteEvents,
    AutocompleteSlots
> {}
export {};
