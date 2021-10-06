/* class should be prefixed with `float-{type}` */
export type Float = 'none' | 'left' | 'right';

/* class should be prefixed with `p-{type}` */
export type Position =
    | 'static'
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | 'centered';

/* class should be postfixed with `{type}-1` or `{type}-2` */
export type Margin = 'm' | 'mt' | 'mb' | 'mx' | 'my' | false;
export type Padding = 'p' | 'pt' | 'pb' | 'px' | 'py' | false;

/* global offset rules */
type Offset =
    | 'my-0'
    | 'my-1'
    | 'my-2'
    | 'my-auto'
    | 'mx-0'
    | 'mx-1'
    | 'mx-2'
    | 'mx-auto'
    | 'mt-0'
    | 'mt-1'
    | 'mt-2'
    | 'mt-auto'
    | 'mb-0'
    | 'mb-1'
    | 'mb-2'
    | 'mb-auto'
    | 'ml-0'
    | 'ml-1'
    | 'ml-2'
    | 'ml-auto'
    | 'mr-0'
    | 'mr-1'
    | 'mr-2'
    | 'mr-auto'
    | '';

/* global inset rules */
type Inset =
    | 'py-0'
    | 'py-1'
    | 'py-2'
    | 'px-0'
    | 'px-1'
    | 'px-2'
    | 'pt-0'
    | 'pt-1'
    | 'pt-2'
    | 'pb-0'
    | 'pb-1'
    | 'pb-2'
    | 'pl-0'
    | 'pl-1'
    | 'pl-2'
    | 'pr-0'
    | 'pr-1'
    | 'pr-2'
    | '';
