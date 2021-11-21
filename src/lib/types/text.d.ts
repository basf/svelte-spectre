/* class should be prefixed with `text-{type}` */

export type Color =
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'dark'
    | 'gray'
    | 'light'
    | 'success'
    | 'warning'
    | 'error'
    | '';
export type Position = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export type Case = 'none' | 'lowercase' | 'uppercase' | 'capitalize';
export type Weight =
    | 'normal'
    | 'bold'
    | 'italic'
    | 'muted'
    | 'large'
    | 'small'
    | 'tiny';
export type Overflow = 'clip' | 'ellipsis' | 'break';
export type Visibility = 'show' | 'hide' | 'assistive';
export type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
